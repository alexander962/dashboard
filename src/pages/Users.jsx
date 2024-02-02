import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Layout/Header/Header';
import Title from '../components/Title/Title';
import { useStateContext } from '../context/ContextProvider';
import ModalMobileMenu from '../components/ModalMobileMenu/ModalMobileMenu';
import TableUsers from '../components/TableUsers/TableUsers';
import SearchIcon from '../components/ui/icons/SearchIcon';
const Users = () => {
  const { activeMenu } = useStateContext();
  const [search, setSearch] = useState('');

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
          <Title title="Users" />
          <div className="relative flex items-center w-full">
            <input
              type="text"
              className="w-full pl-[53px] pr-4 py-[16px] bg-gray-bg rounded text-[16px] leading-[22px] text-white border border-transparent
                 placeholder:text-[16px] placeholder:leading-[22px] placeholder:text-[#A5A5A5] focus:outline-none focus:border
                 focus:border-[#454545]"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2" disabled={!search}>
              <SearchIcon active={search} />
            </button>
          </div>
          <TableUsers />
        </main>
      </div>
    </div>
  );
};

export default Users;
