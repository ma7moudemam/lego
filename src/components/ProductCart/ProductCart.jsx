import React from 'react'
import './ProductCart.css'
import ProductImg from '../../assets/imgs/Valentine Lovebirds.jpg'
import { Link } from 'react-router-dom'

function ProductCart() {
  return (
    <div>
        <div className="product-cart">
        <div class="box">
                <div class="cardImage">
                    <a className="wish" href="#"> <i class="fas fa-heart"></i> Add to wish List</a>
                    <img src={ProductImg} alt=""/>
                    <p class="new">New</p>
                </div>
                <Link className='title' to="#">Valentine Lovebirds</Link>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <p class="price">$12.99</p>
                <input type="button" value="Add to Bag"/>
            </div>
        </div>
    </div>
  )
}

export default ProductCart