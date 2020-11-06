import React from 'react';
import './header.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartHidden,
  selectDropDownHidden,
} from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import { ReactComponent as Logo } from '../../assets/logo/crwnLogo.svg';
import { Link } from 'react-router-dom';
import CardIcon from '../cartIcon/cartIcon';
import CartDropdown from '../cartDropdown/cartDropdown';
import { toggleDropDownHidden } from '../../redux/cart/cartActions';
import { SignOutStart } from '../../redux/user/userActions';

const Header = () => {
  const hidden = useSelector(selectCartHidden);
  const currentUser = useSelector(selectCurrentUser);
  const dropDownHidden = useSelector(selectDropDownHidden);
  const dispatch = useDispatch();
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
          <div
            className='dropdown'
            onClick={() => dispatch(toggleDropDownHidden())}
          >
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
                <Link to={'/orders'}>Order Summary</Link>
              </div>
              <div className='option' onClick={() => dispatch(SignOutStart())}>
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

export default Header;
