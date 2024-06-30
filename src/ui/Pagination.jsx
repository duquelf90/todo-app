import React from 'react'
import { Icon } from '@iconify/react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
    const pageCount = Math.ceil(totalItems / itemsPerPage); 
    return (
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <span className="w-10 h-10 flex items-center justify-center rounded-md">
            <Icon icon="mingcute:right-fill" width={50} />
          </span>
        }
        onPageChange={onPageChange}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={
          <span className="w-10 h-10 flex items-center justify-center rounded-md">
            <Icon icon="mingcute:left-fill" width={50} />
          </span>
        }
        renderOnZeroPageCount={null}
        containerClassName="flex items-center justify-center mt-8 mb-4"
        pageClassName="block border- border-solid hover:bg-blue-500 w-10 h-10 flex items-center justify-center rounded-md"
        activeClassName="bg-purple text-white"
      />
    );
  };
  
  export default Pagination;