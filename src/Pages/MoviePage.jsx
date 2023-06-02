import React from 'react';
import useSWR from 'swr';
import { type, fetcher, apiMovie, apiKey } from '../Api/configApi';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import MovieItem from '../components/Movie/MovieItem';

const MoviePage = () => {
  const { data } = useSWR(
    `${apiMovie}/${type.popular}?api_key=${apiKey}`,
    fetcher
  );

  const movies = data?.results || [];

  return (
    <div className='py-10 text-white page-container'>
      <div className='flex gap-3 mb-10'>
        <div className='flex-1'>
          <input
            type='text'
            className='w-full bg-slate-600 py-2.5 px-5 rounded-sm focus:ring-4 focus:ring-blue-300 outline-none'
            placeholder='Search something ...'
          />
        </div>
        <button
          type='button'
          className='flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5'
        >
          <MagnifyingGlassIcon className='w-6 h-6' />
          <span>Search</span>
        </button>
      </div>
      <div className='grid grid-cols-4 gap-10'>
        {movies &&
          movies.length > 0 &&
          movies.map((item) => <MovieItem key={item.id} movie={item} />)}
      </div>
    </div>
  );
};

export default MoviePage;
