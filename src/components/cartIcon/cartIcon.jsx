import React from 'react';
import './cartIcon.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';
import { ReactComponent as ShoppingIcon } from '../../assets/cartIcon/shopping-bag.svg';

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);

  return (
    <div className='cartIcon' onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className='shoppingIcon' />
      <span className='itemCount'>{itemCount}</span>
    </div>
  );
};

export default CartIcon;
