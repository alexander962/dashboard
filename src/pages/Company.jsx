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
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';

const override = css`
  display: block;
  margin: 0 auto;
`;

const Company = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { activeMenu } = useStateContext();
  const { userToken } = useAuth();
  const [isFavorite, setIsFavorite] = useState(data?.isFavorite);

  const newValueProduction = data?.commodityProduction[data?.commodityProduction.length - 1].tone;
  const previousValueProduction = data?.commodityProduction[data?.commodityProduction.length - 2].tone;
  let percentProduction;
  if (newValueProduction && newValueProduction) {
    percentProduction = ((newValueProduction - previousValueProduction) / previousValueProduction) * 100;
    percentProduction = percentProduction.toFixed(2);
  } else {
    percentProduction = '0';
  }

  const newValueProcessed = data?.oreProcessed[data?.oreProcessed.length - 1].tone;
  const previousValueProcessed = data?.oreProcessed[data?.oreProcessed.length - 2].tone;
  let percentProcessed;
  if (newValueProcessed && newValueProcessed) {
    percentProcessed = ((newValueProcessed - previousValueProcessed) / previousValueProcessed) * 100;
    percentProcessed = percentProcessed.toFixed(2);
  } else {
    percentProcessed = '0';
  }

  const newValueCosts = data?.processingCosts[data?.processingCosts.length - 1].tone;
  const previousValueCosts = data?.processingCosts[data?.processingCosts.length - 2].tone;
  let percentCosts;
  if (newValueCosts && newValueCosts) {
    percentCosts = ((newValueCosts - previousValueCosts) / previousValueCosts) * 100;
    percentCosts = percentCosts.toFixed(2);
  } else {
    percentCosts = '0';
  }

  const addToFavorites = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    try {
      const response = await axios.post(`${apiUrl}/favorites/${id}`, null, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (response.status === 201 || response.status === 200) {
        setIsFavorite(true);
        toast.success('Added to favorites successfully!');
      } else {
        toast.error('Failed to add to favorites');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    setIsFavorite(data?.isFavorite);
  }, [data?.isFavorite]);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const fetchDataById = async () => {
      try {
        const response = await axios.get(`${apiUrl}/mines/get-one/${id}`, {
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
        toast.error(error?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDataById();
  }, [id]);

  console.log('data', data);

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
            <Title title={data?.name} classExtra="max-[769px]:text-[24px]" />
            <button
              onClick={addToFavorites}
              disabled={isFavorite}
              className={data?.isFavorite ? 'mb-[32px] favorite-company' : 'mb-[32px]'}
            >
              <AddFavoriteIcon favorite={isFavorite} />
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
              <CompanyComponent data={data} />
              <div className="my-4">
                <GraphProduction
                  data={data}
                  dataMines={data?.commodityProduction}
                  percent={percentProduction}
                  // dataMonth={articleDataProduction?.dataMonth}
                  // dataYear={articleDataProduction?.dataYear}
                  // dataDay={articleDataProduction?.dataDay}
                  // title={articleDataProduction?.label}
                  // percent={articleDataProduction?.percent}
                />
              </div>
              <div className="flex justify-between items-center gap-[24px] max-[769px]:flex-col">
                <div className="w-1/2 max-[769px]:w-full">
                  <GraphProduction
                    data={data}
                    dataMines={data?.oreProcessed}
                    percent={percentProcessed}
                    // dataMonth={articleDataProduction?.dataMonth}
                    // dataYear={articleDataProduction?.dataYear}
                    // dataDay={articleDataProduction?.dataDay}
                    // title={articleDataProduction?.label}
                    // percent={articleDataProduction?.percent}
                  />
                </div>
                <div className="w-1/2 max-[769px]:w-full">
                  <GraphProduction
                    data={data}
                    dataMines={data?.processingCosts}
                    percent={percentCosts}
                    // dataMonth={articleDataProduction?.dataMonth}
                    // dataYear={articleDataProduction?.dataYear}
                    // dataDay={articleDataProduction?.dataDay}
                    // title={articleDataProduction?.label}
                    // percent={articleDataProduction?.percent}
                  />
                </div>
                {/*  <div className="w-1/2 max-[769px]:w-full">*/}
                {/*    <GraphRevenue*/}
                {/*      data={articleDataRevenue}*/}
                {/*      key={articleDataRevenue}*/}
                {/*      title={articleDataRevenue?.label}*/}
                {/*      percent={articleDataRevenue?.percent}*/}
                {/*    />*/}
                {/*  </div>*/}
                {/*  <div className="w-1/2 max-[769px]:w-full">*/}
                {/*    <GraphExpenses*/}
                {/*      data={articleDataExpenses}*/}
                {/*      key={articleDataExpenses}*/}
                {/*      title={articleDataExpenses?.label}*/}
                {/*      percent={articleDataExpenses?.percent}*/}
                {/*    />*/}
                {/*  </div>*/}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Company;
