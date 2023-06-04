import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import MovieItem from '@components/Movie/MovieItem';
import PaginatedItems from '@components/Pagination/Paginate';
import useDebounce from '../hooks/useDebounce';
import Loading from '@components/Effect/Loading';
import { toast } from 'react-toastify';
import {
  type,
  fetcher,
  apiMovie,
  apiKey,
  apiSearchMovie,
} from '../Api/configApi';

const MoviePage = () => {
  const [filter, setFilter] = useState('');
  const [pageMovie, setPageMovie] = useState(1);

  const [apiEnpoint, setApiEndPoint] = useState(
    `${apiMovie}/${type.popular}?api_key=${apiKey}&page=${pageMovie}`
  );

  const { data, error } = useSWR(apiEnpoint, fetcher);

  const isLoading = !data && !error;
  const movies = data?.results || [];
  const deboundFilter = useDebounce(filter, 1000);

  useEffect(() => {
    if (deboundFilter) {
      setApiEndPoint(
        `${apiSearchMovie}?query=${deboundFilter}&page=${pageMovie}&api_key=${apiKey}`
      );
      toast.success(`Succeed search movies`);
    } else {
      setApiEndPoint(
        `${apiMovie}/${type.popular}?page=${pageMovie}&api_key=${apiKey}`
      );
    }
  }, [deboundFilter, pageMovie]);

  return (
    <div className='py-10 text-white page-container'>
      <div className='flex mb-10 rounded-sm overflow-hidden'>
        <div className='flex-1'>
          <input
            value={filter}
            type='text'
            className='w-full bg-slate-600 py-2.5 px-5 focus:ring-4 focus:ring-blue-300 outline-none'
            placeholder='Search something ...'
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <button
          type='button'
          className='flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5'
        >
          <MagnifyingGlassIcon className='w-6 h-6' />
        </button>
      </div>
      {isLoading && <Loading />}
      <div className='grid grid-cols-4 gap-10'>
        {movies &&
          movies.length > 0 &&
          movies.map((item) => <MovieItem key={item.id} movie={item} />)}
      </div>

      <PaginatedItems
        itemsPerPage={movies.length}
        data={data}
        changePage={setPageMovie}
      ></PaginatedItems>
    </div>
  );
};

export default MoviePage;
