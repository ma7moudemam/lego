import React, { useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { fetchFromAPI } from "../../../helpers";
// import cart redux

export default function StripeCheckout() {
	const [email, setEmail] = useState("");
	const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
	// this comes from cart redux
	const cartItems = [
		{
			quantity: 1,
			price: 2000,
			title: "Kems",
			description: "light as air",
			images: [
				"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			],
		},
	];
	const stripe = useStripe();
	const handleCheckout = async (e) => {
		e.preventDefault();
		const line_items = cartItems.map((item) => {
			return {
				quantity: item.quantity,
				price_data: {
					currency: "egp",
					unit_amount: item.price * 100,
					product_data: {
						name: item.title,
						description: item.description,
						images: item.images, // array of images
					},
				},
			};
		});
		const response = await fetchFromAPI("create-checkout-session", {
			body: { line_items, customer_email: email },
		});
		const { sessionId } = response;
		const { error } = await stripe.redirectToCheckout({
			sessionId,
		});
		if (error) {
			console.log(error);
			// show user an error
		}
	};
	return (
		<form onSubmit={handleCheckout}>
			<div>
				<input
					type="email"
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
					value={email}
					className="stripe-email-input"
				/>
				{!emailPattern.test(email) && email !== "" && <p className="error">Enter a Valid Email Address</p>}
			</div>
			<div className="submit-button">
				<button type="submit" className="button checkout-button">
					Checkout
				</button>
			</div>
		</form>
	);
}