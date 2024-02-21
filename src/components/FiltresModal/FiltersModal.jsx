import React from 'react';
import { arrowDownBig, closeMenuIcon } from '../../assets/images';

const Field = ({ filter, onFilterChange, type, placeholder }) => {
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
  // filterTime,
  // setFilterTime,
  // showDropdownTime,
  // setShowDropdownTime,
  filterStatus,
  setFilterStatus,
  showDropdownStatus,
  setShowDropdownStatus,
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
      // filterTime,
      filterStatus,
    ];
    onAddFilter(filters);
    setFilterName('');
    setFilterCom('');
    setFilterDev('');
    setFilterType('');
    setFilterCommodities('');
    setFilterCountry('');
    setFilterRegion('');
    // setFilterTime('All time');
    setFilterStatus('None');
    onClose();
  };

  // const dropdownOptionsTime = ['All time', 'Day', 'Week'];
  const dropdownOptionsStatus = ['None', 'Active Status', 'Not active status'];

  // const handleFieldSelectTime = field => {
  //   setFilterTime(field);
  //   setShowDropdownTime(false);
  // };

  const handleFieldSelectStatus = field => {
    setFilterStatus(field);
    setShowDropdownStatus(false);
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

        {/*<div className="relative mb-[12px] z-10">*/}
        {/*<button*/}
        {/*  className="flex items-center justify-between w-full px-[17px] py-[9px] border border-[#727272]*/}
        {/*   bg-transparent rounded relative focus:border-primary-active"*/}
        {/*  onClick={() => setShowDropdownTime(!showDropdownTime)}*/}
        {/*>*/}
        {/*  <span className="text-[#939393] text-[16px] leading-[23px]">{filterTime}</span>*/}
        {/*  <img src={arrowDownBig} alt="" />*/}
        {/*</button>*/}

        {/*{showDropdownTime && (*/}
        {/*  <div className="absolute w-full bg-[#242424] rounded px-2 py-1">*/}
        {/*    {dropdownOptionsTime.map(option => (*/}
        {/*      <div*/}
        {/*        key={option}*/}
        {/*        onClick={() => handleFieldSelectTime(option)}*/}
        {/*        className={`pb-1 pt-2 pl-1 cursor-pointer border-b border-solid border-[#3C3C3C] text-[16px] */}
        {/*        leading-[22px] hover:${*/}
        {/*          option === filterTime ? 'bg-transparent' : 'bg-[#3C3C3C]'*/}
        {/*        } mb-[4px] last:border-none last:mb-0 text-${option === filterTime ? '[#6A6A6A]' : 'white'}`}*/}
        {/*      >*/}
        {/*        {option}*/}
        {/*      </div>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*)}*/}
        {/*</div>*/}

        <div className="relative mb-[12px]">
          <button
            className="flex items-center justify-between w-full px-[17px] py-[9px] border border-[#727272]
             bg-transparent rounded relative focus:border-primary-active"
            onClick={() => setShowDropdownStatus(!showDropdownStatus)}
          >
            <span className="text-[#939393] text-[16px] leading-[23px]">{filterStatus}</span>
            <img src={arrowDownBig} alt="" />
          </button>

          {showDropdownStatus && (
            <div className="absolute w-full bg-[#242424] z-20 rounded px-2 py-1">
              {dropdownOptionsStatus.map(option => (
                <div
                  key={option}
                  onClick={() => handleFieldSelectStatus(option)}
                  className={`pb-1 pt-2 pl-1 cursor-pointer border-b border-solid border-[#3C3C3C] text-[16px] 
                  leading-[22px] hover:${
                    option === filterStatus ? 'bg-transparent' : 'bg-[#3C3C3C]'
                  } mb-[4px] last:border-none last:mb-0 text-${option === filterStatus ? '[#6A6A6A]' : 'white'}`}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

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
