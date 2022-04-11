import "./Menu.css";
import legoUser from "../../assets/imgs/lego-user.svg";
import { NavLink } from "react-router-dom";

export default function Menu() {
	return (
		<>
			<div class="menu-bar">
				<header>
					<div>Menu</div>
					<NavLink to="#">
						<i class="fas fa-times"></i>
					</NavLink>
				</header>
				<div class="flex-wrapper">
					<div class="play-zone">
						<NavLink class="left-utility" to="#">
							<i class="fas fa-long-arrow-alt-right"></i>
							play zone
						</NavLink>
					</div>

					<ul class="menu-bar-list">
						<li class="menu-bar-list-item">
							<NavLink to="/">HOME</NavLink>
						</li>
						<li class="menu-bar-list-item">
							<NavLink to="/shop-now">SHOP</NavLink>
						</li>
						<li class="menu-bar-list-item">
							<NavLink to="/">DISCOVER</NavLink>
						</li>
						<li class="menu-bar-list-item">
							<NavLink to="/contact-us">HELP</NavLink>
						</li>
						<li class="menu-bar-list-item">
							<NavLink to="/login" class="user-icon">
								<img src={legoUser} class="svg" />
								Account
							</NavLink>
						</li>
						<li class="menu-bar-list-item">
							<NavLink to="#" class="vip-icon">
								<i class="fas fa-crown"></i>
								VIP
							</NavLink>
						</li>
						<li class="menu-bar-list-item">
							<NavLink to="/wishlist">My Wishlist</NavLink>
						</li>
						<li class="menu-bar-list-item">
							<NavLink to="/mybag">
								My Bag <span>(0)</span>
							</NavLink>
						</li>
						<li class="menu-bar-list-item">
							<NavLink to="#" class="region-icon">
								<i class="fas fa-map-marker-alt"></i> Region
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
