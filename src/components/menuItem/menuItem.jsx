import React from 'react';
import './menuItem.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menuItem`}>
      <div
        className='backGroundImage'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='content'>
        <div className='title'>{title.toUpperCase()}</div>
        <span className='subTitle'>Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
