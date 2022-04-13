import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";

import FormControl from "@mui/material/FormControl";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Logo from "../../assets/imgs/LEGOAccount-Logo.svg";
import "./AccountDetails.css";

export default function AccountSecurity() {
	const [users, setUsers] = useState(() => jwt_decode(localStorage.getItem("token")));
	
	console.log(users)
	let navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			password: "",
		},

		validationSchema: Yup.object({
			password: Yup.string()
				.max(20, "Must be 20 characters or less")
				.min(5, "Must be 5 characters or more")
				.required("required"),
		}),

		onSubmit: (values) => {
			console.log("submited");
			console.log(JSON.stringify(values, null, 2));

			const body = {
				password: values.password,
			};

			console.log(body);

			axios
				.post("http://localhost:8080/account/change-password", body, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				})
				.then((res) => {
					console.log("res");
				})
				.catch((err) => console.log(err));
			navigate("/login");
		},
	});

	return (
		<>
			<CssBaseline />
			<Container maxWidth="sm">
				<Box sx={{ bgcolor: "#f2f5f7", height: "100%" }}>
					<Box sx={{ bgcolor: "#ffcf00", height: "12vh" }}>
						<div className="text-center">
							<button className="back-arrow">
								<Link to={`/details`} style={{ textDecoration: "none", color: "black" }}>
									<ArrowBackIosIcon fontSize="large" />
								</Link>
							</button>
							<img src={Logo} alt="" className="Logo-img-account rounded" style={{ marginLeft: "0" }} />
							<button className="closing-btn">
								<Link to={`/my-account`} style={{ textDecoration: "none", color: "black" }}>
									<CloseIcon fontSize="large" />
								</Link>
							</button>
						</div>
					</Box>

					<Box sx={{ mt: 2, mx: 7 }}>
						<h4 style={{ textAlign: "center", marginBottom: "16px" }}>Security</h4>

						<h4 style={{ textAlign: "center", marginBottom: "16px" }}>
							Do you want to change your password?
						</h4>

						<form id="security-form" sx={{ mb: "0" }} onSubmit={formik.handleSubmit}>
							<FormControl sx={{ width: "100%" }} variant="filled">
								<TextField
									helperText={
										formik.touched.password && formik.errors.password
											? `${formik.errors.password}`
											: null
									}
									error={formik.touched.password && formik.errors.password ? true : false}
									label="Password"
									type="password"
									id="signupPassword"
									name={users.user.password}
									{...formik.getFieldProps("password")}
								/>
							</FormControl>

							<div className="d-grid gap-2 col-6 mx-auto my-2">
								<button
									className="btn py-2 px-1 mb-2"
									style={{
										backgroundColor: "#006cb6",
										color: "white",
										fontSize: "20px",
									}}
									type="submit"
								>
									{/* TODO: sent confirmation to user email */}
									<Link to={`/my-account`} style={{ textDecoration: "none", color: "black" }}>
										Save
									</Link>
								</button>
							</div>
						</form>

						<h4 style={{ textAlign: "center" }}>Link with LEGO® Account</h4>

						<FacebookLoginButton onClick={() => alert("Hello FaceBook")} />

						<GoogleLoginButton onClick={() => alert("Hello Google")} />

						<div className="d-grid gap-2 col-6 mx-auto my-4">
							<button
								className="btn py-2 mb-2"
								style={{
									backgroundColor: "#006cb6",
									color: "white",
									fontSize: "20px",
								}}
								type=""
							>
								<Link to={`/delete-account`} style={{ textDecoration: "none", color: "white" }}>
									Delete Account
								</Link>
							</button>
							<button
								className="btn mb-2"
								style={{
									backgroundColor: "transparent",
									color: "black",
									fontSize: "20px",
								}}
								type="button"
							>
								<Link
									to={`/details`}
									style={{
										textDecoration: "none",
										border: "none",
										color: "black",
									}}
								>
									Go Back
								</Link>
							</button>
						</div>
					</Box>
				</Box>
			</Container>
		</>
	);
}
