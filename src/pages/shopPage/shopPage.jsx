import React from 'react';
import CollectionsOverview from '../../components/collectionsOverview/collectionsOverview';
import CollectionPage from '../collectionPage/collectionPage';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shopActions';
import {
  fireStore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import WithSpinner from '../../components/withSpinner/withSpinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unSubscribeFromSnapshot = null;
  componentDidMount() {
    const collectionRef = fireStore.collection('collections');
    const { updateCollections } = this.props;
    collectionRef.onSnapshot(async (snapShot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapShot);
      updateCollections(collectionMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shopPage'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
