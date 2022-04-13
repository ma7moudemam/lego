import "./Utility.css";
import legoUser from "../../assets/imgs/lego-user.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Utility(props) {
	const [toggleUtility, setToggleUtility] = useState(false);
	return (
		<>
			<div className={`utility-bar ${toggleUtility ? "hide" : ""}`}>
				<div className="utility-bar-styles">
					<NavLink className="left-utility" to="#">
						<i className="fas fa-long-arrow-alt-left"></i>
						play zone
					</NavLink>
				</div>
				<div className="utility-bar-styles">
					<span>
						FREE Shipping with orders over $35! <NavLink to="#">Learn more</NavLink>
					</span>
				</div>
				<div className="utility-bar-styles">
					<NavLink to={props.isLoggedIn ? "/details" : "/login"} className="user-icon">
						<img src={legoUser} className="svg" />
						Account
					</NavLink>
					|
					<NavLink to="#" className="vip-icon">
						<i className="fas fa-crown"></i>VIP
					</NavLink>
				</div>
				<div className="utility-bar-styles">
					<button type="button" onClick={() => setToggleUtility((prev) => !prev)}>
						<i className="fas fa-times"></i>
					</button>
				</div>
			</div>
		</>
	);
}
