import React, { Fragment } from 'react';
import Header from '../Pages/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <Fragment>
      <Header></Header>
      <Outlet />
    </Fragment>
  );
};

export default Main;
