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
import Personal from "./components/personal&address/Personal";

import HomePage from "./components/HomePage/HomePage";
import ProductCard from "./components/ProductsCard/ProductCard";
import SwiperSlider from "./components/SwiperSlider/SwiperSlider";

import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

import "./App.css";
import AccountDetails from "./components/AccountDetails/AccountDetails";
import AccountInformation from "./components/AccountDetails/AccountInformation";
import AccountSecurity from "./components/AccountDetails/AccountSecurity";
import DeleteAccount from "./components/AccountDetails/DeleteAccount";

import {useEffect, useState} from 'react'
import {getUserCart,updateUserCart} from './network/cartAPI'
import {useSelector,useDispatch} from 'react-redux'
import {initUserCart} from './Redux/Actions/cartActions'
function App() {

  const dispatch = useDispatch()
  const cart = useSelector(store=>store.cart)
  const [initCart,setInitCart]=useState(false)


  useEffect(()=>{
    if(initCart){
      updateUserCart({...cart})
      .then(res=>console.log('===>UPDATE CART ',res.data))
      .catch(err=>console.log('==>ERROR UPDATE CART ,',err))
    }else{
      setInitCart(true)
      getUserCart()
      .then(res=>dispatch(initUserCart(res.data)))
      .catch(err=>console.log('==>ERROR CART ,',err))
    }
  },[cart])


	return (
		<div className="App">
			<Menu />
			<Utility />
			<Navbar />
			<Hero />
			<Recommended />
			<AccordionProduct />
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
				<Router path="/login">
					<Login />
				</Router>
				<Router path="/signup">
					<Signup />
				</Router>
				<Router path="/shop-now">
					<ProductCard />
				</Router>
				<Router path="/card">
					<ProductCart />
					<SwiperSlider />
				</Router>
				<Router path="/my-account">
					<Personal />
				</Router>
				<Router path="/details">
					<AccountDetails />
				</Router>
				<Router path="/info">
					<AccountInformation />
				</Router>
				<Router path="/security">
					<AccountSecurity />
				</Router>
				<Router path="/delete-account">
					<DeleteAccount />
				</Router>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
