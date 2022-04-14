import { useState } from "react";
import { Link } from "react-router-dom";
import bag from "../../assets/imgs/40527 (1).png";
import bagTwo from "../../assets/imgs/10297.png";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Promo() {
	const [product, setProduct] = useState({
		name: "Product",
		price: 10,
		ammount: 3,
	});
	const makePayment = (token) => {
		const body = {
			token,
			product,
		};
		const headers = {
			"Content-Type": "application/json",
		};
		return axios
			.post("http://localhost:8080/payment", { body, headers })
			.then((res) => console.log("successfull"))
			.catch((err) => console.log(err));
	};
	return (
		<div className="col-12 col-md-4">
			<div className="bg-white p-3">
				<p className="border-bottom fs-3">Order Summary</p>

				<div className="py-3">
					<div className="d-flex justify-content-between">
						<p className="fs-5">Order value (3) items</p>
						<p className="fs-5">$399.98</p>
					</div>
					<div className="d-flex justify-content-between">
						<p className="fs-5">Shipping cost</p>
						<p className="fs-5">$399.98</p>
					</div>
					<div className="d-flex justify-content-between">
						<p className="fs-5">Order Total</p>
						<p className="fs-5">$399.98</p>
					</div>
					<button type="button" class="btn btn-warning w-100">
						<NavLink className="btn btn-warning w-100" to="/checkout">
							Checkout Securely
						</NavLink>
					</button>
				</div>
			</div>
		</div>
	);
}
