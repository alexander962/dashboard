import React from 'react';

const Plan = ({ data }) => {
  const { title, price, advantages } = data;
  return (
    <div className="bg-[#1C1C1C]">
      <div>
        {`${title}/`}
        <span>month</span>
      </div>
      <div>{price}</div>
      <div>
        {advantages.map(item => (
          <div>
            <img alt="" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <button>Choose a Pricing Plan</button>
    </div>
  );
};

export default Plan;
