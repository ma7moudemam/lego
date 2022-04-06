import "./App.css";
import Wishlist from "./components/wishList/wishListContent/Wishlist";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HomePage from "./components/HomePage/HomePage";
import ProductPage from "./components/ProductPage/ProductPage";
import ProductSlider from "./components/ProductSlider/ProductSlider";

import "swiper/css/bundle";

function App() {
  return (
    <div className="">
      <ProductPage />
      {/* <Navbar />
      <Hero />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/whishlist">
          <Wishlist />
        </Route> */}
      {/* <Route path="/product-page">
          <ProductPage />
        </Route> */}
      {/* <Route path="/product-slider">
          <ProductSlider />
        </Route>  */}
      {/* </Switch> */}

      {/* <Footer /> */}
    </div>
  );
}

export default App;
