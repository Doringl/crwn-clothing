import React, { useEffect } from 'react';
import CollectionsOverview from '../../components/collectionsOverview/collectionsOverview';
import CollectionPage from '../collectionPage/collectionPage';
import { Route, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shopActions';
import WithSpinner from '../../components/withSpinner/withSpinner';
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from '../../redux/shop/shopSelectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = () => {
  const collectionsOverviewIsLoading = useSelector(selectIsCollectionFetching);
  const collectionPageIsLoading = useSelector(selectIsCollectionsLoaded);
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
        render={(props) => (
          <CollectionsOverviewWithSpinner
            isLoading={collectionsOverviewIsLoading}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner
            isLoading={!collectionPageIsLoading}
            {...props}
          />
        )}
      />
    </div>
  );
};

export default ShopPage;
