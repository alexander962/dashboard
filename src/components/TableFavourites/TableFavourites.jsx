import React from 'react';
import { userData } from '../../data/user';

const TableFavourites = () => {
  return (
    <div>
      <div className="bg-table-bg from-purple-800 to-transparent px-[24px] py-[16px] rounded-[16px] mt-[24px] max-[1025px]:hidden">
        <h2 className="text-white text-[20px] font-medium mb-[20px]">Favorites</h2>
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr>
              <th className="table-element table-title rounded-tl-[4px]">Payment date</th>
              <th className="table-element table-title">Tariff plane</th>
              <th className="table-element table-title">To be paid</th>
              <th className="table-element table-title">Status</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item, index) => (
              <tr key={index} className="border-b border-t border-white border-opacity-[0.06]">
                <td className="table-element">{item.paymentDate}</td>
                <td className="table-element">{item.tariffPlane}</td>
                <td className="table-element">{item.paid}</td>
                <td className="table-element">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="hidden grid-cols-2 gap-x-[30px] gap-y-[16px] mt-[24px] max-[769px]:grid-cols-1 max-[1025px]:grid">
        {userData.map((item, index) => (
          <div
            key={index}
            className="bg-table-bg h-[400px] rounded-[16px] border border-white border-opacity-[0.06] px-[16px] py-[24px]"
          >
            <div className="py-[14px] border-b border-[#454545]">
              <div className="text-[14px] leading-[22px] text-[#C4C4C4] mb-[2px]">User Name</div>
              <span className="text-[16px] leading-[22px] font-semibold text-white">{item.paymentDate}</span>
            </div>
            <div className="py-[14px] border-b border-[#454545]">
              <div className="text-[14px] leading-[22px] text-[#C4C4C4] mb-[2px]">Email</div>
              <span className="text-[16px] leading-[22px] font-semibold text-white">{item.tariffPlane}</span>
            </div>
            <div className="py-[14px] border-b border-[#454545]">
              <div className="text-[14px] leading-[22px] text-[#C4C4C4] mb-[2px]">Country</div>
              <span className="text-[16px] leading-[22px] font-semibold text-white">{item.paid}</span>
            </div>
            <div className="py-[14px]">
              <div className="text-[14px] leading-[22px] text-[#C4C4C4] mb-[2px]">Subscription level</div>
              <span className="text-[16px] leading-[22px] font-semibold text-white">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableFavourites;
