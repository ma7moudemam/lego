import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserCart, updateUserCart } from "./network/cartAPI";
import { useSelector, useDispatch } from "react-redux";
import { initUserCart } from "./Redux/Actions/cartActions";
import RequireAuth from "./Auh";
import AboutUs from "./components/About-us/AboutUs";
import RequireAdminAuth from "./AdminAuth";
import Shipper from "./components/Shipper/Shipper";
import RequireUserAuth from "./UserAuth";
import ShipperDashboard from "./components/ShipperDashboard/ShipperDashboard"

import "./App.css";

const MyBag = lazy(() => import("./components/Bag"));
const ProductCart = lazy(() => import("./components/ProductCart/ProductCart"));
const Personal = lazy(() => import("./components/personal&address/Personal"));
const HomePage = lazy(() => import("./components/HomePage/HomePage"));
const ProductCard = lazy(() => import("./components/ProductsCard/ProductCard"));
const SwiperSlider = lazy(() => import("./components/SwiperSlider/SwiperSlider"));
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));
const Login = lazy(() => import("./components/Login/Login"));
const Signup = lazy(() => import("./components/Signup/Signup"));
const AccountDetails = lazy(() => import("./components/AccountDetails/AccountDetails"));
const AccountInformation = lazy(() => import("./components/AccountDetails/AccountInformation"));
const AccountSecurity = lazy(() => import("./components/AccountDetails/AccountSecurity"));
const DeleteAccount = lazy(() => import("./components/AccountDetails/DeleteAccount"));
const Layout = lazy(() => import("./components/Layout/Layout"));
const Checkout = lazy(() => import("./components/Checkout/Checkout"));
const Success = lazy(() => import("./components/Success/Success"));
const Canceled = lazy(() => import("./components/Canceled/Canceled"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));
const ContactUs = lazy(() => import("./components/Contact-us/ContactUs"));
const MyOrder = lazy(() => import("./components/Myorder/MyOrder"));
const WishListContent = lazy(() => import("./components/wishList/wishListContent/WishlistContent"));
const Wishlist = lazy(() => import("./components/wishList/wishListContent/Wishlist"));

function App() {
	const dispatch = useDispatch();
	const cart = useSelector((store) => store.cart);
	const [initCart, setInitCart] = useState(false);
	const [token] = useState(localStorage.getItem("token"));

	useEffect(() => {
		if (token) {
			if (initCart) {
				updateUserCart({ ...cart })
					.then()
					.catch();
			} else {
				setInitCart(true);
				getUserCart()
					.then((res) => dispatch(initUserCart(res.data)))
					.catch();
			}
		}
	}, [cart, token]);

	return (
		<div className="App">
			<Router>
				<Suspense
					fallback={
						<div className="loader">
							<h1>Our website is made with love</h1>
							<div className="lds-heart">
								<div></div>
							</div>
						</div>
					}
				>
					<Routes>
						<Route
							path="/mybag"
							element={
								<RequireAuth>
									<Layout>
										<MyBag />
									</Layout>
								</RequireAuth>
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
							path="/shipper"
							element={
								<Layout>
									<Shipper />
								</Layout>
							}
						/>
						<Route
							path="/whishlist"
							element={
								<RequireAuth>
									<Layout>
										<Wishlist />
									</Layout>
								</RequireAuth>
							}
						>
							<Route path="personal" element={<Personal />} />
							<Route path="myorder" element={<MyOrder />} />
							<Route path="whishlist" element={<WishListContent />} />
						</Route>
						<Route
							path="/login"
							element={
								<RequireUserAuth>
									<Login />
								</RequireUserAuth>
							}
						/>
						<Route
							path="/signup"
							element={
								<RequireUserAuth>
									<Signup />
								</RequireUserAuth>
							}
						/>
						<Route
							path="/shop-now"
							element={
								<Layout>
									<>
										<ProductCard />
										{/* <AccordionProduct /> */}
									</>
								</Layout>
							}
						/>
						<Route
							path="/card"
							element={
								<Layout>
									<>
										<ProductCart />
										<SwiperSlider />
									</>
								</Layout>
							}
						/>
						<Route
							path="/details"
							element={
								<RequireAuth>
									<AccountDetails />
								</RequireAuth>
							}
						/>
						<Route
							path="/info"
							element={
								<RequireAuth>
									<AccountInformation />
								</RequireAuth>
							}
						/>
						<Route
							path="/security"
							element={
								<RequireAuth>
									<AccountSecurity />
								</RequireAuth>
							}
						/>
						<Route
							path="/delete-account"
							element={
								<RequireAuth>
									<DeleteAccount />
								</RequireAuth>
							}
						/>
						<Route
							path="/dashboard"
							element={
								<RequireAdminAuth>
									<Dashboard />
								</RequireAdminAuth>
							}
						/>
						<Route
							path="/shipper"
							element={
								<RequireAdminAuth>
									<ShipperDashboard />
								</RequireAdminAuth>
							}
						/>
						<Route
							path="/checkout"
							element={
								<RequireAuth>
									<Layout>
										<Checkout />
									</Layout>
								</RequireAuth>
							}
						/>
						<Route
							path="/success"
							element={
								<RequireAuth>
									<Layout>
										<Success />
									</Layout>
								</RequireAuth>
							}
						/>
						<Route
							path="/canceled"
							element={
								<RequireAuth>
									<Layout>
										<Canceled />
									</Layout>
								</RequireAuth>
							}
						/>
						<Route
							path="/contact-us"
							element={
								<Layout>
									<ContactUs />
								</Layout>
							}
						/>
						<Route
							path="/about-us"
							element={
								<Layout>
									<AboutUs />
								</Layout>
							}
						/>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Suspense>
			</Router>
		</div>
	);
}

export default App;
