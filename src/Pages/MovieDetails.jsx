import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher, apiMovie, apiKey, pathImg } from '../Api/configApi';
import MovieCast from '@components/Movie/MovieCast';
import TrailerMovie from '@components/Movie/TrailerMovie';
import MovieSimilar from '@components/Movie/MovieSimilar';

const MovieDetails = () => {
  const navigate = useNavigate();
  const handleChangeURL = () => {
    navigate('/movie');
  };
  const { movieId } = useParams();
  const { data } = useSWR(`${apiMovie}/${movieId}?api_key=${apiKey}`, fetcher);

  if (!data) return;

  return (
    <div className='py-10 text-white'>
      <div className='w-full h-[600px] relative'>
        <div className='absolute inset-0 bg-black bg-opacity-70'></div>
        <div
          className='w-full h-full bg-no-repeat bg-cover'
          style={{
            backgroundImage: `url(${pathImg}/${data.backdrop_path})`,
          }}
        ></div>
      </div>
      <div className='w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10'>
        <img
          src={`${pathImg}/${data.poster_path}`}
          className='object-cover w-full h-full rounded-xl'
          alt={data.title}
        />
      </div>
      <h1 className='mb-10 text-4xl font-bold text-center text-white'>
        {data.title}
      </h1>
      {data.genres.length > 0 && (
        <div className='flex items-center justify-center mb-10 gap-x-5'>
          {data.genres.map((item) => (
            <span
              className='px-4 py-2 border rounded border-primary text-primary'
              key={item.id}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className='text-center leading-relaxed max-w-[600px] mx-auto mb-10'>
        {data.overview}
      </p>

      <MovieCast id={movieId} typeChange='credits'></MovieCast>
      <TrailerMovie id={movieId} typeChange='videos'></TrailerMovie>
      <MovieSimilar id={movieId} typeChange='similar'></MovieSimilar>

      <div className='text-center'>
        <button
          onClick={handleChangeURL}
          type='button'
          className='bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5'
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
