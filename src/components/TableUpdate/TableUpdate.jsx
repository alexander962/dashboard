import React from 'react';
import { NavLink } from 'react-router-dom';

const TableUpdate = ({ data }) => {
  return (
    <div>
      <div className="bg-table-bg from-purple-800 to-transparent px-[24px] py-[16px] rounded-[16px] mt-[24px] max-[1025px]:hidden">
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr>
              <th className="table-element table-title rounded-tl-[4px]">ID</th>
              <th className="table-element table-title">Update date</th>
              <th className="table-element table-title">New company</th>
              <th className="table-element table-title">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index} className="border-b border-t border-white border-opacity-[0.06]">
                <td className="table-element">{`№${item?.id}`}</td>
                <td className="table-element">{new Date(item?.updated_at).toLocaleDateString('en-US')}</td>
                <td className="table-element">{item?.newCompanyCount}</td>
                <td className="table-element underline">
                  <NavLink to={`/update-info/${item?.id}`}>Detail</NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="hidden grid-cols-2 gap-x-[30px] gap-y-[16px] mt-[24px] max-[769px]:grid-cols-1 max-[1025px]:grid">
        {data?.map((item, index) => (
          <div
            key={index}
            className="bg-table-bg h-[400px] rounded-[16px] border border-white border-opacity-[0.06] px-[16px] py-[24px]"
          >
            <div className="py-[14px] border-b border-[#454545]">
              <div className="text-[14px] leading-[22px] text-[#C4C4C4] mb-[2px]">ID</div>
              <span className="text-[16px] leading-[22px] font-semibold text-white">{`№${item?.id}`}</span>
            </div>
            <div className="py-[14px] border-b border-[#454545]">
              <div className="text-[14px] leading-[22px] text-[#C4C4C4] mb-[2px]">Update date</div>
              <span className="text-[16px] leading-[22px] font-semibold text-white">
                {new Date(item?.updated_at).toLocaleDateString('en-US')}
              </span>
            </div>
            <div className="py-[14px]">
              <div className="text-[14px] leading-[22px] text-[#C4C4C4] mb-[2px]">New company</div>
              <span className="text-[16px] leading-[22px] font-semibold text-white">{item?.newCompanyCount}</span>
            </div>
            <div className="mt-1">
              <NavLink to={`/update-info/${index + 1}`}>
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

export default TableUpdate;
