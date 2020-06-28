import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'font-awesome/css/font-awesome.min.css';

import './index.css';

import HeaderComponent from './components/header';

import HomePage from './pages/home';
import ShopPage from './pages/shop';
import SingleProductPage from './pages/single-product';
import CartPage from './pages/cart';
import CheckoutPage from './pages/checkout';
import PageNotFound from './pages/page-not-found';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/product/:id" component={SingleProductPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
