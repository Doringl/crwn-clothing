import React from 'react';
import './cartDropdown.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { useHistory } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import CartItem from '../cartItem/cartItem';
import CustomButton from '../customButton/customButton';

const CartDropdown = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  return (
    <div className='cartDropdown'>
      <div className='cartItems'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='emptyMessage'>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
