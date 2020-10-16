import React from 'react';
import './App.css';
import Products from './components/Products'
import Filter from './components/Filter'

class App extends React.Component {

  state = {
    products: [],
    filteredProducts: [],
    sort: "",
    size: ""
  }

  componentDidMount = () => {
    fetch("http://localhost:8000/products")
    .then(res => res.json())
    .then(data => this.setState({
      products: data,
      filteredProducts: data
    }))
  }

  handleChangeSort = (e) => {
    (console.log("handleChangeSort"))
    this.setState({sort: e.target.value})
    this.listProducts()
  }

  listProducts = () => {
    (console.log("listProducts", this.state.sort))
    this.setState(state => {
      console.log("setState", state)
      if (state.sort !== ""){
        state.products.sort((a,b) => (state.sort === "lowest") ? 
        (a.price > b.price ? 1 : -1)
        : (a.price < b.price ? 1 : -1) )
      } else {
        state.products.sort((a,b) => (a.id > b.id ? 1 : -1))
      }
      if (state.size !== ""){
        return{ filteredProducts: state.products.filter(a => 
          a.availableSizes.indexOf(state.size.toUpperCase())>=0
          )}
      }
      return {filteredProducts: state.products}
    })
  }

  handleChangeSize = (e) => {
    this.setState({size: e.target.value})
    this.listProducts()
  }

  render() {
    return (
      <div className="container">
        <h1>Ecommerce Shopping Cart Application</h1>
        <br />
        <div className="row">
            <div className="col-md-9">
              <Filter size={this.state.size} sort={this.state.sort} handleChangeSize={this.handleChangeSize} handleChangeSort={this.handleChangeSort} count={this.state.filteredProducts.length} />
              <hr />
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
