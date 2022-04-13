import "./Menu.css";
import legoUser from "../../assets/imgs/lego-user.svg";
import { NavLink } from "react-router-dom";

export default function Menu(props) {
	console.log("menu", props.toggleMenu);
	return (
		<>
			<div className={`menu-bar ${props.openMenuBar ? "open" : ""}`}>
				<header>
					<div>Menu</div>
					<a onClick={props.toggleMenu}>
						<i className="fas fa-times"></i>
					</a>
				</header>
				<div className="flex-wrapper">
					<div className="play-zone">
						<NavLink className="left-utility" to="#">
							<i className="fas fa-long-arrow-alt-right"></i>
							play zone
						</NavLink>
					</div>

					<ul className="menu-bar-list">
						<li className="menu-bar-list-item">
							<NavLink to="/">HOME</NavLink>
						</li>
						<li className="menu-bar-list-item">
							<NavLink to="/shop-now">SHOP</NavLink>
						</li>
						<li className="menu-bar-list-item">
							<NavLink to="/">DISCOVER</NavLink>
						</li>
						<li className="menu-bar-list-item">
							<NavLink to="/contact-us">HELP</NavLink>
						</li>
						<li className="menu-bar-list-item">
							<NavLink to={props.isLoggedIn ? "/details" : "/login"} className="user-icon">
								<img src={legoUser} className="svg" />
								Account
							</NavLink>
						</li>
						<li className="menu-bar-list-item">
							<NavLink to="#" className="vip-icon">
								<i className="fas fa-crown"></i>
								VIP
							</NavLink>
						</li>
						<li className="menu-bar-list-item">
							<NavLink to="/wishlist">My Wishlist</NavLink>
						</li>
						<li className="menu-bar-list-item">
							<NavLink to="/mybag">
								My Bag <span>(0)</span>
							</NavLink>
						</li>
						<li className="menu-bar-list-item">
							<NavLink to="#" className="region-icon">
								<i className="fas fa-map-marker-alt"></i> Region
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
