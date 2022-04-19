import { Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getWishList } from "../../../network/wishListAPI";
import Style from "./general.module.css";
import { addToBag } from "../../../Redux/Actions/cartActions";
import { useNavigate } from "react-router-dom";

export default function General() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    getWishList().then((data) => setWishList(data.data.wishlist));
  }, []);

  const addItems = () => {
    let token = localStorage.getItem("token");
    if (token) {
      wishList.forEach(p => dispatch(addToBag({ ...p })))
      // dispatch(addToBag({ ...wishList }));
    } else {
      navigate("/login");
    }
  };

  const calaculateTotal = () => {
    let result = 0;
    wishList.forEach(p => result+= p.price )
    return result;
  }
  return (
    <div>
      <div className={Style["wish-general"]}>
        <div className={Style["wish-general-info"]}>
          <Link href="#" className={Style.link}>
            <span>WishList </span>
            {wishList?.length > 0 && wishList?.product?.length}
          </Link>
          <div className={Style["general-content"]}>
            <div className={Style["items-contatiner"]} style={{display:"flex"}}>
              {wishList.length > 0 &&
                wishList.slice(0, 2).map((product) => (
                  <img
                    src={`http://localhost:8080/images/${product?.images?.[0]}`}
                    className={Style["card-img"]}
                  />
                ))}
                {wishList.length > 2 &&
              <div className={Style["remaing-count"]}>
                  +{wishList.length - 2} 
              </div>
              }
            </div>
            <div className={Style["content-btn"]}>
              <div className={Style.breakline}></div>
              <button
                className={Style["addtobag-btn"]}
                onClick={() => addItems()}
                style={{cursor:wishList.length > 0 ? "pointer" : "not-allowed"}}
              >
                Add all to Bag
              </button>
            </div>
          </div>
          <div className={Style["content-info"]}>
              {/* <span className={Style["wish-general-date"]}>Last updated: 1/28/2022</span> */}
              <span className={Style["wish-general-cost"]}>
                Total cost: {wishList?.length > 0 ? calaculateTotal() : "0.00" }
              </span>
            </div>
        </div>
      </div>
    </div>
  );
}
