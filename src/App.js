import "./App.css";
import Wishlist from "./components/wishList/wishListContent/Wishlist";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero";

function App() {
  return (
    
    <div className="App">
      <Navbar />
      <Hero />
        <Switch>
          <Route exact path="/">
              <h1>This is home page</h1>
          </Route>
          <Router  path="/whishlist">
                <Wishlist />
          </Router>
          </Switch>         
        
      <Footer />
    </div>
  );
}

export default App;
