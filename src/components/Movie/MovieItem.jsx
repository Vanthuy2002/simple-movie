import React from 'react';
import PropTypes from 'prop-types';
import { pathImg } from '../../Api/configApi';
import { useNavigate } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  // change to Details Pages
  const navigate = useNavigate();
  const handleURL = (id) => {
    navigate(`movie/${id}`);
  };
  return (
    <>
      <div className='flex flex-col h-full p-3 rounded-lg movie-card bg-slate-800'>
        <img
          src={`${pathImg}/${movie.poster_path}`}
          alt={movie.title}
          className='object-cover w-full h-[250px] rounded-lg mb-3'
        />
        <div className='flex flex-col flex-1'>
          <h2 className='mb-3 font-medium text-md'>{movie.title}</h2>

          <div className='flex justify-between mb-3 text-sm movie-center opacity-60'>
            <span>{new Date(movie.release_date).getFullYear()}</span>
            <span className=''>{movie.vote_average}</span>
          </div>

          <button
            onClick={() => handleURL(movie.id)}
            className='w-full text-center px-5 py-2.5 bg-red-300 rounded-lg mt-auto'
          >
            Watch Now
          </button>
        </div>
      </div>
    </>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object,
};

export default MovieItem;
