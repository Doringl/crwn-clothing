import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from './userTypes';
import {
  SignInSuccess,
  SignInFailure,
  SignOutFailure,
  SignOutSuccess,
  SignUpFailure,
  SignUpSuccess,
} from './userActions';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/firebase.utils';

function* getSnapshot(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(SignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshot(user);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshot(user);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshot(userAuth);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

function* SignOut() {
  try {
    yield auth.signOut();
    yield put(SignOutSuccess());
  } catch (error) {
    yield put(SignOutFailure(error));
  }
}

function* SignUp({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield getSnapshot(user, { displayName });
    yield put(SignUpSuccess());
  } catch (error) {
    yield put(SignUpFailure(error));
  }
}

function* onEmailAndPasswordSignIn() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* onGoogleSignIn() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onCheckUser() {
  yield takeLatest(UserActionTypes.CHECK_USER, isUserAuthenticated);
}

function* onSignOut() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, SignOut);
}

function* onSignUp() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, SignUp);
}

function* userSagas() {
  yield all([
    call(onGoogleSignIn),
    call(onEmailAndPasswordSignIn),
    call(onCheckUser),
    call(onSignOut),
    call(onSignUp),
  ]);
}

export default userSagas;
