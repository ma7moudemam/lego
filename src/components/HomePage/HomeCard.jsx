import React from "react";
import { NavLink } from "react-router-dom";
import "./HomePage.css";
export default function HomeCard({ product }) {
	return (
		<div style={{ width: "25%" }}>
			<div className="card-1">
				<div className="main-image">
					<img src={`http://localhost:8080/images/${product.images[0]}`} alt={product.name} />
				</div>
				<div className="text-container">
					<h4>{product.name}</h4>
					<div className="shop">
						<NavLink to="/shop-now">
							Shop Now
							<i className="fas fa-angle-right"></i>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}
