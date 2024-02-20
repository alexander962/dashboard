import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './CompanyComponent.scss';
import IncreaseIcon from '../ui/icons/IncreaseIcon';
import ModalCompanyInfo from '../ModalCompanyInfo/ModalCompanyInfo';
import { Icon } from 'leaflet/src/layer';

const CompanyComponent = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageData, setSelectedImageData] = useState({ title: '', imageUrl: '' });
  const latitude = data?.latitude?.replace(/,/g, '.').replace(/[^\d.-]/g, '');
  const longitude = parseFloat(data?.longitude?.replace(/,/g, '.').replace(/[^\d.-]/g, ''));

  const openModal = (title, imageUrl) => {
    setSelectedImageData({ title, imageUrl });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const defaultMarker = new Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  console.log('1', latitude);
  console.log('1', longitude);

  return (
    <div className="flex gap-[20px] max-[1025px]:flex-col">
      <div className="flex gap-[20px] max-[769px]:flex-col">
        <div className="flex flex-col justify-between gap-[25px]">
          <div
            className={`relative z-10 w-[300px] h-[250px] flex flex-col items-start justify-between rounded-2xl max-[769px]:h-[200px] max-[769px]:w-full max-[769px]:max-w-[400px] max-[769px]:m-auto`}
          >
            <MapContainer
              center={[latitude, longitude]}
              zoom={8}
              style={{ height: '100%', width: '100%', zIndex: 2, position: 'relative' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[latitude, longitude]} icon={defaultMarker}>
                <Popup>{data?.name}</Popup>
              </Marker>
            </MapContainer>
            <button
              className="ml-auto cursor-pointer svg-inc__active absolute top-0 right-0 z-20"
              onClick={() =>
                openModal('Location', 'https://www.openstreetmap.org/?mlat=51.5074&mlon=-0.1278#map=15/51.5074/-0.1278')
              }
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
              <span className="text-white text-[16px]">{data?.primaryCommodity}</span>
            </div>
            <div
              className="grid grid-cols-2 border-b border-[#313131] mb-[11px] max-[769px]:grid-cols-1
             max-[769px]:pt-[11px] max-[769px]:pb-[8px] max-[769px]:mb-0"
            >
              <span className="text-[#A0A0A0] text-[16px]">Development Stage</span>
              <span className="text-white text-[16px]">{data?.developmentStage}</span>
            </div>
            <div
              className="grid grid-cols-2 border-b border-[#313131] mb-[11px] max-[769px]:grid-cols-1
             max-[769px]:pt-[11px] max-[769px]:pb-[8px] max-[769px]:mb-0"
            >
              <span className="text-[#A0A0A0] text-[16px]">Activity Status</span>
              <span className="text-white text-[16px]">{data?.activityStatus}</span>
            </div>
            <div
              className="grid grid-cols-2 border-b border-[#313131] mb-[11px] max-[769px]:grid-cols-1
              max-[769px]:pt-[11px] max-[769px]:pb-[8px] max-[769px]:mb-0"
            >
              <span className="text-[#A0A0A0] text-[16px]">Mine Type</span>
              <span className="text-white text-[16px]">{data?.mineType}</span>
            </div>
            <div
              className="grid grid-cols-2 border-b border-[#313131] mb-[11px] max-[769px]:grid-cols-1
              max-[769px]:pt-[11px] max-[769px]:pb-[8px] max-[769px]:mb-0"
            >
              <span className="text-[#A0A0A0] text-[16px]">List of Commodities</span>
              <span className="text-white text-[16px]">{data?.listOfCommodities?.join(', ')}</span>
            </div>
            <div
              className="grid grid-cols-2 border-b border-[#313131] mb-[11px] max-[769px]:grid-cols-1
             max-[769px]:pt-[11px] max-[769px]:pb-[8px] max-[769px]:mb-0"
            >
              <span className="text-[#A0A0A0] text-[16px]">Owner Name</span>
              <span className="text-white text-[16px]">{data?.listOfOwners}</span>
            </div>
            <div
              className="grid grid-cols-2 border-b border-[#313131] mb-[11px] max-[769px]:grid-cols-1
             max-[769px]:pt-[11px] max-[769px]:pb-[8px] max-[769px]:mb-0"
            >
              <span className="text-[#A0A0A0] text-[16px]">Country</span>
              <span className="text-white text-[16px]">{data?.country}</span>
            </div>
            <div
              className="grid grid-cols-2 border-b border-[#313131] mb-[11px] max-[769px]:grid-cols-1
             max-[769px]:pt-[11px] max-[769px]:pb-[8px] max-[769px]:mb-0"
            >
              <span className="text-[#A0A0A0] text-[16px]">Region</span>
              <span className="text-white text-[16px]">{data?.region}</span>
            </div>
            <div
              className="grid grid-cols-2 border-b border-[#313131] mb-[11px] max-[769px]:grid-cols-1
             max-[769px]:pt-[11px] max-[769px]:pb-[8px] max-[769px]:mb-0"
            >
              <span className="text-[#A0A0A0] text-[16px]">Location</span>
              <span className="text-white text-[16px]">
                {data?.latitude.replace(/[()]/g, '')}"N, {data?.longitude.replace(/[()]/g, '')}"E
              </span>
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
            <span className="text-white text-[16px]">X</span>
          </div>
          <div className="grid grid-cols-2 border-b border-[#313131] mb-[11px]">
            <span className="text-[#A0A0A0] text-[16px]">Resources</span>
            <span className="text-white text-[16px]">X</span>
          </div>
        </div>
        <div
          className="flex flex-col justify-center bg-gray-bg rounded-2xl px-[16px] py-[24px] h-1/2
         max-[1360px]:w-[220px] max-[1025px]:w-1/2 max-[769px]:w-full"
        >
          <h3 className="text-white text-[20px] font-medium mb-4">Downstream Destination</h3>
          <div className="grid grid-cols-2 border-b border-t border-[#313131] mb-[11px]">
            <span className="text-[#A0A0A0] text-[16px]">Country</span>
            <span className="text-white text-[16px]">X</span>
          </div>
          <div className="grid grid-cols-2 border-b border-[#313131] mb-[11px]">
            <span className="text-[#A0A0A0] text-[16px]">Company</span>
            <span className="text-white text-[16px]">X</span>
          </div>
        </div>
      </div>
      <ModalCompanyInfo
        isOpen={modalOpen}
        onClose={closeModal}
        title={selectedImageData.title}
        latitude={latitude}
        longitude={longitude}
        zone={data?.name}
        defaultMarker={defaultMarker}
      />
    </div>
  );
};

export default CompanyComponent;
