
import './App.css';
import Wishlist from './components/wishList/wishListContent/Wishlist';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/">
            <h1>This is home page</h1>
          </Route>
          <Route exact path="/whishlist">
            <Router>
               <Wishlist />
            </Router>
          </Route>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
