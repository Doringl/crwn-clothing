import React from 'react';
import './menuItem.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={`${size} menuItem`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(MenuItem);
