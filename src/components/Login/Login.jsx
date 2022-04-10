import React from "react";
import legoAccountLogo from "./../../assets/imgs/LEGOAccount-Logo.svg";
import close from "./../../assets/imgs/close.svg";
import legoLarge from "./../../assets/imgs/lego(1)large.png";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Login.css";
import { Route, Redirect } from "react-router-dom";

function Login() {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string().email("invalid email address").required("email is required"),
			password: Yup.string().required("password is required"),
		}),
		onSubmit: (values) => {
			axios.post("http://localhost:8080/login", values).then((res) => {
				//res.data
				localStorage.setItem("token", res.data.token);
				<Route exact path="/">
					{<Redirect to="/home" />}
				</Route>;
			});
		},
	});
	// const submitLogin = (event) => {
	//   event.preventDefault();
	//   console.log(event);
	// };
	return (
		<div className="auth-wrapper">
			<div className="login-container">
				<div className="header">
					<div className="title">
						<img src={legoAccountLogo} alt="Lego Logo" />
					</div>
					<div className="close">
						<a href="home.html">
							<img src={close} alt="close button" />
						</a>
					</div>
				</div>
				<div className="logo">
					<img src={legoLarge} alt="" />
				</div>
				<Box
					component="form"
					className="lego-form"
					noValidate
					autoComplete="off"
					onSubmit={formik.handleSubmit}
				>
					<FormControl sx={{ width: "100%", px: 3, mb: 2 }}>
						<TextField
							helperText={formik.touched.email && formik.errors.email ? `${formik.errors.email}` : null}
							error={formik.touched.email && formik.errors.email ? true : false}
							id="demo-helper-text-misaligned"
							label="Email"
							{...formik.getFieldProps("email")}
						/>
					</FormControl>
					<FormControl sx={{ width: "100%", px: 3, mb: 2 }}>
						<TextField
							helperText={
								formik.touched.password && formik.errors.password ? `${formik.errors.password}` : null
							}
							error={formik.touched.password && formik.errors.password ? true : false}
							id="standard-error-helper-text"
							label="Password"
							type="password"
							{...formik.getFieldProps("password")}
						/>
					</FormControl>

					<div className="remember-me">
						<FormControlLabel control={<Checkbox />} label="Remember me" />
					</div>
					<p className="logout-advice">
						Remember to log out afterwards if you are using a shared computer, for example in a library or
						school.
					</p>
					<button type="submit" className="login-button">
						Log in
					</button>
				</Box>
				<div className="forgetting">
					<a href="#test">Forgot username?</a> |<a href="#test">Forgot password</a>
				</div>
				<div className="go-signup">
					<p>Don't have a LEGO® Account?</p>
					<a href="/signup">Create account</a>
				</div>
			</div>
		</div>
	);
}

export default Login;
