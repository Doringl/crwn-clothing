import React from 'react';
import './App.css';
import Header from './components/header/header';
import HomePage from './pages/homePage/homePage';
import ShopPage from './pages/shopPage/shopPage';
import MemberShipPage from './pages/memberShipPage/memberShipPage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signIn' component={MemberShipPage} />
      </Switch>
    </div>
  );
}

export default App;
