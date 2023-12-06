import React from 'react';
import { useStateContext } from '../context/ContextProvider';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import Title from '../components/Title/Title';

const Plans = () => {
  const { activeMenu } = useStateContext();
  return (
    <div className="flex relative bg-main-bg">
      <div className={`${activeMenu ? 'w-[240px]' : 'w-[102px]'} fixed sidebar`}>
        <Sidebar />
      </div>
      <div className={`bg-main-bg min-h-screen w-full ml-[240px] bg-main-bg px-[24px]`}>
        <Header />
        <main className="pt-[22px] pb-[38px]">
          <Title title="Choose a Plan" />
        </main>
      </div>
    </div>
  );
};

export default Plans;
