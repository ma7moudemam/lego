import "./Utility.css";
import legoUser from "../../assets/imgs/lego-user.svg";
import { NavLink } from "react-router-dom";

export default function Utility() {
	return (
		<>
			<div className="utility-bar">
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
					<NavLink to="/login" className="user-icon">
						<img src={legoUser} className="svg" />
						Account
					</NavLink>
					|
					<NavLink to="#" className="vip-icon">
						<i className="fas fa-crown"></i>VIP
					</NavLink>
				</div>
				<div className="utility-bar-styles">
					<button type="button">
						<i className="fas fa-times"></i>
					</button>
				</div>
			</div>
		</>
	);
}
