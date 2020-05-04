import React from 'react';
import './collectionPreview.styles.scss';
import CollectionItem from '../collectionItem/collectionItem';

const CollectionPreview = ({ title, items }) => (
  <div className='collectionPreview'>
    <h1 className='title'>{title}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
