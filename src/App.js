import React from 'react';
import './App.css';

import HomePage from './components/HomePage'
import ProductsContainer from './ProductsContainer'
import ProductPage from './components/ProductPage'

import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {


  render() {
    return (
      <div className="container">
        <h1>Ecommerce Shopping Cart Application</h1>
        <br />
        <BrowserRouter>
        
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={ProductsContainer} />
        <Route exact path="/product/:id" render={props => ( <ProductPage { ...props } id={this.state} />  )} />
        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
