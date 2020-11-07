import React from 'react';
import './signUp.styles.scss';
import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';
import { SignUpStart } from '../../redux/user/userActions';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';

const SignUp = () => {
  const dispatch = useDispatch();
  const [values, handleChange] = useForm({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { displayName, email, password, confirmPassword } = values;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert(`passwords don't match`);
      return;
    }

    dispatch(SignUpStart({ displayName, email, password }));
  };

  return (
    <div className='signUp'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='signUpForm' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
