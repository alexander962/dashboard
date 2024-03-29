import React from 'react';

const AddFavoriteIcon = ({ favorite }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={favorite ? 'white' : 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.8963 2H6.96853C4.78647 2 3 3.78647 3 5.96853V20.4646C3 22.3149 4.3271 23.106 5.9477 22.2L10.9626 19.4055C11.4986 19.112 12.3663 19.112 12.8895 19.4055L17.9044 22.2C19.525 23.106 20.8521 22.3149 20.8521 20.4646V5.96853C20.8648 3.78647 19.0784 2 16.8963 2Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.8649 5.96853V20.4646C20.8649 22.3149 19.5378 23.0933 17.9172 22.2L12.9022 19.4055C12.3663 19.112 11.4986 19.112 10.9626 19.4055L5.9477 22.2C4.3271 23.0933 3 22.3149 3 20.4646V5.96853C3 3.78647 4.78647 2 6.96853 2H16.8963C19.0784 2 20.8649 3.78647 20.8649 5.96853Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AddFavoriteIcon;
