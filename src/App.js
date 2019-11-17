import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Navbar from './containers/Navbar';
import Home from './containers/Home';
import Cart from './containers/Cart';
import Wishlist from './containers/Wishlist';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/wishlist" component={Wishlist} />
    </div>
  );
}

export default App;
