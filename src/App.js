import "./App.css";
import Wishlist from "./components/wishList/wishListContent/Wishlist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccordionProduct from "./components/AccordionProduct/AccordionProduct";
import MyBag from "./components/Bag";
import ProductCart from "./components/ProductCart/ProductCart";
import Personal from "./components/personal&address/Personal";
import HomePage from "./components/HomePage/HomePage";
import ProductCard from "./components/ProductsCard/ProductCard";
import SwiperSlider from "./components/SwiperSlider/SwiperSlider";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import "./App.css";
import AccountDetails from "./components/AccountDetails/AccountDetails";
import AccountInformation from "./components/AccountDetails/AccountInformation";
import AccountSecurity from "./components/AccountDetails/AccountSecurity";
import DeleteAccount from "./components/AccountDetails/DeleteAccount";
import { useEffect, useState } from "react";
import { getUserCart, updateUserCart } from "./network/cartAPI";
import { useSelector, useDispatch } from "react-redux";
import { initUserCart } from "./Redux/Actions/cartActions";
import Layout from "./components/Layout/Layout";
import Checkout from "./components/Checkout/Checkout";

function App() {
	const dispatch = useDispatch();
	const cart = useSelector((store) => store.cart);
	const [initCart, setInitCart] = useState(false);

	useEffect(() => {
		if (initCart) {
			updateUserCart({ ...cart })
				.then((res) => console.log("===>UPDATE CART ", res.data))
				.catch((err) => console.log("==>ERROR UPDATE CART ,", err));
		} else {
			setInitCart(true);
			getUserCart()
				.then((res) => dispatch(initUserCart(res.data)))
				.catch((err) => console.log("==>ERROR CART ,", err));
		}
	}, [cart]);

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route
						path="/mybag"
						element={
							<Layout>
								<MyBag />
							</Layout>
						}
					/>
					<Route
						path="/"
						element={
							<Layout>
								<HomePage />
							</Layout>
						}
					/>
					<Route
						path="/home"
						element={
							<Layout>
								<HomePage />
							</Layout>
						}
					/>
					<Route
						path="/whishlist"
						element={
							<Layout>
								<Wishlist />
							</Layout>
						}
					/>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route
						path="/shop-now"
						element={
							<Layout>
								<ProductCard />
								<AccordionProduct />
							</Layout>
						}
					/>
					<Route
						path="/card"
						element={
							<Layout>
								<ProductCart />
								<SwiperSlider />
							</Layout>
						}
					/>
					<Route
						path="/my-account"
						element={
							<Layout>
								<Personal />
							</Layout>
						}
					/>
					<Route
						path="/details"
						element={
							<Layout>
								<AccountDetails />
							</Layout>
						}
					/>
					<Route
						path="/info"
						element={
							<Layout>
								<AccountInformation />
							</Layout>
						}
					/>
					<Route
						path="/security"
						element={
							<Layout>
								<AccountSecurity />
							</Layout>
						}
					/>
					<Route
						path="/delete-account"
						element={
							<Layout>
								<DeleteAccount />
							</Layout>
						}
					/>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/checkout" element={<Checkout />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
