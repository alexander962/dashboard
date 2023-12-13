import React from 'react';

const TabsProfile = ({ activeTab, onTabChange }) => (
  <div className="mb-[24px] w-full">
    <button
      className={`${
        activeTab === 'Profile'
          ? 'border-b border-white bg-tab-active-bg py-[15px]'
          : 'border-b border-tab-border py-[15px]'
      } 
      w-1/2 text-[#F2F2F2] text-[14px] font-medium tracking-[1.25px] uppercase`}
      onClick={() => onTabChange('Profile')}
    >
      Profile
    </button>
    <button
      className={`${
        activeTab === 'Security'
          ? 'border-b border-white bg-tab-active-bg py-[15px]'
          : 'border-b border-tab-border py-[15px]'
      } 
      w-1/2 text-[#F2F2F2] text-[14px] font-medium tracking-[1.25px] uppercase `}
      onClick={() => onTabChange('Security')}
    >
      Security
    </button>
  </div>
);

export default TabsProfile;
