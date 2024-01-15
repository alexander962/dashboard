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
import { useStateContext } from '../context/ContextProvider';
import GraphProduction from '../components/GraphProduction/GraphProduction';
import { articleDataProduction, articleDataRevenue, articleDataExpenses } from '../data/articleData';
import GraphRevenue from '../components/GraphRevenue/GraphRevenue';
import GraphExpenses from '../components/GraphExpenses/GraphExpenses';

const override = css`
  display: block;
  margin: 0 auto;
`;

const DynamicComponent = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { activeMenu } = useStateContext();

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
        className={`bg-main-bg min-h-screen w-full ${
          activeMenu ? 'ml-[240px]' : 'ml-[102px] transition-all duration-300'
        } bg-main-bg px-[24px] max-[1024px]:ml-[0] max-[1024px]:px-[0]`}
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
            <div>
              <CompanyComponent />
              <div className="my-4">
                <GraphProduction
                  dataMonth={articleDataProduction?.dataMonth}
                  dataYear={articleDataProduction?.dataYear}
                  dataDay={articleDataProduction?.dataDay}
                  title={articleDataProduction?.label}
                  percent={articleDataProduction?.percent}
                />
              </div>
              <div className="flex justify-between items-center gap-[24px] max-[769px]:flex-col">
                <div className="w-1/2 max-[769px]:w-full">
                  <GraphRevenue
                    data={articleDataRevenue}
                    key={articleDataRevenue}
                    title={articleDataRevenue?.label}
                    percent={articleDataRevenue?.percent}
                  />
                </div>
                <div className="w-1/2 max-[769px]:w-full">
                  <GraphExpenses
                    data={articleDataExpenses}
                    key={articleDataExpenses}
                    title={articleDataExpenses.label}
                    percent={articleDataExpenses.percent}
                  />
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DynamicComponent;
