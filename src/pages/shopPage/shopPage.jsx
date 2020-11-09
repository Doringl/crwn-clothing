import React, { useEffect } from 'react';
import CollectionsOverviewContainer from '../../components/collectionsOverview/collectionsOverviewContainer';
import CollectionPageContainer from '../collectionPage/collectionPageContainer';
import { Route, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shopActions';

const ShopPage = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className='shopPage'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export default ShopPage;
