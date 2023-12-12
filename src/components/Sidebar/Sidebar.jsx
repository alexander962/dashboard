import React from 'react';
import { arrowLeft, arrowRight, closeIcon, closeMenuIcon, outIcon, planIcon } from '../../assets/images';
import { useStateContext } from '../../context/ContextProvider';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';
import DashboardIcon from '../ui/icons/DashboardIcon';
import FavouritesIcon from '../ui/icons/FavouritesIcon';
import useWindowSize from '../../hooks/useWindowSize';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, activePlans, setActivePlans } = useStateContext();
  const { width } = useWindowSize();
  const activeLink = `flex item-center ${
    !activeMenu && 'justify-center'
  } gap-4 px-4 py-3 rounded-[4px] mx-4 mb-2 text-white bg-btn-active svg-active text-[16px] transition-all duration-300`;
  const normalLink = `flex item-center ${
    !activeMenu && 'justify-center'
  } gap-4 px-4 py-3 rounded-[4px] mx-4 mb-2 text-white text-[16px] font-semibold hover:bg-[#353535] transition-all duration-300`;

  const handleClockClose = () => {
    if (width <= 1025) {
      setActiveMenu(false);
    }
  };

  return (
    <div
      className={`${
        width < 1025 && activeMenu && 'fixed top-0 left-0 h-screen w-full bg-black bg-opacity-50 z-50 flex items-center'
      }`}
    >
      <div
        className={`${activeMenu ? 'w-[240px]' : 'w-[102px] transition-all duration-200'} ${
          width < 1025 && !activeMenu
            ? '-translate-x-[320px] transition-all duration-500'
            : width < 1025 && activeMenu
              ? '-translate-x-[0] transition-all duration-500'
              : ''
        } max-[1024px]:w-[320px] fixed sidebar h-screen`}
      >
        <div className="flex flex-col justify-between relative h-screen border border-solid border-[#37373B] bg-main-bg border-b-0">
          <button className="absolute top-6 left-4 min-[1025px]:hidden" onClick={() => setActiveMenu(false)}>
            <img src={closeMenuIcon} alt="" />
          </button>
          <div>
            <div className="flex items-center justify-between pt-[29px] max-[1024px]:hidden">
              <h2 className={`text-white text-[20px] font-semibold ${activeMenu ? 'pl-[26px]' : 'pl-[16px]'}`}>
                {activeMenu ? 'Mdata' : 'Md'}
              </h2>
              <button onClick={() => setActiveMenu(!activeMenu)}>
                <img src={activeMenu ? arrowLeft : arrowRight} alt="" />
              </button>
            </div>
            <div className="mt-[102px] max-[1024px]:mt-[98px]">
              <NavLink
                to={'/'}
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
                onClick={handleClockClose}
              >
                <DashboardIcon />
                {activeMenu && <span>Dashboard</span>}
              </NavLink>
              <NavLink
                to={'/favourites'}
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
                onClick={handleClockClose}
              >
                <FavouritesIcon />
                {activeMenu && <span>Favourites</span>}
              </NavLink>
            </div>
          </div>
          <div className="w-full max-[1024px]:w-[217px]">
            {activePlans && activeMenu && (
              <div className="relative pt-[29px] pb-4 px-4 border border-solid border-[#454545] rounded-2xl mx-4 mb-[41px]">
                <button onClick={() => setActivePlans(false)} className="absolute top-[20px] right-4">
                  <img src={closeIcon} alt="" />
                </button>
                <img src={planIcon} alt="" className="mb-[15px]" />
                <div className="text-[16px] font-semibold text-white mb-[7px]">Your plan</div>
                <div className="text-[12px] underline light text-white mb-[15px]">Free trial</div>
                <NavLink to={'/plans'} onClick={handleClockClose}>
                  <button className="w-full rounded-[30px] bg-[#353535] w-full text-[14px] font-medium text-white py-[3px] border border-solid border-[#353535] hover:bg-transparent">
                    View all
                  </button>
                </NavLink>
              </div>
            )}
            <div className="px-4">
              <NavLink to={'/authorization'}>
                <button className="flex-center-center w-full block gap-[19px] py-2 mb-[24px] rounded hover:bg-[#353535] max-[1024px]:justify-start max-[1024px]:pl-4">
                  <img src={outIcon} alt="" />
                  {activeMenu && <span className="text-[16px] leading-[23px] text-white">Log out</span>}
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
