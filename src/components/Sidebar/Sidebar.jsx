import React from 'react';
import { arrowLeft, arrowRight, closeIcon, outIcon, planIcon, updateIcon } from '../../assets/images';
import { useStateContext } from '../../context/ContextProvider';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';
import DashboardIcon from '../ui/icons/DashboardIcon';
import FavouritesIcon from '../ui/icons/FavouritesIcon';
import { useAuth } from '../../context/AuthContext';
import UsersIcon from '../ui/icons/UsersIcon';
import CompaniesIcon from '../ui/icons/CompaniesIcon';

const Sidebar = ({ admin = false }) => {
  const { activeMenu, setActiveMenu, activePlans, setActivePlans } = useStateContext();
  const { logout, userData } = useAuth();
  const activeLink = `flex item-center ${
    !activeMenu && 'justify-center'
  } gap-4 px-4 py-3 rounded-[4px] mx-4 mb-2 text-white bg-btn-active svg-active text-[16px] transition-all duration-300`;
  const normalLink = `flex item-center ${
    !activeMenu && 'justify-center'
  } gap-4 px-4 py-3 rounded-[4px] mx-4 mb-2 text-white text-[16px] font-semibold hover:bg-[#353535] transition-all duration-300`;

  return (
    <div className="block max-[1024px]:hidden">
      <div
        className={`${
          activeMenu ? 'w-[240px]' : 'w-[102px] transition-all duration-200'
        } max-[1024px]:w-[320px] fixed sidebar h-screen max-[1024px]:hidden`}
      >
        <div className="flex flex-col justify-between relative h-screen border border-solid border-[#37373B] bg-main-bg border-b-0">
          <div>
            <div className="flex items-center justify-between pt-[29px]">
              <h2 className={`text-white text-[20px] font-semibold ${activeMenu ? 'pl-[26px]' : 'pl-[16px]'}`}>
                {activeMenu ? 'Mdata' : 'Md'}
              </h2>
              <button onClick={() => setActiveMenu(!activeMenu)}>
                <img src={activeMenu ? arrowLeft : arrowRight} alt="" />
              </button>
            </div>
            <div className="mt-[102px]">
              {userData?.role !== 'admin' ? (
                <>
                  <NavLink to={'/'} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <DashboardIcon />
                    {activeMenu && <span>Dashboard</span>}
                  </NavLink>
                  <NavLink to={'/favourites'} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <FavouritesIcon />
                    {activeMenu && <span>Favourites</span>}
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to={'/dashboard-admin'} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <DashboardIcon />
                    {activeMenu && <span>Dashboard</span>}
                  </NavLink>
                  <NavLink to={'/users'} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <UsersIcon />
                    {activeMenu && <span>Users</span>}
                  </NavLink>
                  <NavLink to={'/update'} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <img src={updateIcon} alt="update" />
                    {activeMenu && <span>Updates</span>}
                  </NavLink>
                  <NavLink to={'/all-companies'} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <CompaniesIcon />
                    {activeMenu && <span>All Companies</span>}
                  </NavLink>
                </>
              )}
            </div>
          </div>
          <div className="w-full">
            {activePlans && activeMenu && !admin && (
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
            <div className="px-4">
              <NavLink to={'/authorization'}>
                <button className="flex-center-center w-full block gap-[19px] py-2 mb-[24px] rounded hover:bg-[#353535]">
                  <img src={outIcon} alt="" />
                  {activeMenu && (
                    <span className="text-[16px] leading-[23px] text-white" onClick={logout}>
                      Log out
                    </span>
                  )}
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
