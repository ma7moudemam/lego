import React from "react";
import Navbar from "../Navbar/Navbar";
import Utility from "../Utilitybar/Utility";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";

export default function Layout(props) {
	return (
		<>
			<Menu />
			<Utility />
			<Navbar />
			<main>{props.children}</main>
			<Footer />
		</>
	);
}
