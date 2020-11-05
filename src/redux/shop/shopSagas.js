import { call, put, takeLatest, all } from 'redux-saga/effects';
import ShopActionTypes from './shopTypes';
import {
  fireStore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFail } from './shopActions';

function* fetchCollectionsAsync() {
  try {
    const collectionRef = yield fireStore.collection('collections');
    const snapShot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapShot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFail(error.message));
  }
}

function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTİONS_START,
    fetchCollectionsAsync
  );
}

function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}

export default shopSagas;
