import React from 'react';
import './checkOutPage.styles.scss';
import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cartSelectors';
import CheckOutItem from '../../components/checkOutItem/checkOutItem';
import StripeButton from '../../components/stripeButton/stripeButton';

const CheckOutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  return (
    <div className='checkOutPage'>
      <div className='checkOutHeader'>
        <div className='headerBlock'>
          <span>Product</span>
        </div>
        <div className='headerBlock'>
          <span>Description</span>
        </div>
        <div className='headerBlock'>
          <span>Quantity</span>
        </div>
        <div className='headerBlock'>
          <span>Price</span>
        </div>
        <div className='headerBlock'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>Total: ${total}</div>
      <div className='testWarning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
      </div>
      <StripeButton price={total} cartItems={cartItems} />
    </div>
  );
};

export default CheckOutPage;
