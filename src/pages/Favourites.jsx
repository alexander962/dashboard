import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import { useStateContext } from '../context/ContextProvider';
import Header from '../components/Header/Header';
import Title from '../components/Title/Title';

const Favourites = () => {
  const { activeMenu } = useStateContext();
  return (
    <div className="flex relative bg-main-bg">
      <div className={`${activeMenu ? 'w-[240px]' : 'w-[102px]'} fixed sidebar`}>
        <Sidebar />
      </div>
      <div className={`bg-main-bg min-h-screen w-full ml-[240px] bg-main-bg px-[24px]`}>
        <Header />
        <main className="pt-[22px] pb-[38px]">
          <Title title="Favorites" />
        </main>
      </div>
    </div>
  );
};

export default Favourites;
