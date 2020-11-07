import React from 'react';
import { useDispatch } from 'react-redux';
import './signIn.styles.scss';
import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/userActions';
import { useForm } from '../../hooks/useForm';

const SignIn = () => {
  const dispatch = useDispatch();
  const [values, handleChange] = useForm({ email: '', password: '' });
  const { email, password } = values;
  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(emailSignInStart({ email, password }));
  };

  return (
    <div className='signIn'>
      <h2>I already have an account</h2>
      <span className='title'>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          handleChange={handleChange}
          value={password}
          label='password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton
            type='button'
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
