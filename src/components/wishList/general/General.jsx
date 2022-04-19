import { Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getWishList } from "../../../network/wishListAPI";
import Style from "./general.module.css";
import {addToBag} from '../../../Redux/Actions/cartActions'
import { useNavigate } from "react-router-dom";


export default function General() {

  const navigate  = useNavigate()
  const dispatch = useDispatch()
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    getWishList().then(data => setWishList(data.data.wishlist))

  },[])

  const addItems = () => {
    let token = localStorage.getItem("token");
    if(token) {
      
    dispatch(addToBag({...wishList}))
    } else {
      navigate('/login')
    }
  }


  return (
    <div>
      <div className={Style["wish-general"]}>
        <div className={Style["wish-general-info"]}>
          <Link href="#" className={Style.link}>
            <span>WishList ({
               wishList.length > 0 &&
               wishList.product.length}
              )</span>
          </Link>
          <div className={Style["general-content"]}>
            <div className={Style["content-info"]}>
              {/* <span className={Style["wish-general-date"]}>Last updated: 1/28/2022</span> */}
              <span className={Style["wish-general-cost"]}>Total cost: {
                 wishList.length > 0 &&
                 wishList.map((product ) => {product?.price?.toFixed(2) })
              }</span>
            </div>
             {
               wishList.length > 0 &&
               wishList.map(product => <img src={`http://localhost:8080/images/${product?.images?.[0]}`} className={Style['card-img']}/>)
             }
            <div className={Style["content-btn"]}>
              <div className={Style.breakline}></div>
              <button className={Style["addtobag-btn"]}  onClick={()=> addItems()}>
                Add all to Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
