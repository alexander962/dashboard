import React, { useState } from 'react';
import { arrowDown, closeIcon, editIcon, filtersIcon, viewGraphIcon, viewIcon } from '../../assets/images';
import SearchIcon from '../ui/icons/SearchIcon';
import { useStateContext } from '../../context/ContextProvider';
import FiltersModal from '../FiltresModal/FiltersModal';

const FormGraphics = ({ selectedField, setSelectedField, isFavourite }) => {
  const { tableDisplay, setTableDisplay, deleteGraph, setDeleteGraph } = useStateContext();
  const [search, setSearch] = useState('');
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const [filters, setFilters] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterCom, setFilterCom] = useState('');
  const [filterDev, setFilterDev] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterCommodities, setFilterCommodities] = useState('');
  const [filterCountry, setFilterCountry] = useState('');
  const [filterRegion, setFilterRegion] = useState('');
  const [filterTime, setFilterTime] = useState('All time');
  const [showDropdownTime, setShowDropdownTime] = useState(false);
  const [filterStatus, setFilterStatus] = useState('Active Status');
  const [showDropdownStatus, setShowDropdownStatus] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);

  const handleFieldSelect = field => {
    setSelectedField(field);
    setShowDropdown(false);
  };

  const dropdownOptions = ['Production', 'Processed', 'Costs'];

  const addFilter = newFilter => {
    setFilters(newFilter);
  };

  const removeFilter = index => {
    const newFilters = [...filters];
    newFilters.splice(index, 1);
    setFilters(newFilters);
  };

  return (
    <div>
      <div className="flex items-center gap-[12px] relative max-[768px]:flex-col">
        <div className="relative flex items-center w-full">
          <input
            type="text"
            className="w-full pl-[53px] pr-4 py-[16px] bg-gray-bg rounded text-[16px] leading-[22px] text-white border border-transparent
                 placeholder:text-[16px] placeholder:leading-[22px] placeholder:text-[#A5A5A5] focus:outline-none focus:border
                 focus:border-[#454545]"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2" disabled={!search}>
            <SearchIcon active={search} />
          </button>
        </div>

        <div className="flex center gap-[12px] max-[768px]:w-full">
          <button
            className="flex items-center px-8 py-4 bg-gray-bg rounded text-white text-[16px] leading-[22px] border border-transparent
        hover:border-[#454545] max-[768px]:w-full max-[768px]:flex-center-center"
            onClick={() => setShowFiltersModal(true)}
          >
            <span className="mr-2 h-[24px] w-[24px]">
              <img src={filtersIcon} alt="Filters Icon" className="h-[24px] w-[24px]" />
            </span>
            <span className="mr-[6px]">Filters</span>
            <div className="flex-center-center rounded-full bg-btn-active py-[3px] w-[23px] h-[23px] text-white text-[14px]">
              {filters.length}
            </div>
          </button>

          <button
            className="flex items-center px-8 py-4 bg-gray-bg rounded text-white text-[16px] leading-[22px] border border-transparent
        hover:border-[#454545]"
            onClick={() => setTableDisplay(!tableDisplay)}
          >
            <span className="mr-[12px] h-[24px] w-[24px]">
              {tableDisplay ? (
                <img src={viewGraphIcon} alt="View Icon" className="h-[24px] w-[24px]" />
              ) : (
                <img src={viewIcon} alt="View Icon" className="h-[24px] w-[24px]" />
              )}
            </span>
            View
          </button>

          {isFavourite && (
            <button
              className="flex items-center px-8 py-4 bg-btn-active rounded text-white text-[16px] leading-[22px] border border-transparent
             transition-all duration-300 hover:bg-btn-hover"
              onClick={() => setDeleteGraph(!deleteGraph)}
            >
              <span className="mr-[12px] h-[24px] w-[24px]">
                <img src={editIcon} alt="" className="h-[20px] w-[20px]" />
              </span>
              Edit
            </button>
          )}
        </div>
      </div>

      {showFiltersModal && (
        <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-50 flex items-center justify-end">
          <FiltersModal
            onClose={() => setShowFiltersModal(false)}
            onAddFilter={addFilter}
            filterName={filterName}
            setFilterName={setFilterName}
            filterCom={filterCom}
            setFilterCom={setFilterCom}
            filterDev={filterDev}
            setFilterDev={setFilterDev}
            filterType={filterType}
            setFilterType={setFilterType}
            filterCommodities={filterCommodities}
            setFilterCommodities={setFilterCommodities}
            filterCountry={filterCountry}
            setFilterCountry={setFilterCountry}
            filterRegion={filterRegion}
            setFilterRegion={setFilterRegion}
            filterTime={filterTime}
            setFilterTime={setFilterTime}
            showDropdownTime={showDropdownTime}
            setShowDropdownTime={setShowDropdownTime}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            showDropdownStatus={showDropdownStatus}
            setShowDropdownStatus={setShowDropdownStatus}
          />
        </div>
      )}

      <div className="flex-center-between mt-6">
        <div className="flex items-center gap-[11px] flex-wrap">
          {filters.map((filter, index) => (
            <div key={index} className="flex items-center px-[10px] py-[5px] bg-gray-bg rounded">
              <span className="text-white text-[16px] leading-[23px] mr-[50px]">{filter}</span>
              <button onClick={() => removeFilter(index)}>
                <img src={closeIcon} alt="" />
              </button>
            </div>
          ))}
        </div>

        <div className="relative">
          <button
            className="flex items-center gap-[12px] px-[10px] py-[5px] border border-transparent bg-gray-bg rounded relative focus:border-[#454545]"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span className="text-white text-[16px] leading-[23px]">{selectedField}</span>
            <img src={arrowDown} alt="" />
          </button>

          {showDropdown && (
            <div className="absolute mt-1 w-full bg-[#242424] rounded px-2 py-1 z-20">
              {dropdownOptions.map(option => (
                <div
                  key={option}
                  onClick={() => handleFieldSelect(option)}
                  className={`pb-1 pt-2 pl-1 cursor-pointer border-b border-solid border-[#3C3C3C] text-[16px] 
                  leading-[22px] hover:${
                    option === selectedField ? 'bg-transparent' : 'bg-[#3C3C3C]'
                  } mb-[4px] last:border-none last:mb-0 text-${option === selectedField ? '[#6A6A6A]' : 'white'}`}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormGraphics;
