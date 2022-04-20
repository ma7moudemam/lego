import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import "./Success.css";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useSelector } from "react-redux";
// clear cart

export default function Success() {
	//on mount get orders from cart
	// post orders to order collection with user data from token
	// admin will recive the order
	//admin will assign shipper for the order
	// order state is pending
	// shipper will get updated by the order
	//shipper will update (withShipper, isShipped, isDeliverd, isCanceled)
	// user will have get tracker ui
	const cart = useSelector((store) => store.cart);
	const cartProducts = Object.values(cart.products);
	const products = cartProducts.map((product) => {
		return {
			product: Number(product._id),
			quantity: product.quantity,
			unit_price: product.price,
		};
	});
	const location = useLocation();
	const session_id = location.search.split("=")[1];
	const total_price = cart.totalPrice;
	useEffect(() => {
		const user = jwt_decode(localStorage.getItem("token")).user._id;
		console.log("user", user);
		console.log("products", products);
		console.log("total price", total_price);
		axios
			.post("http://localhost:8080/order", { user, products, total_price, session_id })
			.then((res) => console.log("order is added"))
			.catch((err) => console.log(err));
	});

	return (
		<>
			<div className="success">
				<h1>🎉 Thank you for your order 🎉</h1>
				<p>We are currently processing your order and will send you a confirmation email shortly</p>
			</div>
			<div className="success-button">
				<NavLink to="/shop-now">
					<button className="home-button">Continue Shopping</button>
				</NavLink>
			</div>
		</>
	);
}
