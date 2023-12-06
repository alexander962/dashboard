import React from 'react';
import { arrowLeft, arrowRight, closeIcon, outIcon, planIcon } from '../../assets/images';
import { useStateContext } from '../../context/ContextProvider';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';
import DashboardIcon from '../icons/DashboardIcon';
import FavouritesIcon from '../icons/FavouritesIcon';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, activePlans, setActivePlans } = useStateContext();
  const activeLink = `flex item-center ${
    !activeMenu && 'justify-center'
  } gap-4 px-4 py-3 rounded-[4px] mx-4 mb-2 text-white bg-btn-active svg-active text-[16px]`;
  const normalLink = `flex item-center ${
    !activeMenu && 'justify-center'
  } gap-4 px-4 py-3 rounded-[4px] mx-4 mb-2 text-white text-[16px] font-semibold hover:bg-[#353535]`;

  return (
    <div className="flex flex-col justify-between h-screen border border-solid border-[#37373B] bg-main-bg border-b-0">
      <div>
        <div className="flex-center-between pt-[29px]">
          <h2 className={`text-white text-[20px] font-semibold ${activeMenu ? 'pl-[26px]' : 'pl-[16px]'}`}>
            {activeMenu ? 'Mdata' : 'Md'}
          </h2>
          <button onClick={() => setActiveMenu(!activeMenu)}>
            <img src={activeMenu ? arrowLeft : arrowRight} alt="" />
          </button>
        </div>
        <div className="mt-[102px]">
          <NavLink to={'/'} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
            <DashboardIcon />
            {activeMenu && <span>Dashboard</span>}
          </NavLink>
          <NavLink to={'/favourites'} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
            <FavouritesIcon />
            {activeMenu && <span>Favourites</span>}
          </NavLink>
        </div>
      </div>
      <div className="w-full">
        {activePlans && activeMenu && (
          <div className="relative pt-[29px] pb-4 px-4 border border-solid border-[#454545] rounded-2xl mx-4 mb-[41px]">
            <button onClick={() => setActivePlans(false)} className="absolute top-[20px] right-4">
              <img src={closeIcon} alt="" />
            </button>
            <img src={planIcon} alt="" className="mb-[15px]" />
            <div className="text-[16px] font-semibold text-white mb-[7px]">Your plan</div>
            <div className="text-[12px] underline light text-white mb-[15px]">Free trial</div>
            <NavLink to={'/plans'}>
              <button className="w-full rounded-[30px] bg-[#353535] w-full text-[14px] font-medium text-white py-[3px] border border-solid border-[#353535] hover:bg-transparent">
                View all
              </button>
            </NavLink>
          </div>
        )}
        <NavLink to={'/authorization'} className="px-4">
          <button className="flex-center-center w-full gap-[19px] py-2 mb-[24px] rounded hover:bg-[#353535]">
            <img src={outIcon} alt="" />
            {activeMenu && <span className="text-[16px] leading-[23px] text-white">Log out</span>}
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
