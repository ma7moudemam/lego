import React from "react";
import Navbar from "../Navbar/Navbar";
import Utility from "../Utilitybar/Utility";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import { useState } from "react";

export default function Layout(props) {
	const [isLoggedIn, setIsLoggedIn] = useState(() => (localStorage.getItem("token") ? true : false));
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
			/>
			<Utility isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
			<Navbar toggleMenu={toggleMenu} isLoggedIn={isLoggedIn} />
			<main>{React.cloneElement(props.children, { isLoggedIn })}</main>
			<Footer />
		</>
	);
}
