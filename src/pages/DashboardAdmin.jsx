import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Layout/Header/Header';
import Title from '../components/Title/Title';
import { useStateContext } from '../context/ContextProvider';
import ModalMobileMenu from '../components/ModalMobileMenu/ModalMobileMenu';
import GraphUsers from '../components/GrapgUsers/GraphUsers';
import GraphProduction from '../components/GraphProduction/GraphProduction';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/react';

const override = css`
  display: block;
  margin: 0 auto;
`;

const DashboardAdmin = () => {
  const { activeMenu } = useStateContext();
  const { userToken } = useAuth();
  const [graphData, setGraphData] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProduction();
    getUsers();
  }, []);

  const getProduction = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const response = await axios.get(`${apiUrl}/mines/get-all-production`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (response.status === 200 || response.status === 204) {
        setGraphData(response?.data);
      } else {
        console.error('Failed!!!');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const getUsers = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const response = await axios.get(`${apiUrl}/users`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (response.status === 200 || response.status === 204) {
        setUsers(response?.data);
      } else {
        console.error('Failed!!!');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  console.log('graphData', graphData);
  console.log('users', users);

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
        <main className="pt-[22px] pb-[38px] max-[1024px]:px-[32px] max-[768px]:px-[16px]">
          <Title title="Dashboard" />
          <div className="grid grid-cols-2 max-[1024px]:grid-cols-1 gap-x-[24px] gap-y-[18px] mt-[12px]">
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
                <GraphProduction data={{ name: 'Production(tonnes)' }} dataMines={graphData} />
                <GraphUsers usersData={users} />
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardAdmin;
