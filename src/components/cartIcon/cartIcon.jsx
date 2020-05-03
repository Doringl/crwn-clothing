import React from 'react';
import './cartIcon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { ReactComponent as ShoppingIcon } from '../../assets/cartIcon/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden }) => (
  <div className='cartIcon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shoppingIcon' />
    <span className='itemCount'>0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
