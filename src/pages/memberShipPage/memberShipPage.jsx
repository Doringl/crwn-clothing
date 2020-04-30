import React from 'react';
import './memberShipPage.styles.scss';
import SignIn from '../../components/signIn/signIn';
import SignUp from '../../components/signUp/signUp';

const MemberShipPage = () => (
  <div className='memberShipPage'>
    <SignIn />
    <SignUp />
  </div>
);

export default MemberShipPage;
