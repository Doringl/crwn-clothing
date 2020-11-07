import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../redux/cart/cartActions';
import { useHistory } from 'react-router-dom';
import { updateDocument } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/userSelectors';

const StripeButton = ({ cartItems, price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_KaKg3oAYnehnQlbExEoiVAst0025Z5kQh1';

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const onToken = (token) => {
    alert(`Payment succesfull dear ${token.card.name}`);
    updateDocument(currentUser, cartItems);
    dispatch(clearCart());
    history.push('/orders');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Crown Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
