import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Layout/Main';
import Banner from '../components/Movie/Banner';
import LoadingSearch from '../components/Effect/Loading';

const HomePage = lazy(() => import('../Pages/Home'));
const MoviePage = lazy(() => import('../Pages/MoviePage'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));

const Routing = () => {
  return (
    <Suspense fallback={<LoadingSearch isCenter={true}></LoadingSearch>}>
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
    </Suspense>
  );
};

export default Routing;
