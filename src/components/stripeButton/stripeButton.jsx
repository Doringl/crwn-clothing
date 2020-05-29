import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { clearAllItem } from '../../redux/cart/cartActions';
import { withRouter } from 'react-router-dom';
import { updateDocument } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/userSelectors';

const StripeButton = ({
  currentUser,
  cartItems,
  price,
  clearAllItem,
  history,
}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_KaKg3oAYnehnQlbExEoiVAst0025Z5kQh1';

  const onToken = (token) => {
    alert(`Payment succesfull dear ${token.card.name}`);
    updateDocument(currentUser, cartItems);
    clearAllItem();
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  clearAllItem: () => dispatch(clearAllItem()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StripeButton)
);
