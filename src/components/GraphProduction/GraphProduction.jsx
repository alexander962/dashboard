import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { arrowDown, arrowGreen, arrowRed, closeGraphIcon } from '../../assets/images';
import { NavLink } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const GraphProduction = ({ dataMonth, dataDay, dataYear, title, percent, index, deleteGraph, isFavourite }) => {
  const [showDropdownGraph, setShowDropdownGraph] = useState(false);
  const [selectedField, onFieldSelect] = useState('Year');
  const [selectData, setSelectData] = useState(dataYear);

  const dropdownOptions = ['Year', 'Month', 'All time'];

  const handleFieldSelect = field => {
    onFieldSelect(field);
    setShowDropdownGraph(false);
    if (field === 'Year') {
      setSelectData(dataYear);
    } else if (field === 'Month') {
      setSelectData(dataMonth);
    } else {
      setSelectData(dataDay);
    }
  };

  const chartData = {
    labels: selectData?.map(item => item.x),
    datasets: [
      {
        label: title,
        data: selectData?.map(item => item.y),
        backgroundColor: ['rgba(128, 128, 128, 0.2)'],
        borderColor: '#3445E2',
        tension: 0,
        pointRadius: 2,
        pointHoverRadius: 5,
        fill: true,
        borderWidth: 1.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        // position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        grid: {
          display: true,
          drawBorder: false,
          color: '#393939',
        },
        ticks: {
          display: true,
          color: '#545454',
          stepSize: 1000000,
        },
        min: 0,
        max: 5000000,
      },
    },
  };

  return (
    <div className="relative bg-table-bg rounded-2xl px-0 py-[24px]">
      {deleteGraph && isFavourite && (
        <div className="absolute right-[-10px] top-[-20px] z-50 cursor-pointer">
          <img src={closeGraphIcon} alt="" />
        </div>
      )}
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center justify-start gap-[10px]">
          {percent.includes('-') ? <img src={arrowRed} alt="" /> : <img src={arrowGreen} alt="" />}
          <span className={`text-[24px] font-medium ${percent.includes('-') ? 'text-[#FF3700]' : 'text-[#1FC069]'}`}>
            {percent}
          </span>
        </div>

        <div className="relative">
          <button
            className="flex items-center gap-[12px] px-[10px] py-[5px] border border-[#2E2E2E] bg-transparent rounded relative focus:border-[#454545]"
            onClick={() => setShowDropdownGraph(!showDropdownGraph)}
          >
            <span className="text-white text-[12px] leading-[14px] mr-4">{selectedField}</span>
            <img src={arrowDown} alt="" />
          </button>

          {showDropdownGraph && (
            <div className="absolute mt-1 w-full bg-[#020202] rounded px-2 py-1">
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
      <div className="text-white px-[16px] mb-[13px] text-[16px]">{title}</div>
      <NavLink to={`/company/${index}`}>
        <Line data={chartData} options={options} />
      </NavLink>
    </div>
  );
};

export default GraphProduction;
