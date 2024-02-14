import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Layout/Header/Header';
import Title from '../components/Title/Title';
import FormGraphics from '../components/FormGraphics/FormGraphics';
import Table from '../components/Table/Table';
import { useStateContext } from '../context/ContextProvider';
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

const Favourites = () => {
  const { tableDisplay, selectedField, setSelectedField, activeMenu } = useStateContext();
  const { userToken, userData } = useAuth();
  const [graphsData, setGraphsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(50);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState(['', '', '', '', '', '', '', '']);

  useEffect(() => {
    getMines();
  }, [currentPage, perPage, filters]);

  const getMines = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const response = await axios.get(`${apiUrl}/favorites`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
        params: {
          userId: userData?.id,
          page: currentPage,
          perPage: perPage,
          name: filters[0],
          primaryCommodity: filters[1],
          developmentStage: filters[2],
          mineType: filters[3],
          // listOfCommodities: filters[4],
          country: filters[5],
          region: filters[6],
          // activityStatus: [7],
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

  const handleDeleteGraph = graphId => {
    const updatedGraphsData = graphsData.filter(graph => graph?.id !== graphId);
    setGraphsData(updatedGraphsData);
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
          <Title title="Favourites" />
          <FormGraphics
            selectedField={selectedField}
            setSelectedField={setSelectedField}
            filters={filters}
            setFilters={setFilters}
            isFavourite={true}
          />
          {tableDisplay ? (
            <Table graphsData={graphsData} currentPage={currentPage} setCurrentPage={setCurrentPage} />
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
              graphsData={graphsData}
              selectedField={selectedField}
              setSelectedField={setSelectedField}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              isFavourite={true}
              onDeleteGraph={handleDeleteGraph}
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

export default Favourites;
