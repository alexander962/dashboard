import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Layout/Header/Header';
import Title from '../components/Title/Title';
import { useStateContext } from '../context/ContextProvider';
import ModalMobileMenu from '../components/ModalMobileMenu/ModalMobileMenu';
import TableUpdateInfo from '../components/TableUpdateInfo/TableUpdateInfo';
import ArrowBack from '../components/ui/icons/ArrowBack';
import { NavLink, useParams } from 'react-router-dom';
import Table from '../components/Table/Table';
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

const Update = () => {
  const { id } = useParams();
  const { activeMenu } = useStateContext();
  const { userToken } = useAuth();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getHistory();
  }, [currentPage]);

  const getHistory = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const response = await axios.get(`${apiUrl}/history/${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
        params: {
          id: id,
          page: currentPage,
          perPage: 50,
        },
      });

      if (response.status === 200 || response.status === 204) {
        setData(response?.data);
      } else {
        console.error('Failed!!!');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  console.log('data', data);

  return (
    <div className="flex relative bg-main-bg">
      <Sidebar admin={true} />
      <ModalMobileMenu />
      <div
        className={`bg-main-bg min-h-screen w-full ${
          activeMenu ? 'ml-[240px]' : 'ml-[102px] transition-all duration-300'
        } bg-main-bg px-[24px] max-[1024px]:ml-[0] max-[1024px]:px-[0]`}
      >
        <Header />
        <main className="flex items-center pt-[22px] pb-[38px] max-[1024px]:px-[32px] max-[768px]:px-[16px]">
          <NavLink to="/update" className="mb-[32px]">
            <ArrowBack />
          </NavLink>
          <Title title={`№ ${id}`} />
        </main>
        {/*<TableUpdateInfo />*/}
        {loading ? (
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
          <>
            <Table graphsData={data?.mines} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <div className="mt-[20px]">
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(data?.count / 50)}
                onPageChange={setCurrentPage}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Update;
