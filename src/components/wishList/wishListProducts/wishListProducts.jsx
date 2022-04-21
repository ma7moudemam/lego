import React, { useEffect, useState } from "react";
import { getWishList } from "../../../network/wishListAPI";
import WishListCart from "./WishListCart";

import "./WishListProducts.css";

function WishListProducts() {
	const [wishList, setWishList] = useState([]);
	useEffect(() => {
		getWishList().then((data) => setWishList(data.data.wishlist));
	}, []);

	return (
		<div className="wishListProducts">
			{wishList.map((product) => {
				return <WishListCart product={product} key={product._id} />;
			})}
		</div>
	);
}

export default WishListProducts;
