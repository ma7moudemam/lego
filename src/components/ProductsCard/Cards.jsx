import React, { useState } from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import CardImg from "../../assets/imgs/1.jpg";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import { postProductRating } from "../../network/productsAPIs";
//REDUX
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';

import {addToBag} from '../../Redux/Actions/cartActions'
import { addToWishList } from "../../network/wishListAPI";
export default function Cards({product}) {

  const dispatch = useDispatch()
  const navigate  = useNavigate()
  const ratingChanged = (newRating) => {
  postProductRating(newRating, product._id).then(res => console.log(res))
  };

  const addItem = () => {
    let token = localStorage.getItem("token");
    if(token) {
      
    dispatch(addToBag({...product}))
    } else {
      navigate('/login')
    }
  }

  const addWishList = (product) => {
    let token = localStorage.getItem("token");
    if(token) {
      addToWishList(product).then(data => console.log(data))
    } else {
      navigate('/login')
    } 
  }
  const [fillHeart, setfillHeart] = useState("");

  const toggling = () => {
    setfillHeart(!fillHeart);
  };
  return (
    <div>
          <div className="card">
            <div className="add-to-wishlist">
              <span onClick={() => addWishList(product)}>
                <i onClick={toggling} className={fillHeart ? "fa fa-heart": "far fa-heart" }
                // className="fa fa-heart"
                 >
                </i>
              </span>
              <span>Add to wish list</span>
            </div>
            <div className="image-contatiner" style={{width: "100%",overflow: "hidden"}}>
              <img src={`http://localhost:8080/images/${product?.images?.[0]}`} className="card-img" />
            </div>
            {/* <div className="new-item">new</div> */}
            <div className="card-name">
              <p>
                <a href="#">{product.name}</a>
              </p>
            </div>
            <span>
              {/* <i className="fas fa-star"></i> */}
                  <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                  value={product.rating ? product.rating : 0}
                />
            </span>
            <div className="card-price">${product.price}</div>
            <button className="card-button-exist" onClick={()=> addItem()}>
              <div>Add to Bag</div>
            </button>
          </div>
    </div>
  );
}
