import React, { useState, useEffect } from 'react';
import { closeMenuIcon } from '../../assets/images';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet/src/layer';

const ModalCompanyInfo = ({ isOpen, onClose, title, longitude, latitude, zone }) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  console.log('2', latitude);
  console.log('2', longitude);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  const defaultMarker = new Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 ${
        modalOpen ? 'flex z-50' : 'flex -z-10'
      } items-center justify-center bg-black bg-opacity-50 px-[16px] py-[20px]`}
    >
      <div className="relative bg-[#181819] px-[34px] pt-[80px] pb-[40px] rounded-2xl w-full max-w-[980px] max-h-[800px] overflow-y-auto">
        <button className="close-button absolute top-[40px] right-[34px] text-2xl" onClick={closeModal}>
          <img src={closeMenuIcon} alt="" />
        </button>
        <h2 className="text-white text-[32px] font-semibold mb-[27px]">{title}</h2>
        <div className="relative z-10 w-full h-[400px] flex">
          <MapContainer center={[latitude, longitude]} zoom={8} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[latitude, longitude]} icon={defaultMarker}>
              <Popup>{zone}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default ModalCompanyInfo;
