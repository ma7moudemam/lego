import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../Layout/Layout";
import "./Canceled.css";

export default function Canceled() {
	return (
		<>
			<Layout>
				<div className="canceled">
					<h1>😞 Payment Failed 😞</h1>
					<p>Payment was not successful</p>
					<div className="canceled-button">
						<NavLink to="/home">
							<button onClick={() => {}} className="home-button">
								Continue Shopping
							</button>
						</NavLink>
					</div>
				</div>
			</Layout>
		</>
	);
}
