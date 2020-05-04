import React from 'react';
import './cartDropdown.styles.scss';
import { connect } from 'react-redux';
import CartItem from '../cartItem/cartItem';
import CustomButton from '../customButton/customButton';

const CartDropdown = ({ cartItems }) => (
  <div className='cartDropdown'>
    <div className='cartItems'>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });

export default connect(mapStateToProps)(CartDropdown);
