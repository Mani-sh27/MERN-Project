import React from 'react';
import { Link } from 'react-router-dom';

const BannerBox = (props) => {
  return (
    <div className='box bannerBox'>
      <Link to={props.link}>
        <img src={props.img} alt="Banner" />
      </Link>
    </div>
  );
};

export default BannerBox;
