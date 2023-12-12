import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Layout/Header/Header';
import Title from '../components/Title/Title';
import AvatarUpload from '../components/AvatarUpload/AvatarUpload';
import { NavLink } from 'react-router-dom';
import ModalMobileMenu from '../components/ModalMobileMenu/ModalMobileMenu';

const Profile = () => {
  return (
    <div className="flex relative bg-main-bg">
      <Sidebar />
      <ModalMobileMenu />
      <div
        className={`bg-main-bg min-h-screen w-full ml-[240px] bg-main-bg px-[24px] max-[1024px]:ml-[0] max-[1024px]:px-[0]`}
      >
        <Header />
        <main className="pt-[22px] pb-[38px] max-[1024px]:px-[32px] max-[768px]:px-[16px]">
          <Title title="Profile" />
          <div className="flex justify-between items-start bg-gray-bg rounded-2xl py-[32px] px-[24px] max-[769px]:flex-col-reverse">
            <div
              className="flex items-center gap-[71px] max-[1025px]:items-start max-[1025px]:gap-[32px]
             max-[769px]:flex-col max-[769px]:w-full max-[769px]:gap-[4px]"
            >
              <AvatarUpload />
              <div className="w-full max-w-[582px]">
                <div
                  className="profile-row border-b border-[#3C3C3C] max-[1025px]:grid-cols-1 max-[1025px]:py-[16px]
                 max-[1025px]:pr-[32px] max-[769px]:py-[26px]"
                >
                  <span className="text-[16px] text-[#757575]">Full name</span>
                  <span className="text-[16px] text-white font-bold">Esther Howard</span>
                </div>
                <div
                  className="profile-row border-b border-[#3C3C3C] max-[1025px]:grid-cols-1 max-[1025px]:py-[16px]
                 max-[1025px]:pr-[32px] max-[769px]:py-[26px]"
                >
                  <span className="text-[16px] text-[#757575]">Email</span>
                  <span className="text-[16px] text-white font-bold">EstherH@gmail.com</span>
                </div>
                <div className="profile-row max-[1025px]:grid-cols-1 max-[1025px]:py-[16px] max-[1025px]:pr-[32px] max-[769px]:py-[26px] max-[769px]:pr-0">
                  <span className="text-[16px] text-[#757575]">Tariff plan</span>
                  <div className="flex items-center max-[769px]:justify-between">
                    <span className="text-[16px] text-white font-bold whitespace-nowrap mr-4 max-[1025px]:mr-10">
                      Trial version
                    </span>
                    <NavLink to="/plans" className="text-[14px] text-[#B4B4B4] underline whitespace-nowrap">
                      View all tariff plans
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-[769px]:flex max-[769px]:w-full max-[769px]:mb-[22px]">
              <button
                className="rounded bg-btn-active py-[4px] px-[45px] text-white text-[16px] font-bold hover:bg-btn-hover
               transition-all duration-300 max-[769px]:ml-auto"
              >
                Edit
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
