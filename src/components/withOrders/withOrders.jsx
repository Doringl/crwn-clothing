import React from 'react';

const WithOrders = (WrappedComponent) => {
  const Orders = ({ withOrders, cartItem, ...otherProps }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return withOrders ? (
      <div className='checkOutItem'>
        <div className='imageContainer'>
          <img src={imageUrl} alt='items' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
          <span className='value'>{quantity}</span>
        </span>
        <span className='price'>{price}</span>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Orders;
};

export default WithOrders;
