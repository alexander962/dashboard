import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Layout/Header/Header';
import Title from '../components/Title/Title';
import { useStateContext } from '../context/ContextProvider';
import ModalMobileMenu from '../components/ModalMobileMenu/ModalMobileMenu';
import GraphUsers from '../components/GrapgUsers/GraphUsers';
import GraphProduction from '../components/GraphProduction/GraphProduction';
import { graphDataProduction } from '../data/graphData';

const DashboardAdmin = () => {
  const { activeMenu } = useStateContext();
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
            {graphDataProduction.map(
              (item, index) =>
                index === 0 && (
                  <GraphProduction
                    dataMonth={item.dataMonth}
                    dataYear={item.dataYear}
                    dataDay={item.dataDay}
                    key={index}
                    title={item.label}
                    percent={item.percent}
                    index={index + 1}
                  />
                )
            )}
            <GraphUsers />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardAdmin;
