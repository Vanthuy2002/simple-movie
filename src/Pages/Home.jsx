import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '/src/assets/banner.jpg';

const HomePage = () => {
  return (
    <>
      <header className='header flex items-center justify-center gap-x-5 py-10 text-white mb-10'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='movie'>Movie</NavLink>
      </header>

      <section className='banner h-[400px] bg-white rounded-lg'>
        <div className='w-full h-full relative'>
          <div className='overlay'></div>
          <img
            src={Banner}
            alt=''
            className='w-full h-full object-cover rounded-lg'
          />
          <div className='absolute left-5 bottom-5 w-full'>
            <h2 className='font-bold text-2xl text-white mb-3'>
              Avenger : Endgame
            </h2>
            <div className='flex items-center gap-x-3 text-white'>
              <span className='py-2 px-4 border border-white rounded-md'>
                Drama
              </span>
              <span className='py-2 px-4 border border-white rounded-md'>
                Action
              </span>
            </div>
            <button className='mt-3 py-2.5 px-5 text-white font-medium rounded-lg bg-pink-400'>
              Watch
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
