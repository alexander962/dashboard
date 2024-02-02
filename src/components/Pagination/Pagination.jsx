import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav>
      <ul className="flex list-none p-0 flex-wrap">
        {pageNumbers.map(number => (
          <li key={number} className="mb-2 mr-2">
            <button
              onClick={() => onPageChange(number)}
              className={`py-2 px-3 border border-solid rounded ${
                currentPage === number
                  ? 'bg-[#03052b] text-white'
                  : 'bg-gray-300 text-[#03052b] hover:bg-[#03052b] hover:text-white'
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
