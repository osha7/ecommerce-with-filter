import React from 'react'
// import util from '../util'
import {Link} from 'react-router-dom'

class Product extends React.Component {
    render() {
        console.log(this.props.products)
        const productItems = this.props.products.map(product => (
            <div className="col-md-4" key={product.id}>
                <div className="thumbnail text-center">
                    <Link to={'/product/' + product.id} >
                    {/* <a href={`#${product.id}`} onClick={(e)=>this.props.handleAddToCart(e, product)} > */}
                    <img src={`./products/${product.sku}_2.jpg`} alt={product.title} />
                    <p>{product.title}</p>
                    {/* </a> */}
                    </Link>
                    <div>
                        <b>${product.price.toFixed(2)}</b><br />
                        {/* <b>{util.formatCurrency(product.price)}</b><br /> */}
                        <button className="btn btn-primary"
                        onClick={(e)=>this.props.handleAddToCart(e, product)}>Add To Cart</button>
                    </div>
                </div>
            </div>
        ))
        return(
            <div className="row">
                {productItems}
            </div>
        )
    }
}
export default Product;

