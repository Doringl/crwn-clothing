import React from 'react';
import './checkOutItem.styles.scss';

const CheckOutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className='checkOutItem'>
    <div className='imageContainer'>
      <img src={imageUrl} alt='items' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>{quantity}</span>
    <span className='price'>{price}</span>
    <div className='removeButton'>&#10005;</div>
  </div>
);

export default CheckOutItem;
