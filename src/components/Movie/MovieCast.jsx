import React from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';
import { pathImg, fetcher, apiMovie, apiKey } from '../../Api/configApi';

const MovieCast = ({ id, typeChange }) => {
  const { data } = useSWR(
    `${apiMovie}/${id}/${typeChange}?api_key=${apiKey}`,
    fetcher
  );

  if (!data) return;
  const { cast } = data;

  return (
    <div className='py-10 page-container'>
      <h2 className='mb-10 text-3xl text-center'>Casts</h2>
      <div className='grid grid-cols-4 gap-5'>
        {cast &&
          cast.slice(0, 4).map((item) => (
            <div className='cast-item' key={item.id}>
              <img
                src={`${pathImg}/${item.profile_path}`}
                className='w-full h-[350px] object-cover rounded-lg mb-3'
                alt=''
              />
              <h3 className='text-xl font-medium'>{item.name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

MovieCast.propTypes = {
  id: PropTypes.string.isRequired,
  typeChange: PropTypes.string,
};

export default MovieCast;
