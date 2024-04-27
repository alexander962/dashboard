import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';
import { fi } from 'faker/lib/locales';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const GraphProduction = ({
  data,
  dataMine = [],
  dataMines = {},
  title = '',
  percent = '0',
  index,
  deleteGraph,
  isFavourite,
  onDeleteGraph,
}) => {
  const [showDropdownGraph, setShowDropdownGraph] = useState(false);
  const [selectedField, onFieldSelect] = useState('Antimony');

  console.log('dataMine', dataMine);
  const [selectData, setSelectData] = useState(dataMine?.length > 0 ? dataMine : dataMines?.antimonyProduction);
  const [chartKey, setChartKey] = useState(0);
  const [percentProduction, setPercentProduction] = useState(0);
  const { userToken, refreshTokenFunc } = useAuth();

  useEffect(() => {
    setChartKey(prevKey => prevKey + 1);
    setSelectData(dataMine?.length > 0 ? dataMine : dataMines?.antimonyProduction);
  }, [data]);

  const deleteFavorite = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const response = await axios.delete(`${apiUrl}/favorites/${data?.id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (response.status === 200 || response.status === 204) {
        toast.success('Delete to favorites successfully!');
        onDeleteGraph(data?.id);
      } else {
        console.error('Failed!!!');
      }
    } catch (error) {
      if (error?.response?.status && error?.response?.status === 403) {
        refreshTokenFunc();
      } else {
        toast.error(error?.message ? error?.message : error?.response?.data?.message);
      }
    }
  };

  const chartData = {
    labels: selectData?.map(item => item?.year),
    datasets: [
      {
        label: '',
        data: selectData?.map(item => (item?.tone ? item?.tone : item?.costs)),
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
        },
        min: 0,
      },
    },
  };

  const dropdownOptions = [
    'Lithium',
    'Cobalt',
    'Copper',
    'Molybdenum',
    'Nickel',
    'Tin',
    'Palladium',
    'Platinum',
    'Bauxite Aluminium',
    'Antimony',
    'Niobium',
    'Tantalum',
    'Titanium',
    'Vanadium',
    'Graphite',
    'Rare Earth Elements',
    'Tungsten',
  ];
  // const dropdownOptions = ['Year'];

  const handleFieldSelect = field => {
    onFieldSelect(field);
    setShowDropdownGraph(false);

    const fieldMap = {
      Lithium: 'lithiumProduction',
      Cobalt: 'cobaltProduction',
      Copper: 'copperProduction',
      Molybdenum: 'molybdenumProduction',
      Nickel: 'nickelProduction',
      Tin: 'tinProduction',
      Palladium: 'palladiumProduction',
      Platinum: 'platinumProduction',
      'Bauxite Aluminium': 'bauxiteAluminiumProduction',
      Antimony: 'antimonyProduction',
      Niobium: 'niobiumProduction',
      Tantalum: 'tantalumProduction',
      Titanium: 'titaniumProduction',
      Vanadium: 'vanadiumProduction',
      Graphite: 'graphiteProduction',
      'Rare Earth Elements': 'rareEarthElementsProduction',
      Tungsten: 'tungstenProduction',
    };

    const selectedData = dataMines?.[fieldMap[field]];
    setSelectData(selectedData);

    const newValueProduction = selectedData[selectedData.length - 1].tone;
    const previousValueProduction = selectedData[selectedData.length - 2].tone;
    let percentProduction;
    if (newValueProduction && previousValueProduction && newValueProduction !== previousValueProduction) {
      percentProduction = ((newValueProduction - previousValueProduction) / previousValueProduction) * 100;
      percentProduction = percentProduction.toFixed(2);
      setPercentProduction(percentProduction);
    } else {
      setPercentProduction(0);
    }
  };

  return (
    <div className="relative bg-table-bg rounded-2xl px-0 py-[24px]">
      {deleteGraph && isFavourite && (
        <div className="absolute right-[-10px] top-[-20px] z-50 cursor-pointer" onClick={deleteFavorite}>
          <img src={closeGraphIcon} alt="" />
        </div>
      )}
      <div className="flex-center-between pr-[20px] mb-[13px]">
        <div className="text-white px-[16px] text-[16px]">{title !== '' ? title : data?.name}</div>
        <div className="flex-center-center gap-4">
          {percent && (percent !== '0' || percentProduction !== 0) && (
            <div className="flex items-center justify-start gap-[10px]">
              {percent.includes('-') ? <img src={arrowRed} alt="" /> : <img src={arrowGreen} alt="" />}
              <span
                className={`text-[24px] font-medium ${percent.includes('-') ? 'text-[#FF3700]' : 'text-[#1FC069]'}`}
              >
                {percentProduction !== 0 ? percentProduction : percent}%
              </span>
            </div>
          )}
          {dataMine?.length === 0 && (
            <div className="relative">
              <button
                className="flex items-center gap-[12px] px-[10px] py-[5px] border border-[#2E2E2E] bg-transparent rounded relative focus:border-[#454545]"
                onClick={() => setShowDropdownGraph(!showDropdownGraph)}
              >
                <span className="text-white text-[12px] leading-[14px] mr-4">{selectedField}</span>
                <img src={arrowDown} alt="" />
              </button>
              {showDropdownGraph && (
                <div className="absolute right-0 mt-1 w-full max-h-[220px] overflow-y-auto overflow-hidden min-w-[200px] bg-[#020202] rounded px-2 py-1">
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
          )}
        </div>
      </div>
      <NavLink to={`/company/${data?.id}`}>
        <Line key={chartKey} data={chartData} options={options} className="max-h-[300px]" />
      </NavLink>
      {/*<div className="flex justify-between items-center px-4 py-2">*/}
      {/*  <div className="flex items-center justify-start gap-[10px]">*/}
      {/*    {percent.includes('-') ? <img src={arrowRed} alt="" /> : <img src={arrowGreen} alt="" />}*/}
      {/*    <span className={`text-[24px] font-medium ${percent.includes('-') ? 'text-[#FF3700]' : 'text-[#1FC069]'}`}>*/}
      {/*      {percent}*/}
      {/*    </span>*/}
      {/*  </div>*/}
      {/*<div className="relative">*/}
      {/*  <button*/}
      {/*    className="flex items-center gap-[12px] px-[10px] py-[5px] border border-[#2E2E2E] bg-transparent rounded relative focus:border-[#454545]"*/}
      {/*    onClick={() => setShowDropdownGraph(!showDropdownGraph)}*/}
      {/*  >*/}
      {/*    <span className="text-white text-[12px] leading-[14px] mr-4">{selectedField}</span>*/}
      {/*    <img src={arrowDown} alt="" />*/}
      {/*  </button>*/}
      {/*  {showDropdownGraph && (*/}
      {/*    <div className="absolute mt-1 w-full bg-[#020202] rounded px-2 py-1">*/}
      {/*      {dropdownOptions.map(option => (*/}
      {/*        <div*/}
      {/*          key={option}*/}
      {/*          onClick={() => handleFieldSelect(option)}*/}
      {/*          className={`pb-1 pt-2 pl-1 cursor-pointer border-b border-solid border-[#3C3C3C] text-[16px] */}
      {/*            leading-[22px] hover:${*/}
      {/*              option === selectedField ? 'bg-transparent' : 'bg-[#3C3C3C]'*/}
      {/*            } mb-[4px] last:border-none last:mb-0 text-${option === selectedField ? '[#6A6A6A]' : 'white'}`}*/}
      {/*        >*/}
      {/*          {option}*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*<div className="text-white px-[16px] mb-[13px] text-[16px]">{title}</div>*/}
      {/*<NavLink to={`/company/${index}`}>*/}
      {/*  <Line data={chartData} options={options} className="max-h-[300px]" />*/}
      {/*</NavLink>*/}
    </div>
  );
};

export default GraphProduction;
