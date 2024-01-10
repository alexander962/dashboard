import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { NavLink } from 'react-router-dom';
import { arrowDown, closeGraphIcon } from '../../assets/images';

const GraphExpenses = ({ data, title, index, deleteGraph, isFavourite }) => {
  const [showDropdownGraph, setShowDropdownGraph] = useState(false);
  const [selectedField, onFieldSelect] = useState('Year');

  const dropdownOptions = ['Year', 'Month', 'All time'];

  const handleFieldSelect = field => {
    onFieldSelect(field);
    setShowDropdownGraph(false);
  };

  const getChartData = () => {
    switch (selectedField) {
      case 'Year':
        return {
          labels: data?.operating?.dataYear?.map(item => item.x),
          datasets: [
            {
              label: 'Operating',
              data: data?.operating?.dataYear?.map(item => item.y),
              backgroundColor: ['transparent'],
              borderColor: '#C9E139',
              tension: 0,
              pointRadius: 2,
              pointHoverRadius: 5,
              fill: true,
              borderWidth: 1.5,
            },
            {
              label: 'Royalties',
              data: data?.royalties?.dataYear?.map(item => item.y),
              backgroundColor: ['transparent'],
              borderColor: '#E234D1',
              tension: 0,
              pointRadius: 2,
              pointHoverRadius: 5,
              fill: true,
              borderWidth: 1.5,
            },
            {
              label: 'Taxes',
              data: data?.taxes?.dataYear?.map(item => item.y),
              backgroundColor: ['transparent'],
              borderColor: '#3445E2',
              tension: 0,
              pointRadius: 2,
              pointHoverRadius: 5,
              fill: true,
              borderWidth: 1.5,
            },
            {
              label: 'Buildings',
              data: data?.buildings?.dataYear?.map(item => item.y),
              backgroundColor: ['transparent'],
              borderColor: '#45DD9A',
              tension: 0,
              pointRadius: 2,
              pointHoverRadius: 5,
              fill: true,
              borderWidth: 1.5,
            },
          ],
        };
      case 'Month':
        return {
          labels: data?.operating?.dataMonth?.map(item => item.x),
          datasets: [
            {
              label: 'Sales',
              data: data?.operating?.dataMonth?.map(item => item.y),
              backgroundColor: ['transparent'],
              borderColor: '#C9E139',
              tension: 0,
              pointRadius: 2,
              pointHoverRadius: 5,
              fill: true,
              borderWidth: 1.5,
            },
            {
              label: 'Royalties',
              data: data?.royalties?.dataMonth?.map(item => item.y),
              backgroundColor: ['transparent'],
              borderColor: '#E234D1',
              tension: 0,
              pointRadius: 2,
              pointHoverRadius: 5,
              fill: true,
              borderWidth: 1.5,
            },
            {
              label: 'Taxes',
              data: data?.taxes?.dataMonth?.map(item => item.y),
              backgroundColor: ['transparent'],
              borderColor: '#3445E2',
              tension: 0,
              pointRadius: 2,
              pointHoverRadius: 5,
              fill: true,
              borderWidth: 1.5,
            },
            {
              label: 'Buildings',
              data: data?.buildings?.dataMonth?.map(item => item.y),
              backgroundColor: ['transparent'],
              borderColor: '#45DD9A',
              tension: 0,
              pointRadius: 2,
              pointHoverRadius: 5,
              fill: true,
              borderWidth: 1.5,
            },
          ],
        };
      case 'All time':
        return {
          labels: data?.operating?.dataDay?.map(item => item.x),
          datasets: [
            {
              label: 'Sales',
              data: data?.operating?.dataDay?.map(item => item.y),
              backgroundColor: ['transparent'],
              borderColor: '#C9E139',
              tension: 0,
              pointRadius: 2,
              pointHoverRadius: 5,
              fill: true,
              borderWidth: 1.5,
            },
            {
              label: 'Royalties',
              data: data?.royalties?.dataDay?.map(item => item.y),
              backgroundColor: ['transparent'],
              borderColor: '#E234D1',
              tension: 0,
              pointRadius: 2,
              pointHoverRadius: 5,
              fill: true,
              borderWidth: 1.5,
            },
            {
              label: 'Taxes',
              data: data?.taxes?.dataDay?.map(item => item.y),
              backgroundColor: ['transparent'],
              borderColor: '#3445E2',
              tension: 0,
              pointRadius: 2,
              pointHoverRadius: 5,
              fill: true,
              borderWidth: 1.5,
            },
            {
              label: 'Buildings',
              data: data?.buildings?.dataDay?.map(item => item.y),
              backgroundColor: ['transparent'],
              borderColor: '#45DD9A',
              tension: 0,
              pointRadius: 2,
              pointHoverRadius: 5,
              fill: true,
              borderWidth: 1.5,
            },
          ],
        };
      default:
        return {};
    }
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        align: 'start',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          position: 'start',
          padding: 30,
        },
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
        max: 6000000,
      },
    },
  };

  return (
    <div className="relative bg-table-bg rounded-2xl px-16px py-24px">
      {deleteGraph && isFavourite && (
        <div className="absolute right-[-10px] top-[-10px] z-50 cursor-pointer">
          <img src={closeGraphIcon} alt="" />
        </div>
      )}
      <div className="flex justify-between items-center px-4 py-2">
        <div className="text-white px-[16px] text-[16px]">{title}</div>
        <div className="relative">
          <button
            className="flex items-center gap-[12px] px-[10px] py-[5px] border border-transparent bg-gray-bg rounded relative focus:border-[#454545]"
            onClick={() => setShowDropdownGraph(!showDropdownGraph)}
          >
            <span className="text-white text-[16px] leading-[23px]">{selectedField}</span>
            <img src={arrowDown} alt="" />
          </button>

          {showDropdownGraph && (
            <div className="absolute mt-1 w-full bg-[#242424] rounded px-2 py-1">
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
      <NavLink to={`/company/${index}`}>
        <Line data={getChartData()} options={options} />
      </NavLink>
    </div>
  );
};

export default GraphExpenses;
