import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '/src/assets/banner.jpg';
import MovieList from '../components/Movie/MovieList';

const HomePage = () => {
  return (
    <>
      <header className='flex items-center justify-center py-10 mb-10 text-white header gap-x-5'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='movie'>Movie</NavLink>
      </header>

      {/* banner */}
      <section className='banner h-[400px] page-container mb-10 bg-white rounded-lg'>
        <div className='relative w-full h-full'>
          <div className='overlay'></div>
          <img
            src={Banner}
            alt=''
            className='object-cover w-full h-full rounded-lg'
          />
          <div className='absolute w-full left-5 bottom-5'>
            <h2 className='mb-3 text-2xl font-bold text-white'>
              Avenger : Endgame
            </h2>
            <div className='flex items-center text-white gap-x-3'>
              <span className='px-4 py-2 border border-white rounded-md'>
                Drama
              </span>
              <span className='px-4 py-2 border border-white rounded-md'>
                Action
              </span>
            </div>
            <button className='mt-3 py-2.5 px-5 text-white font-medium rounded-lg bg-pink-400'>
              Watch
            </button>
          </div>
        </div>
      </section>

      {/* list movie */}
      <section className='pb-20 text-white movies-layout page-container'>
        <h2 className='mb-10 text-2xl font-bold capitalize'>Now playing</h2>
        <MovieList></MovieList>
      </section>

      <section className='pb-20 text-white movies-layout page-container'>
        <h2 className='mb-10 text-2xl font-bold capitalize'>Top rated</h2>
        <MovieList></MovieList>
      </section>

      <section className='pb-20 text-white movies-layout page-container'>
        <h2 className='mb-10 text-2xl font-bold capitalize'>Trending</h2>
        <MovieList></MovieList>
      </section>
    </>
  );
};

export default HomePage;
