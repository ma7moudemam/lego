
import './App.css';
import Wishlist from './wishList/wishListContent/Wishlist';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <Router>
      <Wishlist/>
      </Router>
    </div>
  );
}

export default App;
