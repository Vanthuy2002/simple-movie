import React from 'react';
import PropTypes from 'prop-types';

const Paginate = ({ page, onPage, onBack }) => {
  return (
    <nav className='mt-10 flex justify-end'>
      <ul className='inline-flex -space-x-px'>
        <li>
          <span
            className='cursor-pointer px-3 py-2 ml-0 leading-tight text-white bg-slate-500 border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700'
            onClick={onBack}
          >
            Prev
          </span>
        </li>

        <li>
          <span className='px-3 py-2 leading-tight text-white bg-slate-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700'>
            {page}
          </span>
        </li>
        <li>
          <span
            className='cursor-pointer px-3 py-2 leading-tight text-white bg-slate-500 border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700'
            onClick={onPage}
          >
            Next
          </span>
        </li>
      </ul>
    </nav>
  );
};
Paginate.propTypes = {
  page: PropTypes.number,
  onPage: PropTypes.func,
  onBack: PropTypes.func,
};

export default Paginate;
