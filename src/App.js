import React from 'react';
import './App.css';
import Products from './components/Products'

function App() {
  return (
    <div className="container">
      <h1>Ecommerce Shopping Cart Application</h1>
      <br />
      <div className="row">
        <div className="col-md-8">
          <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />
        </div>
        <div className="col-md-4">

        </div>
      </div>
    </div>
  );
}

export default App;
