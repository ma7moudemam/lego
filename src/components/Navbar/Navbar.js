import { Link } from "react-router-dom";
import "./Navbar.css";
import legoLogo from "./../../assets/imgs/lego-logo.svg";
import legoUser from "../../assets/imgs/lego-user.svg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<div className="nav-container">
			<nav className="nav-bar">
				<ul className="nav-list">
					<div className="nav-list-item menu-icon">
						<sub>Menu</sub>
					</div>
					<img src={legoLogo} className="nav-list-item" alt="logo" />
					<li className="nav-list-item">
						<a href="/store">shop</a>
					</li>
					<li className="nav-list-item">
						<a href="/store">discover</a>
					</li>
					<li className="nav-list-item">
						<a href="/contactus">help</a>
					</li>
				</ul>
				<div className="nav-icons">
					<div className="content">
						<div className="search-bar">
							<button className="search-bar-submit" aria-label="submit search">
								<i className="fas fa-search"></i>
							</button>
							<input type="text" className="search-bar-input" aria-label="search" placeholder="Search..." />
						</div>
						<div className="search-content"></div>
					</div>
					<a href="/account" className="nav-user-icon">
						<img src={legoUser} className="svg" alt="account" />
					</a>
					<li className="nav-list-item">
						<a href="/contactus">help</a>
					</li>
					<NavLink to="/whishlist">
						<i className="wish-list-icon">
							<svg width="20" height="18">
								<path
									d="M16.84 8.417L10 15.204 3.16 8.417A3.67 3.67 0 012 5.739C2 3.677 3.71 2 5.815 2a3.82 3.82 0 012.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0114.186 2C16.289 2 18 3.677 18 5.739a3.673 3.673 0 01-1.16 2.678M9.986 18l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 001.78-4.126C20 2.569 17.398 0 14.187 0A5.829 5.829 0 0010 1.762 5.827 5.827 0 005.815 0C2.604 0 0 2.569 0 5.739a5.68 5.68 0 001.782 4.126"
									fill="currentColor"
									fill-rule="evenodd"
								></path>
							</svg>
						</i>
					</NavLink>
					<i className="cart-icon">
						<svg height="20px" width="18px">
							<g fill="currentColor" fill-rule="evenodd">
								<path d="M4 3.512v5.804c0 .377.349.684.779.684.43 0 .779-.307.779-.684V3.512C5.558 2.33 6.653 1.368 8 1.368c1.347 0 2.442.962 2.442 2.144v5.804c0 .377.35.684.78.684.43 0 .778-.307.778-.684V3.512C12 1.575 10.206 0 8 0S4 1.575 4 3.512z"></path>
								<path d="M2.46 6.33c-.269 0-.489.194-.5.441L1.435 18.19a.436.436 0 00.131.332.52.52 0 00.348.149h12.151c.276 0 .501-.207.501-.462l-.525-11.436c-.011-.248-.23-.442-.5-.442H2.46zM14.448 20l-12.974-.001a1.591 1.591 0 01-1.064-.462 1.357 1.357 0 01-.408-1.03L.56 6.372C.595 5.602 1.277 5 2.11 5h11.78c.835 0 1.516.602 1.551 1.372l.56 12.197c0 .789-.697 1.431-1.553 1.431z"></path>
							</g>
						</svg>
						<span>0</span>
					</i>
				</div>
			</nav>
		</div>
	);
}
