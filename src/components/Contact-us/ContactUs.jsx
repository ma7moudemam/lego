import React from "react";
import DeveloperCard from "../DeveloperCard/DeveloperCard";
import "./ContactUs.css";
import KarimShahin from "./PP.jpg";

export default function ContactUs() {
	const us = [
		{
			name: "Karim Shahin",
			image: KarimShahin,
			email: "karim.alaa.shahin@gmail.com",
			linkedIn: "https://www.linkedin.com/in/karim-alaa-shahin/",
			github: "https://github.com/KarimShahin",
		},
	];
	return (
		<div className="contact-us">
			{us.map((developer) => (
				<DeveloperCard developer={{ ...developer }} />
			))}
		</div>
	);
}
