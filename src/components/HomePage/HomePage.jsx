import React from "react";
import Women from "../../assets/images/woman.png";
import HomeCard from "./HomeCard";
import Hero from "./../Hero/Hero";
import Recommended from "./../Recommended/Recommended";
import { useState, useEffect } from "react";
import axios from "axios";

import "./HomePage.css";

export default function HomePage(props) {
	const [trendingProducts, setTtrendingProducts] = useState([]);
	const [newProducts, setNewProducts] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:8080/home/trending-products")
			.then((res) => {setTtrendingProducts(res.data.trendingProducts), console.log(res)})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		axios
			.get("http://localhost:8080/home/new-products")
			.then((res) => {
				setNewProducts(res.data.newProducts);
				console.log(res.data.newProducts);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<Hero />
			<Recommended />
			{/* Keep-in-touch */}
			<div className="container-full">
				<section className="keep-in-touch">
					<div className="keep-in-touch-container">
						<div className="left-side">
							<h2>
								<span>Keep in touch</span>
							</h2>
							<p>
								<span>
									Sign up to receive communications from LEGO® Marketing and be the first to know
									about new sets, product updates, promotions and much more
								</span>
							</p>
							<a className="shop-fill" href="#" target="_blank">
								<span>Shop Now</span>
								<span>
									<i className="fas fa-angle-right"></i>
								</span>
							</a>
						</div>
						<div className="right-side">
							<img src={Women} />
						</div>
					</div>
				</section>
			</div>

			{/* Spotlight-on */}
			<div className="container">
				<section id="spotlight-on">
					<div className="card-section">
						{/* card inner content */}
						<div className="card-header-spotlight">
							<h2>
								<span>Spotlight on</span>
							</h2>
						</div>

						{/* card outer content  */}
						<div className="card-container">
							{newProducts.map((product) => {
								return <HomeCard product={product} />;
							})}
						</div>
					</div>
				</section>
			</div>

			{/* trending Now */}
			<div className="container">
				<section id="spotlight-on">
					<div className="card-section">
						{/* card inner content */}
						<div className="card-header-spotlight">
							<h2>
								<span>Spotlight on</span>
							</h2>
						</div>

						{/* card outer content  */}
						<div className="card-container">
							{trendingProducts.map((product) => {
								return <HomeCard product={product} />;
							})}
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
