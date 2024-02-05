import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Layout/Header/Header';
import Title from '../components/Title/Title';
import { useStateContext } from '../context/ContextProvider';
import ModalMobileMenu from '../components/ModalMobileMenu/ModalMobileMenu';
import TableUpdate from '../components/TableUpdate/TableUpdate';

const Update = () => {
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
        <main className="flex-center-between pt-[22px] pb-[38px] max-[1024px]:px-[32px] max-[768px]:px-[16px]">
          <Title title="Updates" />
          <button className="text-white font-medium text-[16px] py-[9px] px-[30px] bg-btn-active rounded transition-all duration-300 hover:bg-btn-hover">
            Update data
          </button>
        </main>
        <TableUpdate />
      </div>
    </div>
  );
};

export default Update;
