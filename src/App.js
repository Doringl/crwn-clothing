import React from 'react';
import './App.css';
import Header from './components/header/header';
import HomePage from './pages/homePage/homePage';
import ShopPage from './pages/shopPage/shopPage';
import MemberShipPage from './pages/memberShipPage/memberShipPage';
import { auth } from './firebase/firebase.utils';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signIn' component={MemberShipPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
