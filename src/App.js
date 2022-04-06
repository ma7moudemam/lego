
import './App.css';
import Wishlist from './components/wishList/wishListContent/Wishlist';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import MyOrder from './components/Myorder/MyOrder';
import Personal from './components/personal&address/Personal';


function App() {
  return (
    
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/">
              <h1>This is home page</h1>
          </Route>
          <Route  path="/whishlist">
                <Wishlist />
          </Route>
          </Switch>         
        
      <Footer />
    </div>
  );
}

export default App;
