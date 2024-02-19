import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Layout/Header/Header';
import Title from '../components/Title/Title';
import { useStateContext } from '../context/ContextProvider';
import ModalMobileMenu from '../components/ModalMobileMenu/ModalMobileMenu';
import TableUpdate from '../components/TableUpdate/TableUpdate';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/react';

const override = css`
  display: block;
  margin: 0 auto;
`;

const Update = () => {
  const { activeMenu } = useStateContext();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userToken } = useAuth();

  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const response = await axios.get(`${apiUrl}/history`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (response.status === 200 || response.status === 204) {
        setHistory(response?.data);
      } else {
        console.error('Failed!!!');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const getNewHistory = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const response = await axios.post(`${apiUrl}/mines`, null, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (response.status === 200 || response.status === 204) {
        setHistory(response?.data);
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
      <Sidebar admin={true} />
      <ModalMobileMenu />
      <div
        className={`bg-main-bg min-h-screen w-full ${
          activeMenu ? 'ml-[240px]' : 'ml-[102px] transition-all duration-300'
        } bg-main-bg px-[24px] max-[1024px]:ml-[0] max-[1024px]:px-[0]`}
      >
        <Header />
        <main className="flex-center-between pt-[22px] pb-[38px] max-[1024px]:px-[32px] max-[768px]:px-[16px]">
          <Title title="Updates" />
          <button
            className="text-white font-medium text-[16px] py-[9px] px-[30px] bg-btn-active rounded transition-all duration-300 hover:bg-btn-hover"
            onClick={getNewHistory}
          >
            Update data
          </button>
        </main>
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
          <TableUpdate data={history} />
        )}
      </div>
    </div>
  );
};

export default Update;
