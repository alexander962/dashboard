import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Layout/Header/Header';
import Title from '../components/Title/Title';
import FormGraphics from '../components/FormGraphics/FormGraphics';
import { useStateContext } from '../context/ContextProvider';
import Table from '../components/Table/Table';
import ModalMobileMenu from '../components/ModalMobileMenu/ModalMobileMenu';
import GraphBlock from '../components/GraphBlocks/GraphBlocks';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import Pagination from '../components/Pagination/Pagination';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/react';

const override = css`
  display: block;
  margin: 0 auto;
`;

const Dashboard = () => {
  const { tableDisplay, selectedField, setSelectedField, activeMenu } = useStateContext();
  const { userToken } = useAuth();
  const [graphsData, setGraphsData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(50);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMines();
  }, [currentPage, perPage]);

  const getMines = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const response = await axios.get(`${apiUrl}/mines`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
        params: {
          page: currentPage,
          perPage: perPage,
        },
      });

      if (response.status === 200 || response.status === 204) {
        setGraphsData(response?.data);
      } else {
        console.error('Failed!!!');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex relative bg-main-bg">
      <Sidebar />
      <ModalMobileMenu />
      <div
        className={`bg-main-bg min-h-screen w-full ${
          activeMenu ? 'ml-[240px]' : 'ml-[102px] transition-all duration-300'
        } bg-main-bg px-[24px] max-[1024px]:ml-[0] max-[1024px]:px-[0]`}
      >
        <Header />
        <main className="pt-[22px] pb-[38px] max-[1024px]:px-[32px] max-[768px]:px-[16px]">
          <Title title="Dashboard" />
          <FormGraphics selectedField={selectedField} setSelectedField={setSelectedField} />
          {tableDisplay ? (
            <Table graphsData={graphsData?.mines} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          ) : loading ? (
            <div>
              <ClipLoader
                color={'blue'}
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : (
            <GraphBlock
              graphsData={graphsData?.mines}
              selectedField={selectedField}
              setSelectedField={setSelectedField}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
          <div className="mt-[20px]">
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(graphsData?.count / perPage)}
              onPageChange={setCurrentPage}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
