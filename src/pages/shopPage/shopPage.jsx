import React from 'react';
import CollectionsOverview from '../../components/collectionsOverview/collectionsOverview';
import CollectionPage from '../collectionPage/collectionPage';
import { Route } from 'react-router-dom';

const ShopPage = ({ match }) => (
  <div className='shopPage'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
