import "./App.css";
import Wishlist from "./components/wishList/wishListContent/Wishlist";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Utility from "./components/Utilitybar/Utility";
import Recommended from "./components/Recommended/Recommended";
import Menu from "./components/Menu/Menu";
import AccordionProduct from "./components/AccordionProduct/AccordionProduct";
import MyBag from "./components/Bag";
import ProductCart from "./components/ProductCart/ProductCart";

import HomePage from "./components/HomePage/HomePage";
import ProductCard from "./components/ProductsCard/ProductCard";
import SwiperSlider from "./components/SwiperSlider/SwiperSlider";




// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Menu />
      <Utility />
      <Navbar />
      <Hero />
      {/* <Recommended />
      <AccordionProduct /> */}
      <Switch>
        <Route exact path="/mybag">
          <MyBag />
        </Route>

        <Route exact path="/">
          <HomePage />
        </Route>
        <Router path="/whishlist">
          <Wishlist />
        </Router>
        {/* <Router path="/login">
          <Login />
        </Router>
        <Router path="/signup">
          <Signup />
        </Router> */}
        <Router path="/shop-now">
          <ProductCard />
        </Router>
        <Router path="/card">
          <ProductCart />
          <SwiperSlider />
        </Router>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
