import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Layout/Header/Header';
import Title from '../components/Title/Title';
import FormGraphics from '../components/FormGraphics/FormGraphics';
import { useStateContext } from '../context/ContextProvider';
import Table from '../components/Table/Table';
import ModalMobileMenu from '../components/ModalMobileMenu/ModalMobileMenu';
import GraphBlock from '../components/GraphBlocks/GraphBlocks';

const Dashboard = () => {
  const { tableDisplay, selectedField, setSelectedField, activeMenu } = useStateContext();
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
          <Title title="Dashboard" />
          <FormGraphics selectedField={selectedField} setSelectedField={setSelectedField} />
          {tableDisplay ? <Table /> : <GraphBlock selectedField={selectedField} setSelectedField={setSelectedField} />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
