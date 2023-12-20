import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import Sidebar from '../components/Sidebar/Sidebar';
import ModalMobileMenu from '../components/ModalMobileMenu/ModalMobileMenu';
import Header from '../components/Layout/Header/Header';
import Title from '../components/Title/Title';
import CompanyComponent from '../components/CompanyComponent/CompanyComponent';
import ArrowBack from '../components/ui/icons/ArrowBack';
import AddFavoriteIcon from '../components/ui/icons/AddFavoriteIcon';

const override = css`
  display: block;
  margin: 0 auto;
`;

const DynamicComponent = () => {
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
          title: 'Adlay-Cagdianao-Tandawa',
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
        className={`bg-main-bg min-h-screen w-full ml-[240px] bg-main-bg px-[24px] max-[1024px]:ml-[0] max-[1024px]:px-[0]`}
      >
        <Header />
        <main className="pt-[22px] pb-[38px] max-[1024px]:px-[32px] max-[768px]:px-[16px]">
          <div className="flex items-center gap-[10px]">
            <NavLink to="/" className="mb-[32px]">
              <ArrowBack />
            </NavLink>
            <Title title={data?.title} classExtra="max-[769px]:text-[24px]" />
            <button className="mb-[32px]">
              <AddFavoriteIcon />
            </button>
          </div>
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
            <CompanyComponent />
          )}
        </main>
      </div>
    </div>
  );
};

export default DynamicComponent;
