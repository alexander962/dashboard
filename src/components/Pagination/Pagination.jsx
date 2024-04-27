import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNeighbours = 2;
  const range = [];

  const generatePages = () => {
    const totalPagesToShow = Math.min(totalPages, 5 + pageNeighbours * 2);
    let startPage, endPage;

    if (currentPage <= pageNeighbours + 2) {
      startPage = 1;
      endPage = Math.min(totalPages, startPage + 4);
    } else if (currentPage >= totalPages - pageNeighbours - 1) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - 4);
    } else {
      startPage = currentPage - pageNeighbours;
      endPage = currentPage + pageNeighbours;
    }

    for (let i = startPage; i <= endPage; i++) {
      range.push(i);
    }

    if (startPage > 1) {
      range.unshift(1, '. . .');
    }

    if (endPage < totalPages) {
      range.push('. . .', totalPages);
    }
  };

  generatePages();

  return (
    <nav>
      <ul className="flex list-none p-0 flex-wrap">
        <li className="mb-2 mr-2">
          <button
            onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
            className={`py-2 px-2 border border-solid rounded bg-gray-300 text-[#03052b] hover:bg-[#03052b] hover:text-white`}
            disabled={currentPage === 1}
          >
            {'<'}
          </button>
        </li>
        {range.map((item, index) => (
          <li key={index} className="mb-2 mr-2">
            {typeof item === 'number' ? (
              <button
                onClick={() => onPageChange(item)}
                className={`py-2 px-3 border border-solid rounded ${
                  currentPage === item
                    ? 'bg-[#03052b] text-white'
                    : 'bg-gray-300 text-[#03052b] hover:bg-[#03052b] hover:text-white'
                }`}
              >
                {item}
              </button>
            ) : (
              <span
                className="flex items-end h-full text-white"
                style={{ verticalAlign: 'text-bottom', marginBottom: '0' }}
              >
                {item}
              </span>
            )}
          </li>
        ))}

        <li className="mb-2 mr-2">
          <button
            onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
            className={`py-2 px-2 border border-solid rounded bg-gray-300 text-[#03052b] hover:bg-[#03052b] hover:text-white`}
            disabled={currentPage === totalPages}
          >
            {'>'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
