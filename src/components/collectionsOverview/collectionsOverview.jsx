import React from 'react';
import './collectionsOverview.styles.scss';
import CollectionPreview from '../collectionPreview/collectionPreview';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';

const CollectionsOverview = ({ collections }) => (
  <div className='collectionsOverview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
