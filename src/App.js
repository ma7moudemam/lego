import "./App.css";
import Wishlist from "./components/wishList/wishListContent/Wishlist";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HomePage from "./components/HomePage/HomePage";
import ProductPage from "./components/ProductPage/ProductPage";
import ProductSlider from "./components/ProductSlider/ProductSlider";
import ProductCart from "./components/ProductCart/ProductCart";
import Utility from "./components/Utilitybar/Utility";
import Recommended from "./components/Recommended/Recommended";
import Menu from "./components/Menu/Menu";
import AccordionProduct from "./components/AccordionProduct/AccordionProduct";
import SwiperSlider from "./components/SwiperSlider/SwiperSlider";

import "swiper/css/bundle";

function App() {

	return (
		<div className="App">
			<Menu />
			<Utility />
			<Navbar />
			<Hero />
			<Recommended />
			<AccordionProduct/>
			<Switch>
				<Route exact path="/">
          <HomePage />
  				</Route>
				<Router path="/whishlist">
					<Wishlist />
				</Router>
			</Switch>
			<SwiperSlider />

			<Footer />
		</div>
	);
}

export default App;
