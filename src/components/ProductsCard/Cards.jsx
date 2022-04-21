import React, { useEffect, useState } from "react";
import { postProductRating } from "../../network/productsAPIs";
//REDUX
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addToBag } from "../../Redux/Actions/cartActions";
import { addToWishList, deleteFromWishList, getWishList } from "../../network/wishListAPI";
import ReviewStars from "../ReviewStars/ReviewStars";

export default function Cards({ product, wishList }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [fillHeart, setfillHeart] = useState(false);
	const [didMount, setDidMount] = useState(false);

	const addItem = () => {
		let token = localStorage.getItem("token");
		if (token) {
			dispatch(addToBag({ ...product }));
		} else {
			navigate("/login");
		}
	};

	const addWishList = (product) => {
		let token = localStorage.getItem("token");
		if (token) {
			addToWishList(product).then(() => {
				// setWishList((prevState) => [...prevState, product._id]);
			});
		} else {
			navigate("/login");
		}
	};

	const removeFromWishList = (product) => {
		let token = localStorage.getItem("token");
		if (token) {
			deleteFromWishList(product).then(() => {
				//let newWishlist = wishList.filter((id) => id != product._id);
				// setWishList(newWishlist);
			});
		} else {
			navigate("/login");
		}
	};

	useEffect(() => {
		setDidMount(true);
		return () => {};
	});
	useEffect(() => {
		if (didMount) {
			addOrRemove();
		}
		return () => {};
	}, [fillHeart]);

	const toggling = (e) => {
		e.stopPropagation();
		setfillHeart((prevState) => !prevState);
	};

	const addOrRemove = () => {
		if (fillHeart) {
			addWishList(product);
		} else {
			removeFromWishList(product);
		}
	};
	return (
		<div>
			<div className="card">
				<div className="add-to-wishlist">
					<span>
						<i
							onClick={toggling}
							className={fillHeart || wishList.includes(product._id) ? "fa fa-heart" : "far fa-heart"}
						></i>
					</span>
					<span>Add to wish list</span>
				</div>
				<div className="image-container" style={{ width: "100%", overflow: "hidden" }}>
					<img
						alt=""
						src={`http://localhost:8080/images/${product?.images?.[0]}`}
						className="product-card-img"
					/>
				</div>
				{/* <div className="new-item">new</div> */}
				<div className="card-name">
					<p>
						<span href="#">{product.name}</span>
					</p>
				</div>
				<span>
					{/* <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                  value={product.rating ? product.rating : 0}
                /> */}
					<ReviewStars count={product.rating} />
				</span>
				<div className="card-price">{product.price} EGP</div>
				<button className="card-button-exist" onClick={() => addItem()}>
					Add to Bag
				</button>
			</div>
		</div>
	);
}
