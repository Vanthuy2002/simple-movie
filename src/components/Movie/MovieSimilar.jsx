import React from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetcher, apiMovie, apiKey } from '../../Api/configApi';
import MovieItem from './MovieItem';

const MovieSimilar = ({ id, typeChange }) => {
  const { data } = useSWR(
    `${apiMovie}/${id}/${typeChange}?api_key=${apiKey}`,
    fetcher
  );

  if (!data) return;
  const { results } = data;

  return (
    <div className='py-10 page-container'>
      <h2 className='mb-10 text-2xl font-medium'>Similar Movies</h2>

      <div className='movie-list'>
        <Swiper grabCursor={true} spaceBetween={20} slidesPerView={4}>
          {results &&
            results.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieItem movie={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

MovieSimilar.propTypes = {
  id: PropTypes.string.isRequired,
  typeChange: PropTypes.string.isRequired,
};

export default MovieSimilar;
