import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Layout/Header/Header';
import Title from '../components/Title/Title';
import Plan from '../components/PlanComponent/Plan';
import data from '../data/plans.json';
import ModalMobileMenu from '../components/ModalMobileMenu/ModalMobileMenu';
import { useStateContext } from '../context/ContextProvider';

const Plans = () => {
  const [activeTime, setActiveTime] = useState('month');
  const { activeMenu } = useStateContext();
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
        <main className="pt-[22px] pb-[38px] max-[1025px]:px-[32px] max-[769px]:px-[16px]">
          <Title title="Choose a Plan" />
          <div className="flex items-center justify-between mb-[24px] max-[600px]:flex-col max-[600px]:items-start">
            <div className="text-[18px] leading-[100%] text-white max-[600px]:mb-[24px]">
              Your Plan: <span className="underline">Free trial</span>
            </div>
            <div className="p-2 bg-gray-bg rounded max-[600px]:w-full">
              <button
                className={`px-[35px] py-[3px] text-[16px] max-[600px]:w-1/2 ${
                  activeTime === 'month' ? 'text-white bg-btn-active rounded' : 'text-[#D9D9D9] bg-gray-bg'
                }`}
                onClick={() => setActiveTime('month')}
              >
                Month
              </button>
              <button
                className={`px-[35px] py-[3px] text-[16px] max-[600px]:w-1/2 ${
                  activeTime === 'year' ? 'text-white bg-btn-active rounded' : 'text-[#D9D9D9] bg-gray-bg'
                }`}
                onClick={() => setActiveTime('year')}
              >
                Year
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 min-[768px]:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item, index) => (
              <Plan data={item} key={`plan-${item?.title}${index}`} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Plans;
