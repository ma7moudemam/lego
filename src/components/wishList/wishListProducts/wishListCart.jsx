import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { deleteFromWishList } from '../../../network/wishListAPI';
import './WishListCart.css'

function WishListCart({product}) {

  const navigate = useNavigate();
  const [wishList, setWishList] = useState([]);

  const removeFromWishList = (product) => {
		let token = localStorage.getItem("token");
		if (token) {
			deleteFromWishList(product).then(() => {
				let newWishlist = wishList.filter((id) => id != product._id);
				setWishList(newWishlist);
        console.log(newWishlist)
			});
		} else {
			navigate("/login");
		}
	};
  return (
    <>
         <div className="product-cart">
        <div className="box">
          <div className="cardImage">
              <i className="fas fa-trash" onClick={removeFromWishList }></i>
            
            <img
              src={`http://localhost:8080/images/${product.images[0]}`}
              alt={product.name}
            />
            <p className="new">New</p>
          </div>
          <Link className="product-title" to="#">
            {product.name}
          </Link>
          <div className="stars">
            {/* <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i> */}
          </div>
          <p className="price">{product.price} EGP</p>
          <input type="button" value="Add to Bag" />
        </div>
      </div>
    </>
  )
}

export default WishListCart