import React from 'react';
import './App.css';
import Products from './components/Products'

class App extends React.Component {

  state = {
    products: [],
    filteredProducts: []
  }

  componentDidMount = () => {
    fetch("http://localhost:8000/products")
    .then(res => res.json())
    .then(data => this.setState({
      products: data,
      filteredProducts: data
    }))
  }
  render() {
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
}

export default App;
