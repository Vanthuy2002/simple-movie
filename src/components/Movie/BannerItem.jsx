import React from 'react';
import PropsType from 'prop-types';
import { pathImg } from '../../Api/configApi';
import { useNavigate } from 'react-router-dom';
import Button from '../../Layout/Button';

const BannerItem = ({ item }) => {
  const navigate = useNavigate();
  const handleURL = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className='relative w-full h-full'>
      <div className='overlay'></div>
      <img
        src={`${pathImg}/${item?.poster_path}`}
        alt=''
        className='object-cover w-full h-full rounded-lg'
      />
      <div className='absolute w-full left-5 bottom-5'>
        <h2 className='mb-3 text-2xl font-bold text-white'>{item?.title}</h2>
        <div className='flex items-center text-white gap-x-3'>
          <span className='px-4 py-2 border border-white rounded-md'>
            Drama
          </span>
          <span className='px-4 py-2 border border-white rounded-md'>
            Action
          </span>
        </div>
        <Button
          classCSS={`max-w-[100px] mt-5`}
          cliked={() => handleURL(item.id)}
        >
          Watch
        </Button>
      </div>
    </div>
  );
};
BannerItem.propTypes = {
  item: PropsType.object,
};

export default BannerItem;
