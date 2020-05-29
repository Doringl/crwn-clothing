import React from 'react';
import './header.styles.scss';
import { connect } from 'react-redux';
import {
  selectCartHidden,
  selectDropDownHidden,
} from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/logo/crwnLogo.svg';
import { auth } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';
import CardIcon from '../cartIcon/cartIcon';
import CartDropdown from '../cartDropdown/cartDropdown';
import { toggleDropDownHidden } from '../../redux/cart/cartActions';

const Header = ({
  currentUser,
  hidden,
  dropDownHidden,
  toggleDropDownHidden,
}) => {
  return (
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
          <div className='dropdown' onClick={toggleDropDownHidden}>
            <div className='option'>
              {currentUser.displayName
                ? currentUser.displayName.search(' ') !== -1
                  ? currentUser.displayName
                      .split(' ')
                      .slice(0, 1)
                      .join(' ')
                      .toUpperCase()
                  : currentUser.displayName.toUpperCase()
                : null}
            </div>
            <div className={`${dropDownHidden ? '' : 'show'} dropdownContent`}>
              <div className='option'>
                <Link to={'/orders'}>My Orders</Link>
              </div>
              <div className='option' onClick={() => auth.signOut()}>
                Sign Out
              </div>
            </div>
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
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  dropDownHidden: selectDropDownHidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDropDownHidden: () => dispatch(toggleDropDownHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
