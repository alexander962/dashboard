import React from 'react';
import { closeMenuIcon } from '../../assets/images';

const ModalCompanyInfo = ({ isOpen, onClose, title, imageUrl }) => {
  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? 'flex' : 'hidden'
      } items-center justify-center bg-black bg-opacity-50 px-[16px] py-[20px]`}
    >
      <div className="relative bg-[#181819] px-[34px] pt-[80px] pb-[40px] rounded-2xl w-full max-w-[980px] max-h-[800px] overflow-y-auto">
        <button className="close-button absolute top-[40px] right-[34px] text-2xl" onClick={onClose}>
          <img src={closeMenuIcon} alt="" />
        </button>
        <h2 className="text-white text-[32px] font-semibold mb-[27px]">{title}</h2>
        <div className="w-full h-full">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ModalCompanyInfo;
