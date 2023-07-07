import React from 'react';
import MovieList from '../components/Movie/MovieList';
import { type } from '../Api/configApi';

const HomePage = () => {
  return (
    <>
      <section className='pb-20 text-white movies-layout page-container'>
        <h2 className='mb-10 text-2xl font-bold capitalize'>Now playing</h2>
        <MovieList type={type.now}></MovieList>
      </section>

      <section className='pb-20 text-white movies-layout page-container'>
        <h2 className='mb-10 text-2xl font-bold capitalize'>Top rated</h2>
        <MovieList type={type.rated}></MovieList>
      </section>

      <section className='pb-20 text-white movies-layout page-container'>
        <h2 className='mb-10 text-2xl font-bold capitalize'>Trending</h2>
        <MovieList type={type.popular}></MovieList>
      </section>
    </>
  );
};

export default HomePage;
