import React, { useState } from 'react';

const SearchDropdown = ({ options, onSelect, onClose }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = option => {
    setSelectedOption(option);
    onSelect(option);
    onClose();
  };

  return (
    <div
      className="absolute top-[calc(100%+2px)] left-0 w-full bg-[#2E2E2E] shadow-md rounded z-10"
      style={{ maxHeight: '400px', overflowY: 'auto' }}
    >
      {options.map((option, index) => (
        <div
          key={index}
          className="p-[15px] text-[#DFDFDF] text-[16px] font-light leading-[22px] cursor-pointer hover:bg-[#1C1C1C]"
          onClick={() => handleSelect(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default SearchDropdown;
