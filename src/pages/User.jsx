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

const override = css`
  display: block;
  margin: 0 auto;
`;

const User = () => {
  const { activeMenu } = useStateContext();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call with a timeout
    const fetchDataById = async () => {
      try {
        // Simulating a delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Simulating data retrieval
        setData({
          title: 'Devon Lane',
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataById();
  }, [id]);

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
                className="flex items-start gap-[71px] w-full max-[1025px]:items-start max-[1025px]:gap-[32px]
             max-[769px]:flex-col max-[769px]:w-full max-[769px]:gap-[4px]"
              >
                <img src={avatarExp} alt="Avatar" />
                <ProfileInfo name={'Name'} email={'test@gmail.com'} user={true} />
              </div>
            </div>
            <TablePayment />
            <TableFavourites />
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
