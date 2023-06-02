import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex items-center justify-center py-10 mb-10 text-white header gap-x-5'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='movie'>Movie</NavLink>
    </header>
  );
};

export default Header;
