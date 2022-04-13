import React from "react";
import Layout from "../Layout/Layout";
import StripeCheckout from "./stripe-checkout/stripe-checkout";
import "./Checkout.css";

export default function Checkout() {
	// comes from the cart redux
	const { itemCount, total } = { itemCount: 3, total: 20 };
	return (
		<Layout>
			<div className="checkout">
				<h2>Checkout Summary</h2>
				<h3>{`Total Items: ${itemCount}`}</h3>
				<h4>{`Amount to Pay: EGP${total}`}</h4>
				<StripeCheckout />
			</div>
		</Layout>
	);
}
