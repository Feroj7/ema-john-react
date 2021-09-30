import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    const {name,img,price,seller,stock,star} = props.product;
    return (
        <div className="product">
            <div className="img-area">
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <Rating
                readonly
                initialRating={star}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                className="icon"
                ></Rating>
                <br />
                <button 
                onClick={() => props.handleAddToCart(props.product)}
                className="purchase-btn"
                ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;