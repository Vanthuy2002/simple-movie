import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SwiperSlide, Swiper } from 'swiper/react';
import MovieItem from './MovieItem';
import useSWR from 'swr';
import { fetcher, apiMovie, apiKey } from '../../Api/configApi';

const MovieList = ({ type }) => {
  const [movie, setMovie] = useState([]);
  const { data } = useSWR(`${apiMovie}/${type}?api_key=${apiKey}`, fetcher);

  useEffect(() => {
    if (data && data.results) {
      setMovie(data.results);
    }
  }, [data]);

  return (
    <div className='movie-list'>
      <Swiper grabCursor={true} spaceBetween={20} slidesPerView={4}>
        {movie &&
          movie.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieItem movie={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  type: PropTypes.string,
};

export default MovieList;
