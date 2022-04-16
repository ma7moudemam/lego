import React from "react";
import DeveloperCard from "../DeveloperCard/DeveloperCard";
import "./ContactUs.css";
import KarimShahin from "./PP.jpg";
import Emam from "./emam.jpg";
import Essam from "./essam.jpg";

export default function ContactUs() {
	const us = [
		{
			name: "Karim Shahin",
			image: KarimShahin,
			email: "karim.alaa.shahin@gmail.com",
			linkedIn: "https://www.linkedin.com/in/karim-alaa-shahin/",
			github: "https://github.com/KarimShahin",
		},
		{
			name: "Mahmoud Emam",
			image: Emam,
			email: "m7moud_emam@hotmail.com",
			linkedIn: "https://www.linkedin.com/in/m7hmoudemam/",
			github: "https://github.com/ma7moudemam",
		},
		{
			name: "Mahmoud Essam",
			image: Essam,
			email: "dev.mahmoud.essam@gmail.com",
			linkedIn: "https://www.linkedin.com/in/mahmoud-essam-956898182/",
			github: "https://github.com/MahmoudEssam12",
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
