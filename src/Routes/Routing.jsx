import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Layout/Main';
import HomePage from '../Pages/Home';
import Banner from '../components/Movie/Banner';
import MoviePage from '../Pages/MoviePage';
import MovieDetails from '../Pages/MovieDetails';

const Routing = () => {
  return (
    <Routes>
      <Route element={<Main></Main>}>
        <Route
          path='/'
          element={
            <>
              <Banner></Banner>
              <HomePage></HomePage>
            </>
          }
        ></Route>

        <Route path='movie' element={<MoviePage></MoviePage>}></Route>
        <Route
          path='/movie/:movieId'
          element={<MovieDetails></MovieDetails>}
        ></Route>
      </Route>
    </Routes>
  );
};

export default Routing;
