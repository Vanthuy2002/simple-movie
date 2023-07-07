import React from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';
import { fetcher, apiMovie, apiKey } from '../../Api/configApi';

const TrailerMovie = ({ id, typeChange }) => {
  const { data } = useSWR(
    `${apiMovie}/${id}/${typeChange}?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return;
  const { results } = data;

  return (
    <div className='py-10 page-container'>
      {results &&
        results.length > 0 &&
        results.slice(0, 1).map((item) => (
          <div className='cast-item flex justify-center' key={item.id}>
            <iframe
              width='880'
              height='495'
              src={`https://www.youtube.com/embed/${item.key}`}
              title={item.title}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
        ))}
    </div>
  );
};

TrailerMovie.propTypes = {
  id: PropTypes.string.isRequired,
  typeChange: PropTypes.string.isRequired,
};

export default TrailerMovie;
