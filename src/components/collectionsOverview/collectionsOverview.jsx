import React from 'react';
import './collectionsOverview.styles.scss';
import CollectionPreview from '../collectionPreview/collectionPreview';
import { useSelector } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);
  return (
    <div className='collectionsOverview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
