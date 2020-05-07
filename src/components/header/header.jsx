import React from 'react';
import './header.styles.scss';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/logo/crwnLogo.svg';
import { auth } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';
import CardIcon from '../cartIcon/cartIcon';
import CartDropdown from '../cartDropdown/cartDropdown';

const Header = ({ currentUser, hidden }) => (
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
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to={'/signIn'}>
          SIGN IN
        </Link>
      )}
      <CardIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
