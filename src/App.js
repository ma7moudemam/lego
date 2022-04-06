
import './App.css';
import Wishlist from './components/wishList/wishListContent/Wishlist';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Wishlist/>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
