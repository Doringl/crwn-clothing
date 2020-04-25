import React from 'react';
import './App.css';
import HomePage from './pages/homePage/homePage';
import ShopPage from './pages/shopPage/shopPage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
