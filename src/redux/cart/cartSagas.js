import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from '../user/userTypes';
import { clearCart } from './cartActions';

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export default function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
