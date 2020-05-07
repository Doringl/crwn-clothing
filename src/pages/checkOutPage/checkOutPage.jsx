import React from 'react';
import './checkOutPage.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cartSelectors';
import CheckOutItem from '../../components/checkOutItem/checkOutItem';

const CheckOutPage = ({ cartItems, total }) => (
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
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
