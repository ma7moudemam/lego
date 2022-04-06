import "./App.css";
import Wishlist from "./components/wishList/wishListContent/Wishlist";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProductCart from "./components/ProductCart/ProductCart";
import Utility from "./components/Utilitybar/Utility";
import Recommended from "./components/Recommended/Recommended";

function App() {
	return (
		<div className="App">
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
