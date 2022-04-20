import React, { useEffect, useState } from "react";
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
import { addToWishList, deleteFromWishList, getWishList } from "../../network/wishListAPI";
export default function Cards({product}) {

  const dispatch = useDispatch()
  const navigate  = useNavigate();
  
  const [fillHeart, setfillHeart] = useState(false);
  const [didMount,setDidMount]=useState(false)

  const [wishList, setWishList] = useState([])
  useEffect(()=> {
    getWishList().then((data) => { 
       let ids = data.data.wishlist.map(p => p._id)
       if(ids.includes(product._id)) 
        {
          setfillHeart(true)
        }
      setWishList(ids)
    });
  },[])

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
      addToWishList(product).then(()=>{
        setWishList((prevState)=>[...prevState,product._id])
      })
    } else {
      navigate('/login')
    } 
  }

  const removeFromWishList = (product) => {
    let token = localStorage.getItem("token");
    if(token) {
      deleteFromWishList(product).then(()=>{
        let newWishlist = wishList.filter(id => id!=product._id);
        setWishList(newWishlist)
      })
     
    } else {
      navigate('/login')
    }
  }

  useEffect(()=>{setDidMount(true)},[])
  useEffect(()=>{
    if(didMount){
      addOrRemove()
    }
    return ()=>{}
  },[fillHeart])

  const toggling = (e) => {
    e.stopPropagation();
    setfillHeart(prevState=>!prevState);
  };

  const addOrRemove = () => {
    if(fillHeart) {
      addWishList(product)
      console.log('ADD PRODUCT ',product);
    } else {
       removeFromWishList(product)
      console.log('REMOVE PRODUCT ',product);
    }
  }
  return (
    <div>
          <div className="card">
            <div className="add-to-wishlist">
              <span onClick={addOrRemove}>
                <i onClick={toggling} className={fillHeart || wishList.includes(product._id) ? "fa fa-heart": "far fa-heart" }
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
