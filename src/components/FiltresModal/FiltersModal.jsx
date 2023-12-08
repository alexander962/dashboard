import React from 'react';
import { closeMenuIcon } from '../../assets/images';

const Field = ({ filter, onFilterChange, type, placeholder }) => {
  console.log(filter);
  return (
    <input
      type={type}
      className="w-full rounded border border-solid border-[#727272] py-[15px] px-[10px] bg-transparent
              outline-none text-white text-base font-light tracking-[0.5px] placeholder:text-[#727272] placeholder:text-base placeholder:font-light
              placeholder:tracking-[0.5px] focus:border-primary-active mb-[12px]"
      placeholder={placeholder}
      value={filter}
      onChange={e => onFilterChange(e.target.value)}
    />
  );
};
const FiltersModal = ({
  onClose,
  onAddFilter,
  filterName,
  setFilterName,
  filterCom,
  setFilterCom,
  filterDev,
  setFilterDev,
  filterType,
  setFilterType,
  filterCommodities,
  setFilterCommodities,
  filterCountry,
  setFilterCountry,
  filterRegion,
  setFilterRegion,
}) => {
  const handleSaveFilters = () => {
    const filters = [
      filterName,
      filterCom,
      filterDev,
      filterType,
      filterCommodities,
      filterCountry,
      filterRegion,
    ].filter(filter => filter.trim() !== '');
    onAddFilter(filters);
    setFilterName('');
    setFilterCom('');
    setFilterDev('');
    setFilterType('');
    setFilterCommodities('');
    setFilterCountry('');
    setFilterRegion('');
    onClose();
  };

  return (
    <div
      className="w-[720px] bg-main-bg h-full flex-center-center fixed top-0 right-0 px-[174px] max-[1024px]:w-[375px]
     max-[1024px]:px-[16px] max-[1024px]:pb-[32px]"
    >
      <div>
        <h2 className="text-white text-[28px] font-medium leading-[22px] mb-[26px]">Filters</h2>

        <Field type="text" filter={filterName} onFilterChange={setFilterName} placeholder="Mine Name" />
        <Field type="text" filter={filterCom} onFilterChange={setFilterCom} placeholder="Primary Commodity" />
        <Field type="text" filter={filterDev} onFilterChange={setFilterDev} placeholder="Development Stage" />
        <Field type="text" filter={filterType} onFilterChange={setFilterType} placeholder="Mine Type" />
        <Field
          type="text"
          filter={filterCommodities}
          onFilterChange={setFilterCommodities}
          placeholder="List of Commodities"
        />
        <Field type="text" filter={filterCountry} onFilterChange={setFilterCountry} placeholder="Country" />
        <Field type="text" filter={filterRegion} onFilterChange={setFilterRegion} placeholder="Region" />

        <button className="w-full px-4 py-2 bg-btn-active text-white rounded mr-2" onClick={handleSaveFilters}>
          Create
        </button>

        <button
          className="absolute top-[46px] left-[52px] max-[1024px]:top-[24px] max-[1024px]:left-auto max-[1024px]:right-[12px]"
          onClick={onClose}
        >
          <img src={closeMenuIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default FiltersModal;
