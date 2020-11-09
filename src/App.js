import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/header';
import HomePage from './pages/homePage/homePage';
import ShopPage from './pages/shopPage/shopPage';
import MemberShipPage from './pages/memberShipPage/memberShipPage';
import CheckOutPage from './pages/checkOutPage/checkOutPage';
import OrderPage from './pages/orderPage/orderPage';
import { selectCurrentUser } from './redux/user/userSelectors';
import { checkUser } from './redux/user/userActions';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
  }, [dispatch]);
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckOutPage} />
        <Route
          exact
          path='/signIn'
          render={() =>
            currentUser ? <Redirect to='/' /> : <MemberShipPage />
          }
        />
        <Route
          exact
          path='/orders'
          render={() => (currentUser ? <OrderPage /> : <Redirect to='/' />)}
        />
      </Switch>
    </div>
  );
};

export default App;
