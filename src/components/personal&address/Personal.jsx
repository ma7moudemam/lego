import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Style from "./Personal.module.css";
import jwt_decode from "jwt-decode";

export default function Personal() {
	const [users, setUsers] = useState(() => jwt_decode(localStorage.getItem("token")));

	const handelLogOutAction = () => {
		localStorage.clear();
		Navigate("/");
	};

	return (
		<div className="">
			<div className="row mt-5">
				<div className="col-4">
					<div className="list-group text-center w-75 mx-auto my-4">
						<Link to="/details" className="list-group-item list-group-item-action" aria-current="true">
							Personal Information
						</Link>
						<Link to="/whishlist" className="list-group-item list-group-item-action">
							WhishList
						</Link>
						<Link to="/mybag" className="list-group-item list-group-item-action">
							My Order
						</Link>
						<Link to="/home" className="list-group-item list-group-item-action">
							<button type="button" onClick={handelLogOutAction}>
								Log Out
							</button>
						</Link>
					</div>
				</div>
				<div class="col-8">
					<div className={Style["inner-content"]}>
						{/* personal things  */}
						<h1 className={Style.nameOfBlock}>Personal & Address Details</h1>
						<div className={Style["acc-block"]}>
							<span className={Style.heading}>LEGO® Account Details</span>
							<span className={Style["personal-text"]}>
								The LEGO ID is your gateway to logging into LEGO digital experiences, go here to edit
								your LEGO Account details
							</span>
							<div className={Style["wrapper-personal-btn"]}>
								<button className={Style["personal-btn"]}>
									<Link to={`/details`} style={{ textDecoration: "none", color: "white" }}>
										LEGO® Account Details
									</Link>
								</button>
								<div className={Style["personal-email"]}>
									<span className={Style["lego-account"]}>LEGO® Account Email</span>
									<span className={Style["personal-text"]}>{users.user.email}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
