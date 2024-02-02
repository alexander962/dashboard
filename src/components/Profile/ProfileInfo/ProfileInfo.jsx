import React from 'react';
import { NavLink } from 'react-router-dom';

const ProfileInfo = ({ name, email, user = false }) => {
  return (
    <div className={`w-full ${user ? '' : 'max-w-[582px]'}`}>
      <div
        className="profile-row border-b border-[#3C3C3C] max-[1025px]:grid-cols-1 max-[1025px]:py-[16px]
                 max-[1025px]:pr-[32px] max-[769px]:py-[26px]"
      >
        <span className="text-[16px] text-[#757575]">Full name</span>
        <span className="text-[16px] text-white font-bold">{name}</span>
      </div>
      <div
        className="profile-row border-b border-[#3C3C3C] max-[1025px]:grid-cols-1 max-[1025px]:py-[16px]
                 max-[1025px]:pr-[32px] max-[769px]:py-[26px]"
      >
        <span className="text-[16px] text-[#757575]">Email</span>
        <span className="text-[16px] text-white font-bold">{email}</span>
      </div>
      <div className="profile-row max-[1025px]:grid-cols-1 max-[1025px]:py-[16px] max-[1025px]:pr-[32px] max-[769px]:py-[26px] max-[769px]:pr-0">
        <span className="text-[16px] text-[#757575]">Tariff plan</span>
        <div className="flex items-center max-[769px]:justify-between">
          <span className="text-[16px] text-white font-bold whitespace-nowrap mr-4 max-[1025px]:mr-10">
            Trial version
          </span>
          {!user && (
            <NavLink to="/plans" className="text-[14px] text-[#B4B4B4] underline whitespace-nowrap">
              View all tariff plans
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
