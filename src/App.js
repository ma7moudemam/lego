import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserCart, updateUserCart } from "./network/cartAPI";
import { useSelector, useDispatch } from "react-redux";
import { initUserCart } from "./Redux/Actions/cartActions";
import "./App.css";
import RequireAuth from "./Auh";

const AccordionProduct = lazy(() => import("./components/AccordionProduct/AccordionProduct"));
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
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const ContactUs = lazy(() => import("./components/Contact-us/ContactUs"));
const MyOrder = lazy(() => import("./components/Myorder/MyOrder"));
const WishListContent = lazy(() => import("./components/wishList/wishListContent/WishlistContent"));
const Wishlist = lazy(() => import("./components/wishList/wishListContent/Wishlist"));

function App() {
	const dispatch = useDispatch();
	const cart = useSelector((store) => store.cart);
	const [initCart, setInitCart] = useState(false);
	const [token, setToken] = useState(localStorage.getItem("token"));

	useEffect(() => {
		if (token) {
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
						{/* <Route
							path="/shipper"
							element={
								<Layout>
									<Shipper />
								</Layout>
							}
						/> */}
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
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
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
							path="/my-account"
							element={
								<>
									<Navbar />
									<Personal />
								</>
							}
						/>
						<Route path="/details" element={<AccountDetails />} />
						<Route path="/info" element={<AccountInformation />} />
						<Route path="/security" element={<AccountSecurity />} />
						<Route path="/delete-account" element={<DeleteAccount />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route
							path="/checkout"
							element={
								<Layout>
									<Checkout />
								</Layout>
							}
						/>
						<Route
							path="/success"
							element={
								<Layout>
									<Success />
								</Layout>
							}
						/>
						<Route
							path="/canceled"
							element={
								<Layout>
									<Canceled />
								</Layout>
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
						<Route path="/about-us" element={<NotFound />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Suspense>
			</Router>
		</div>
	);
}

export default App;
