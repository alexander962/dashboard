import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import ModalMobileMenu from '../components/ModalMobileMenu/ModalMobileMenu';
import Header from '../components/Layout/Header/Header';
import { useStateContext } from '../context/ContextProvider';
import { NavLink, useParams } from 'react-router-dom';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import Title from '../components/Title/Title';
import ArrowBack from '../components/ui/icons/ArrowBack';
import { avatarExp } from '../assets/images';
import ProfileInfo from '../components/Profile/ProfileInfo/ProfileInfo';
import TablePayment from '../components/TablePayment/TablePayment';
import TableFavourites from '../components/TableFavourites/TableFavourites';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import Pagination from '../components/Pagination/Pagination';
import Table from '../components/Table/Table';

const override = css`
  display: block;
  margin: 0 auto;
`;

const User = () => {
  const { activeMenu } = useStateContext();
  const { userToken, refreshTokenFunc } = useAuth();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [avatar, setAvatar] = useState(`${process.env.REACT_APP_URL}/${data?.id}`);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(50);
  const [graphsData, setGraphsData] = useState([]);

  useEffect(() => {
    setIsImageLoaded(false);

    const img = new Image();
    img.onload = () => {
      setIsImageLoaded(true);
    };
    img.src = avatar;
  }, [avatar]);

  useEffect(() => {
    getUser();
    getMines();
  }, []);

  useEffect(() => {
    if (data) {
      setAvatar(`${process.env.REACT_APP_URL}/${data?.id}`);
    }
  }, [data]);

  const getUser = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const response = await axios.get(`${apiUrl}/users/${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (response.status === 200 || response.status === 204) {
        setData(response?.data);
      } else {
        console.error('Failed!!!');
      }
    } catch (error) {
      if (error?.response?.status && error?.response?.status === 403) {
        refreshTokenFunc();
      } else {
        toast.error(error?.message ? error?.message : error?.response?.data?.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const getMines = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const response = await axios.get(`${apiUrl}/favorites`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
        params: {
          userId: id,
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
      if (error?.response?.status && error?.response?.status === 403) {
        refreshTokenFunc();
      } else {
        toast.error(error?.message ? error?.message : error?.response?.data?.message);
      }
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
          <div className="pb-[38px]">
            <div className="flex items-center gap-[10px] mt-[36px]">
              <NavLink to="/users" className="mb-[32px]">
                <ArrowBack />
              </NavLink>
              <Title title={data?.title} classExtra="max-[769px]:text-[24px]" />
            </div>
            <div className="flex justify-between gap-[20px] items-start bg-gray-bg rounded-2xl py-[32px] px-[24px] max-[769px]:flex-col-reverse">
              <div
                className="flex items-center gap-[71px] w-full max-[1025px]:items-start max-[1025px]:gap-[32px]
             max-[769px]:flex-col max-[769px]:w-full max-[769px]:gap-[4px] max-[769px]:items-center"
              >
                <div className="w-[158px] h-[158px] rounded-[50%] mr-2">
                  {isImageLoaded ? (
                    <img
                      src={`${process.env.REACT_APP_URL}/${data?.id}`}
                      alt=""
                      className="w-[158px] h-[158px] max-w-[158px] rounded-[50%] object-cover"
                    />
                  ) : (
                    <img src={avatarExp} alt="" className="w-full min-w-[158px] object-cover" />
                  )}
                </div>
                <ProfileInfo name={data?.fullName} email={data?.email} tariff={data?.tariff} user={true} />
              </div>
            </div>
            {/*<TablePayment />*/}
            {/*<TableFavourites />*/}
            <Table graphsData={graphsData?.mines} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <div className="mt-[20px]">
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(graphsData?.count / perPage)}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
