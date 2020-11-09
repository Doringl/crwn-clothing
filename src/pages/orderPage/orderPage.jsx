import React from 'react';
import './orderPage.styles.scss';
import WithOrders from '../../components/withOrders/withOrders';
import CheckOutItem from '../../components/checkOutItem/checkOutItem';
import { useSelector } from 'react-redux';
import { selectUserOrders } from '../../redux/user/userSelectors';

const CheckOutItemWithOrders = WithOrders(CheckOutItem);

const OrderPage = () => {
  const userOrders = useSelector(selectUserOrders);
  return (
    <div className='orderPage'>
      <h2 className='title'>Order Summary</h2>
      <div className='orderHeader'>
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
          <span></span>
        </div>
      </div>
      {userOrders
        ? userOrders.map((orders) => (
            <CheckOutItemWithOrders
              key={orders.id}
              cartItem={orders}
              withOrders={true}
            />
          ))
        : []}
    </div>
  );
};

export default OrderPage;
