import UserActionTypes from './userTypes';

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const SignInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const SignInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const checkUser = () => ({
  type: UserActionTypes.CHECK_USER,
});

export const SignOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const SignOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const SignOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const SignUpStart = (data) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: data,
});

export const SignUpSuccess = () => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
});

export const SignUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});
