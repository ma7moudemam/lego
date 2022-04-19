import "./Utility.css";
import legoUser from "../../assets/imgs/lego-user.svg";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function Utility(props) {
	const [toggleUtility, setToggleUtility] = useState(false);
	const [notification, setNotification] = useState(false);
	const [notificationMessage, setNotificationMessage] = useState("");
	const openNotificationMsg = (message) => {
		setNotificationMessage(message);
		setNotification(true);
	};
	const hideNotificationMsg = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setNotification(false);
	};
	function logout() {
		localStorage.clear();
		props.setIsLoggedIn(false);
		openNotificationMsg("You Logged Out Successfully");
	}
	return (
		<>
			<div className={`utility-bar ${toggleUtility ? "hide" : ""}`}>
				<div className="utility-bar-styles">
					<span>FREE Shipping with orders over 1000 EGP!</span>
				</div>
				<div className="utility-bar-styles">
					<NavLink to={props.isLoggedIn ? "/details" : "/login"} className="user-icon">
						<img src={legoUser} className="svg" />
						{props.isLoggedIn ? `${jwt_decode(localStorage.getItem("token")).user.userName}` : "Account"}
					</NavLink>
					<button className="utility-logout" onClick={logout}>
						<i className="fa-solid fa-right-from-bracket"></i>Logout
					</button>
				</div>
				<div className="utility-bar-styles">
					<button
						type="button"
						className="utility-close-btn"
						onClick={() => setToggleUtility((prev) => !prev)}
					>
						<i className="fas fa-times"></i>
					</button>
				</div>
			</div>
			<Snackbar open={notification} autoHideDuration={3000} onClose={hideNotificationMsg} severity="success">
				<Alert onClose={hideNotificationMsg} severity="success" sx={{ width: "100%" }}>
					{notificationMessage}
				</Alert>
			</Snackbar>
		</>
	);
}
