import React from 'react';
import './cartDropdown.styles.scss';
import CustomButton from '../customButton/customButton';

const CartDropdown = () => (
  <div className='cartDropdown'>
    <div className='cartItems' />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
