import React from 'react';
import './collectionPreview.styles.scss';
import CollectionItem from '../collectionItem/collectionItem';
import { withRouter } from 'react-router-dom';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <div className='collectionPreview'>
    <h1
      className='title'
      onClick={() => history.push(`${match.path}/${routeName}`)}
    >
      {title.toUpperCase()}
    </h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
