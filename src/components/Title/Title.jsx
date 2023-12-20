import React from 'react';

const Title = ({ title, classExtra = '' }) => {
  return <div className={`text-white text-[32px] font-semibold mb-[32px] ${classExtra}`}>{title}</div>;
};

export default Title;
