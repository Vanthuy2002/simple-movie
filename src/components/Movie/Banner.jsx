import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWR from 'swr';
import { fetcher, apiMovie, apiKey, type } from '../../Api/configApi';
import BannerItem from './BannerItem';
import 'swiper/css/autoplay';

const Banner = () => {
  const { data } = useSWR(
    `${apiMovie}/${type.upcoming}?api_key=${apiKey}`,
    fetcher
  );

  const movies = data?.results;

  return (
    <section className='banner h-[400px] page-container mb-10 bg-white rounded-lg'>
      <Swiper grabCursor={true} slidesPerView={true}>
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <BannerItem item={movie}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Banner;
