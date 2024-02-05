import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Layout/Header/Header';
import Title from '../components/Title/Title';
import { useStateContext } from '../context/ContextProvider';
import ModalMobileMenu from '../components/ModalMobileMenu/ModalMobileMenu';
import TableUpdateInfo from '../components/TableUpdateInfo/TableUpdateInfo';
import ArrowBack from '../components/ui/icons/ArrowBack';
import { NavLink } from 'react-router-dom';
import Table from '../components/Table/Table';

const Update = () => {
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
        <main className="flex items-center pt-[22px] pb-[38px] max-[1024px]:px-[32px] max-[768px]:px-[16px]">
          <NavLink to="/update" className="mb-[32px]">
            <ArrowBack />
          </NavLink>
          <Title title="№8328329329" />
        </main>
        {/*<TableUpdateInfo />*/}
        <Table />
      </div>
    </div>
  );
};

export default Update;
