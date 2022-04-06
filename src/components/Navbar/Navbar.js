import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
	return <div><Link to="/whishlist/whishlist">Wihlist</Link><br></br>
	<Link to="/">home</Link>
	</div>;
}
