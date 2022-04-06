import "./Utility.css";
import legoUser from "../../assets/imgs/lego-user.svg";

export default function Utility() {
	return (
		<>
			<div className="utility-bar">
				<div className="utility-bar-styles">
					<a className="left-utility" href="#">
						<i className="fas fa-long-arrow-alt-left"></i>
						play zone
					</a>
				</div>
				<div className="utility-bar-styles">
					<span>
						FREE Shipping with orders over $35! <a href="#">Learn more</a>
					</span>
				</div>
				<div className="utility-bar-styles">
					<a href="#" className="user-icon">
						<img src={legoUser} className="svg" />
						Account
					</a>
					|
					<a href="#" className="vip-icon">
						<i className="fas fa-crown"></i>VIP
					</a>
				</div>
				<div className="utility-bar-styles">
					<a href="#">
						<i className="fas fa-times"></i>
					</a>
				</div>
			</div>
		</>
	);
}
