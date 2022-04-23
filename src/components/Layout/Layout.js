import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Utility from "../Utilitybar/Utility";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import { useState } from "react";
import jwt_decode from "jwt-decode";

export default function Layout(props) {
	const [isLoggedIn, setIsLoggedIn] = useState(() => (localStorage.getItem("token") ? true : false));
	const [isAdmin, setIsAdmin] = useState(false);
	const [isShipper, setIsShipper] = useState(false);
	useEffect(() => {
		if (isLoggedIn) {
			const decode = jwt_decode(localStorage.getItem("token")).role;
			if (decode === "admin") setIsAdmin(true);
			else setIsAdmin(false);
		}
	}, [isLoggedIn]);
	const [openMenuBar, setOpenMenuBar] = useState(false);
	function toggleMenu() {
		setOpenMenuBar((prev) => !prev);
	}
	// props isLoggedIn is in each child of Layout
	return (
		<>
			<Menu
				openMenuBar={openMenuBar}
				setOpenMenuBar={setOpenMenuBar}
				toggleMenu={toggleMenu}
				isLoggedIn={isLoggedIn}
				isAdmin={isAdmin}
				isShipper={isShipper}
			/>
			<Utility
				isShipper={isShipper}
				setIsShipper={setIsShipper}
				isAdmin={isAdmin}
				setIsAdmin={setIsAdmin}
				isLoggedIn={isLoggedIn}
				setIsLoggedIn={setIsLoggedIn}
			/>
			<Navbar isShipper={isShipper} isAdmin={isAdmin} toggleMenu={toggleMenu} isLoggedIn={isLoggedIn} />
			<main>{React.cloneElement(props.children, { isLoggedIn })}</main>
			<Footer />
		</>
	);
}
