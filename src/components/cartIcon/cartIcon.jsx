import React from 'react';
import './cartIcon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';
import { ReactComponent as ShoppingIcon } from '../../assets/cartIcon/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cartIcon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shoppingIcon' />
    <span className='itemCount'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
