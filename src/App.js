import "./App.css";
import Wishlist from "./components/wishList/wishListContent/Wishlist";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProductCart from "./components/ProductCart/ProductCart";
import Utility from "./components/Utilitybar/Utility";
import Recommended from "./components/Recommended/Recommended";
import Menu from "./components/Menu/Menu";

function App() {
	return (
		<div className="App">
			<Menu />
			<Utility />
			<Navbar />
			<Hero />
			<Recommended />
			<Switch>
				<Route exact path="/">
					<h1>This is home page</h1>
				</Route>
				<Route path="/whishlist">
					<Wishlist />
				</Route>
			</Switch>

			<Footer />
		</div>
	);
}

export default App;
