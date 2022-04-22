import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProductDetailsById } from "../../network/productsAPIs";
import SwiperSlider from "../SwiperSlider/SwiperSlider";
import "./ProductPage.css";

export default function ProductPage() {
	const [product, setProduct] = useState(null);
	const Location = useLocation();
	useEffect(() => {
		if (Location.state) {
			getProductDetailsById(Location.state._id)
				.then((res) => {
					setProduct(res.data);
				})
				.catch((err) => {});
		}
		return () => {};
	}, []);
	return (
		<>
			<div className="product-single-page">
				<SwiperSlider className="swiper" images={product?.images} />
				<div className="single-product-side">
					<h3 className="title">{product?.name}</h3>
					<h4 className="category">{product?.category?.name}</h4>
					<h3 className="price">{product?.price} EGP</h3>
					<button className="add-to-bag" type="button">
						Add to Bag
					</button>
				</div>
			</div>
		</>
	);
}
