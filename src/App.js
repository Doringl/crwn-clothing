import React from 'react';
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
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { checkUser } = this.props;
    checkUser();
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
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
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUser: () => dispatch(checkUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
