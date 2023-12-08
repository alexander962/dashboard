import React from 'react';
import { avatar, burgerMenu } from '../../../assets/images';
import { NavLink } from 'react-router-dom';
import { useStateContext } from '../../../context/ContextProvider';

const Header = () => {
  const { setActiveMenu } = useStateContext();
  return (
    <div className="flex items-center justify-end py-[17px] border-b border-solid border-[#3F3F3F] max-[1024px]:px-8 max-[1024px]:justify-between max-[768px]:px-4">
      <div className="hidden items-center gap-8 max-[1024px]:flex">
        <button onClick={() => setActiveMenu(true)}>
          <img src={burgerMenu} alt="" />
        </button>
        <h3 className="text-white text-[20px] font-semibold">Mdata</h3>
      </div>
      <NavLink to={'/profile'} className="flex items-center py-1 px-2 cursor-pointer hover:bg-[#202020] rounded-[4px]">
        <div className="w-[48px] h-[48px] rounded-[48px] mr-2">
          <img src={avatar} alt="" className="w-full object-cover" />
        </div>
        <div className="flex flex-col max-[768px]:hidden">
          <span className="text-white text-[18px] font-medium leading-[18px] mb-[4px]">Esther Howard</span>
          <span className="text-[#6A6A6A] text-[14px] font-light leading-[120%]">EstherH@gmail.com</span>
        </div>
      </NavLink>
    </div>
  );
};

export default Header;
