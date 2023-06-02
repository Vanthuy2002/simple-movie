import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { SwiperSlide, Swiper } from 'swiper/react';
import MovieItem from './MovieItem';
import 'swiper/css';
import { fetcher, apiMovie, apiKey } from '../../Api/configApi';

const type = {
  now: 'now_playing',
  rated: 'top_rated',
  popular: 'popular',
};

const MovieList = () => {
  const [movie, setMovie] = useState([]);
  const { data } = useSWR(`${apiMovie}/${type.now}?api_key=${apiKey}`, fetcher);

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

export default MovieList;
