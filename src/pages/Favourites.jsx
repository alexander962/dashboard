import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import { useStateContext } from '../context/ContextProvider';
import Header from '../components/Header/Header';
import Title from '../components/Title/Title';
import useWindowSize from '../hooks/useWindowSize';

const Favourites = () => {
  const { activeMenu } = useStateContext();
  const { width } = useWindowSize();
  return (
    <div className="flex relative bg-main-bg">
      <div
        className={`${activeMenu ? 'w-[240px]' : 'w-[102px]'} ${
          width < 1025 && !activeMenu
            ? '-translate-x-[320px] transition-all duration-500'
            : width < 1025 && activeMenu
              ? '-translate-x-[0] transition-all duration-500'
              : ''
        } max-[1024px]:w-[320px] fixed sidebar`}
      >
        <Sidebar />
      </div>
      <div
        className={`bg-main-bg min-h-screen w-full ml-[240px] bg-main-bg px-[24px] max-[1024px]:ml-[0] max-[1024px]:px-[0]`}
      >
        <Header />
        <main className="pt-[22px] pb-[38px] max-[1024px]:px-[32px] max-[768px]:px-[16px]">
          <Title title="Favourites" />
        </main>
      </div>
    </div>
  );
};

export default Favourites;
