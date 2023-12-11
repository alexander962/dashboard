import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Layout/Header/Header';
import Title from '../components/Title/Title';
import FormGraphics from '../components/FormGraphics/FormGraphics';
import Table from '../components/Table/Table';
import { useStateContext } from '../context/ContextProvider';
import ModalMobileMenu from '../components/ModalMobileMenu/ModalMobileMenu';

const Favourites = () => {
  const { tableDisplay } = useStateContext();
  return (
    <div className="flex relative bg-main-bg">
      <Sidebar />
      <ModalMobileMenu />
      <div
        className={`bg-main-bg min-h-screen w-full ml-[240px] bg-main-bg px-[24px] max-[1024px]:ml-[0] max-[1024px]:px-[0]`}
      >
        <Header />
        <main className="pt-[22px] pb-[38px] max-[1024px]:px-[32px] max-[768px]:px-[16px]">
          <Title title="Favourites" />
          <FormGraphics />
          {tableDisplay ? <Table /> : <div>Graphic</div>}
        </main>
      </div>
    </div>
  );
};

export default Favourites;
