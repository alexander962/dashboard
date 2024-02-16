import React from 'react';
import data from '../../data/table.json';
import { arrowGreen, arrowRed, lossProfitIcon, profitIcon } from '../../assets/images';
import { NavLink } from 'react-router-dom';

const Table = ({ graphsData, currentPage, setCurrentPage }) => {
  return (
    <div>
      <div className="bg-table-bg from-purple-800 to-transparent px-[24px] py-[16px] rounded-[16px] mt-[24px] max-[1025px]:hidden">
        {/*<h2 className="text-white text-[20px] font-medium mb-[20px]">Favorites</h2>*/}
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr>
              <th className="table-element table-title rounded-tl-[4px]">Activity Status</th>
              <th className="table-element table-title">Mine Name</th>
              <th className="table-element table-title">Primary Commodity</th>
              <th className="table-element table-title">Country</th>
              <th className="table-element table-title">Production</th>
              <th className="table-element table-title rounded-tr-[4px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {graphsData?.map((item, index) => (
              <tr key={index} className="border-b border-t border-white border-opacity-[0.06]">
                <td className="table-element">{item.activityStatus}</td>
                <td className="table-element">{item.name}</td>
                <td className="table-element">{item.primaryCommodity}</td>
                <td className="table-element">{item.country}</td>
                {/*<td className="table-element flex items-center justify-start gap-[12px]">*/}
                {/*  <span>{item.production}</span>*/}
                {/*  {item.production.includes('-') ? (*/}
                {/*    <img src={lossProfitIcon} alt="" />*/}
                {/*  ) : (*/}
                {/*    <img src={profitIcon} alt="" />*/}
                {/*  )}*/}
                {/*</td>*/}
                <td></td>
                <td className="table-element underline">
                  <NavLink to={`/company/${item?.id}`}>Detail</NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="hidden grid-cols-2 gap-x-[30px] gap-y-[16px] mt-[24px] max-[769px]:grid-cols-1 max-[1025px]:grid">
        {graphsData?.map((item, index) => (
          <div
            key={index}
            className="bg-table-bg h-[400px] rounded-[16px] border border-white border-opacity-[0.06] px-[16px] py-[24px]"
          >
            {/*<div className="flex items-center justify-start gap-[10px]">*/}
            {/*  {item.production.includes('-') ? <img src={arrowRed} alt="" /> : <img src={arrowGreen} alt="" />}*/}
            {/*  <span*/}
            {/*    className={`text-[24px] font-medium ${*/}
            {/*      item.production.includes('-') ? 'text-[#FF3700]' : 'text-[#1FC069]'*/}
            {/*    }`}*/}
            {/*  >*/}
            {/*    {item.production}*/}
            {/*  </span>*/}
            {/*  {item.production.includes('-') ? <img src={lossProfitIcon} alt="" /> : <img src={profitIcon} alt="" />}*/}
            {/*</div>*/}
            <div className="py-[14px] border-b border-[#454545]">
              <div className="text-[14px] leading-[22px] text-[#C4C4C4] mb-[2px]">Activity Status</div>
              <span className="text-[16px] leading-[22px] font-semibold text-white">{item?.activityStatus}</span>
            </div>
            <div className="py-[14px] border-b border-[#454545]">
              <div className="text-[14px] leading-[22px] text-[#C4C4C4] mb-[2px]">Mine Name</div>
              <span className="text-[16px] leading-[22px] font-semibold text-white">{item?.name}</span>
            </div>
            <div className="py-[14px] border-b border-[#454545]">
              <div className="text-[14px] leading-[22px] text-[#C4C4C4] mb-[2px]">Primary Commodity</div>
              <span className="text-[16px] leading-[22px] font-semibold text-white">{item?.primaryCommodity}</span>
            </div>
            <div className="py-[14px]">
              <div className="text-[14px] leading-[22px] text-[#C4C4C4] mb-[2px]">Country</div>
              <span className="text-[16px] leading-[22px] font-semibold text-white">{item?.country}</span>
            </div>
            <div className="mt-1">
              <NavLink to={`/company/${item?.id}`}>
                <button className="text-[16px] text-white font-medium text-center w-full border border-[#454545] rounded py-[6px]">
                  Detail
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
