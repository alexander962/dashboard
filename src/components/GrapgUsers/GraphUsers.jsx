import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { NavLink } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler);

const GraphUsers = () => {
  const gradient = document.createElement('canvas').getContext('2d').createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, 'rgba(52, 69, 226, 0.74)');
  gradient.addColorStop(1, 'rgba(31, 53, 255, 0.00)');

  const title = 'Users';

  const selectData = [
    { x: '2014', y: 25 },
    { x: '2015', y: 18 },
    { x: '2016', y: 30 },
    { x: '2017', y: 32 },
    { x: '2018', y: 28 },
    { x: '2019', y: 24 },
    { x: '2020', y: 20 },
    { x: '2021', y: 28 },
    { x: '2022', y: 23 },
  ];

  const chartData = {
    labels: selectData.map(item => item.x),
    datasets: [
      {
        label: 'Users',
        data: selectData.map(item => item.y),
        backgroundColor: gradient,
        borderColor: '#3445E2',
        borderWidth: 1.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
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
          stepSize: 5,
        },
        min: 0,
        max: 35,
      },
    },
  };

  return (
    <div className="relative bg-table-bg rounded-2xl px-0 py-[24px]">
      <div className="text-white px-[16px] mb-[13px] text-[16px]">{title}</div>
      <NavLink to={`/`}>
        <Bar data={chartData} options={options} className="max-h-[300px]" />
      </NavLink>
    </div>
  );
};

export default GraphUsers;
