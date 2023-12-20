import React, { useState } from 'react';
import { detailImg1, detailImg2 } from '../../assets/images';
import './CompanyComponent.scss';
import IncreaseIcon from '../ui/icons/IncreaseIcon';
import ModalCompanyInfo from '../ModalCompanyInfo/ModalCompanyInfo';

const CompanyComponent = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageData, setSelectedImageData] = useState({ title: '', imageUrl: '' });

  const openModal = (title, imageUrl) => {
    setSelectedImageData({ title, imageUrl });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex gap-[20px] max-[1025px]:flex-col">
      <div className="flex gap-[20px] max-[769px]:flex-col">
        <div className="flex flex-col justify-between gap-[25px]">
          <div
            className={`relative w-[244px] h-1/2 flex flex-col items-start justify-between rounded-2xl pt-[12px]
             pr-[12px] pb-[9px] pl-[9px] max-[769px]:h-[200px] max-[769px]:w-full max-[769px]:max-w-[400px] max-[769px]:m-auto`}
            style={{ background: `url(${detailImg2}) no-repeat center/cover` }}
          >
            <button
              className="ml-auto cursor-pointer svg-inc__active"
              onClick={() => openModal('Supply and Trade', detailImg2)}
            >
              <IncreaseIcon />
            </button>
            <span className="text-[14px] font-semibold text-white">Supply and Trade</span>
          </div>
          <div
            className={`relative w-[244px] h-1/2 flex flex-col items-start justify-between rounded-2xl pt-[12px]
             pr-[12px] pb-[9px] pl-[9px] max-[769px]:h-[200px] max-[769px]:w-full max-[769px]:max-w-[400px] max-[769px]:m-auto`}
            style={{ background: `url(${detailImg1}) no-repeat center/cover` }}
          >
            <button
              className="ml-auto cursor-pointer svg-inc__active"
              onClick={() => openModal('Location', detailImg1)}
            >
              <IncreaseIcon />
            </button>
            <span className="text-[14px] font-semibold text-white">Location</span>
          </div>
        </div>
        <div className="bg-gray-bg rounded-2xl px-[16px] py-[24px] w-full">
          <h3 className="text-white text-[20px] font-medium mb-4">Mine Information</h3>
          <div>
            <div
              className="grid grid-cols-2 border-b border-t border-[#313131] mb-[11px] max-[769px]:grid-cols-1
             max-[769px]:pt-[11px] max-[769px]:pb-[8px] max-[769px]:mb-0"
            >
              <span className="text-[#A0A0A0] text-[16px]">Primary Commodity</span>
              <span className="text-white text-[16px]">Nickel</span>
            </div>
            <div
              className="grid grid-cols-2 border-b border-[#313131] mb-[11px] max-[769px]:grid-cols-1
             max-[769px]:pt-[11px] max-[769px]:pb-[8px] max-[769px]:mb-0"
            >
              <span className="text-[#A0A0A0] text-[16px]">Development Stage</span>
              <span className="text-white text-[16px]">Operating</span>
            </div>
            <div
              className="grid grid-cols-2 border-b border-[#313131] mb-[11px] max-[769px]:grid-cols-1
             max-[769px]:pt-[11px] max-[769px]:pb-[8px] max-[769px]:mb-0"
            >
              <span className="text-[#A0A0A0] text-[16px]">Activity Status</span>
              <span className="text-white text-[16px]">Active</span>
            </div>
            <div
              className="grid grid-cols-2 border-b border-[#313131] mb-[11px] max-[769px]:grid-cols-1
             max-[769px]:pt-[11px] max-[769px]:pb-[8px] max-[769px]:mb-0"
            >
              <span className="text-[#A0A0A0] text-[16px]">Mine Type</span>
              <span className="text-white text-[16px]">Open Pit</span>
            </div>
            <div
              className="grid grid-cols-2 border-b border-[#313131] mb-[11px] max-[769px]:grid-cols-1
             max-[769px]:pt-[11px] max-[769px]:pb-[8px] max-[769px]:mb-0"
            >
              <span className="text-[#A0A0A0] text-[16px]">List of Commodities</span>
              <span className="text-white text-[16px]">Nickel</span>
            </div>
            <div
              className="grid grid-cols-2 border-b border-[#313131] mb-[11px] max-[769px]:grid-cols-1
             max-[769px]:pt-[11px] max-[769px]:pb-[8px] max-[769px]:mb-0"
            >
              <span className="text-[#A0A0A0] text-[16px]">Owner Name</span>
              <span className="text-white text-[16px]">C.T.P. Construction and Mining Corporation</span>
            </div>
            <div
              className="grid grid-cols-2 border-b border-[#313131] mb-[11px] max-[769px]:grid-cols-1
             max-[769px]:pt-[11px] max-[769px]:pb-[8px] max-[769px]:mb-0"
            >
              <span className="text-[#A0A0A0] text-[16px]">Country</span>
              <span className="text-white text-[16px]">Philippines</span>
            </div>
            <div
              className="grid grid-cols-2 border-b border-[#313131] mb-[11px] max-[769px]:grid-cols-1
             max-[769px]:pt-[11px] max-[769px]:pb-[8px] max-[769px]:mb-0"
            >
              <span className="text-[#A0A0A0] text-[16px]">Region</span>
              <span className="text-white text-[16px]">Surigao del Sur</span>
            </div>
            <div
              className="grid grid-cols-2 border-b border-[#313131] mb-[11px] max-[769px]:grid-cols-1
             max-[769px]:pt-[11px] max-[769px]:pb-[8px] max-[769px]:mb-0"
            >
              <span className="text-[#A0A0A0] text-[16px]">Location</span>
              <span className="text-white text-[16px]">9°29'56"N, 125°51'48"E</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[24px] max-[1025px]:flex-row max-[769px]:flex-col">
        <div
          className="flex flex-col justify-center w-[342px] bg-gray-bg rounded-2xl px-[16px] py-[24px] h-1/2
         max-[1360px]:w-[220px] max-[1025px]:w-1/2 max-[769px]:w-full"
        >
          <h3 className="text-white text-[20px] font-medium mb-4">Reserves and Resources</h3>
          <div className="grid grid-cols-2 border-b border-t border-[#313131] mb-[11px]">
            <span className="text-[#A0A0A0] text-[16px]">Reserves</span>
            <span className="text-white text-[16px]">X tonnes</span>
          </div>
          <div className="grid grid-cols-2 border-b border-[#313131] mb-[11px]">
            <span className="text-[#A0A0A0] text-[16px]">Resources</span>
            <span className="text-white text-[16px]">X tonnes</span>
          </div>
        </div>
        <div
          className="flex flex-col justify-center bg-gray-bg rounded-2xl px-[16px] py-[24px] h-1/2
         max-[1360px]:w-[220px] max-[1025px]:w-1/2 max-[769px]:w-full"
        >
          <h3 className="text-white text-[20px] font-medium mb-4">Downstream Destination</h3>
          <div className="grid grid-cols-2 border-b border-t border-[#313131] mb-[11px]">
            <span className="text-[#A0A0A0] text-[16px]">Country</span>
            <span className="text-white text-[16px]">China</span>
          </div>
          <div className="grid grid-cols-2 border-b border-[#313131] mb-[11px]">
            <span className="text-[#A0A0A0] text-[16px]">Company</span>
            <span className="text-white text-[16px]">Company Name</span>
          </div>
        </div>
      </div>
      <ModalCompanyInfo
        isOpen={modalOpen}
        onClose={closeModal}
        title={selectedImageData.title}
        imageUrl={selectedImageData.imageUrl}
      />
    </div>
  );
};

export default CompanyComponent;
