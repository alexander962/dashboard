import React from 'react';
import { NavLink } from 'react-router-dom';

const TableUsers = ({ users }) => {
  return (
    <div>
      <div className="bg-table-bg from-purple-800 to-transparent px-[24px] py-[16px] rounded-[16px] mt-[24px] max-[1025px]:hidden">
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr>
              <th className="table-element table-title rounded-tl-[4px]">User Name</th>
              <th className="table-element table-title">Email</th>
              <th className="table-element table-title">Country</th>
              <th className="table-element table-title">Subscription level</th>
              <th className="table-element table-title">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={index} className="border-b border-t border-white border-opacity-[0.06]">
                <td className="table-element">{item.fullName}</td>
                <td className="table-element">{item.email}</td>
                <td className="table-element">{item.country}</td>
                <td className="table-element">{item.tariff}</td>
                <td className="table-element underline">
                  <NavLink to={`/user/${item?.id}`}>Detail</NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="hidden grid-cols-2 gap-x-[30px] gap-y-[16px] mt-[24px] max-[769px]:grid-cols-1 max-[1025px]:grid">
        {users.map((item, index) => (
          <div
            key={index}
            className="bg-table-bg h-[400px] rounded-[16px] border border-white border-opacity-[0.06] px-[16px] py-[24px]"
          >
            <div className="py-[14px] border-b border-[#454545]">
              <div className="text-[14px] leading-[22px] text-[#C4C4C4] mb-[2px]">User Name</div>
              <span className="text-[16px] leading-[22px] font-semibold text-white">{item.fullName}</span>
            </div>
            <div className="py-[14px] border-b border-[#454545]">
              <div className="text-[14px] leading-[22px] text-[#C4C4C4] mb-[2px]">Email</div>
              <span className="text-[16px] leading-[22px] font-semibold text-white">{item.email}</span>
            </div>
            <div className="py-[14px] border-b border-[#454545]">
              <div className="text-[14px] leading-[22px] text-[#C4C4C4] mb-[2px]">Country</div>
              <span className="text-[16px] leading-[22px] font-semibold text-white">{item.country}</span>
            </div>
            <div className="py-[14px]">
              <div className="text-[14px] leading-[22px] text-[#C4C4C4] mb-[2px]">Subscription level</div>
              <span className="text-[16px] leading-[22px] font-semibold text-white">{item.tariff}</span>
            </div>
            <div className="mt-1">
              <NavLink to={`/user/${item?.id}`}>
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

export default TableUsers;
