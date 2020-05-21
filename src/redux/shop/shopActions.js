import ShopActionTypes from './shopTypes';
import {
  fireStore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTİONS_START,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = fireStore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapShot) => {
        const collectionMap = convertCollectionsSnapshotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(collectionMap));
      })
      .catch((error) => dispatch(fetchCollectionsFail(error.message)));
  };
};

export const fetchCollectionsSuccess = (collectionMap) => ({
  type: ShopActionTypes.FETCH_COLLECTİONS_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionsFail = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTİONS_FAIL,
  payload: errorMessage,
});
