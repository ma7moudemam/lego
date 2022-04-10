import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import TextField from "@mui/material/TextField";

import Logo from "../../assets/imgs/LEGOAccount-Logo.svg";
import "./AccountDetails.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function AccountSecurity() {
  const [user, setUser] = useState([]);
useEffect(() => {
  axios
    .get("http://localhost:8080/account/me", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => setUser(res.data))
    .catch((err) => console.log(err));
}, []);

  const handelDeleteAction = () => {
    axios
      .delete("http://localhost:8080/account", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => (console.log("deleted"), (<Redirect to="/" />)))
      .catch((err) => console.log(err));
  };

  const handelLogOutAction = () => {
    localStorage.removeItem("token");
    <Redirect to="/" />;
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#f2f5f7", height: "100%" }}>
          <Box sx={{ bgcolor: "#ffcf00", height: "12vh" }}>
            <div className="text-center">
              <button className="back-arrow">
                <Link
                  to={`/details`}
                  style={{
                    textDecoration: "none",
                    border: "none",
                    color: "black",
                  }}
                >
                  <ArrowBackIosIcon fontSize="large" />
                </Link>
              </button>
              <img
                src={Logo}
                alt=""
                className="Logo-img-account rounded"
                style={{ marginLeft: "0" }}
              />
              <button className="closing-btn">
                <Link
                  to={`/my-account`}
                  style={{
                    textDecoration: "none",
                    border: "none",
                    color: "black",
                  }}
                >
                  <CloseIcon fontSize="large" />
                </Link>
              </button>
            </div>
          </Box>

          <Box sx={{ mt: 2, mx: 7 }}>
            <h4 style={{ textAlign: "center", marginBottom: "16px" }}>
              DELETE PROFILE
            </h4>

            <p className="container" style={{ textAlign: "center" }}>
              You are about to delete your LEGO® Account. Everything associated
              with this account will be deleted as well, VIP points and LEGO
              Ideas creations included. All content you have created on LEGO
              Ideas, including contest entries, will be lost. If another user is
              linked to your LEGO Account, your linked user’s account will be
              reverted into default consents as defined in our Terms and
              Conditions. Do you still want to delete your LEGO Account?
            </p>

            <h4 style={{ textAlign: "center", marginBottom: "16px" }}>
              Do you still want to delete your LEGO® Account?
            </h4>

            <form id="delete-form" sx={{ mb: "0" }}>
              <TextField
                fullWidth
                id="standard-read-only-input"
                label="Username"
                defaultValue={user.userName}
                InputProps={{
                  readOnly: true,
                }}
                sx={{ mb: 2 }}
                //   variant="standard"
              />

              <TextField
                fullWidth
                id="standard-read-only-input"
                label="Email"
                defaultValue={user.email}
                InputProps={{
                  readOnly: true,
                }}
                //   variant="standard"
              />
            </form>

            <div className="d-grid gap-2 col-6 mx-auto my-4">
              <button
                className="btn py-2 mb-2"
                style={{
                  backgroundColor: "#e3000b",
                  color: "white",
                  fontSize: "20px",
                }}
                type=""
                onClick={handelDeleteAction}
              >
                <Link
                  to={`/`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Yes, Delete it
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
                onClick={handelLogOutAction}
              >
                cancel
              </button>
            </div>
          </Box>
        </Box>
      </Container>
    </>
  );
}
