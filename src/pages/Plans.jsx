import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Layout/Header/Header';
import Title from '../components/Title/Title';
import Plan from '../components/PlanComponent/Plan';
import data from '../data/plans.json';

const Plans = () => {
  return (
    <div className="flex relative bg-main-bg">
      <Sidebar />
      <div
        className={`bg-main-bg min-h-screen w-full ml-[240px] bg-main-bg px-[24px] max-[1024px]:ml-[0] max-[1024px]:px-[0]`}
      >
        <Header />
        <main className="pt-[22px] pb-[38px] max-[1024px]:px-[32px] max-[768px]:px-[16px]">
          <Title title="Choose a Plan" />
          <div className="grid grid-cols-3 gap-x-[36px] gap-y-[20px]">
            {data.map(item => (
              <Plan data={item} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Plans;
