import React from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/logo/crwnLogo.svg';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className='header'>
    <Link className='logoContainer' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
