import React from 'react';
import './menuItem.styles.scss';
import { useHistory, useRouteMatch } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();
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

export default MenuItem;
