import "./App.css";
import Wishlist from "./components/wishList/wishListContent/Wishlist";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

function App() {
	return (
		<div className="App">
			<Router>
				<Hero />
				<Wishlist />
			</Router>
			<Footer />
		</div>
	);
}

export default App;
