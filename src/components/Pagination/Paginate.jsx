import React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

const PaginatedItems = ({ itemsPerPage, data, changePage }) => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (!data || !data.total_pages) return;
    setPageCount(Math.ceil(data.total_pages / itemsPerPage));
  }, [data, itemOffset]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % data.total_pages;
    setItemOffset(newOffset);
    changePage(e.selected + 1);
  };

  return (
    <>
      <ReactPaginate
        breakLabel='...'
        nextLabel='Next'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel='Prev'
        renderOnZeroPageCount={null}
      />
    </>
  );
};

PaginatedItems.propTypes = {
  data: PropTypes.object,
  itemsPerPage: PropTypes.number,
  changePage: PropTypes.func,
};

export default PaginatedItems;
