import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import jwt_decode from "jwt-decode";
import CardHeader from "@mui/material/CardHeader";
import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";

function ShipperDetails() {
  let token = localStorage.getItem("token");
  let decode = jwt_decode(token);

  const [profile, setProfile] = useState(decode.user);

  return (
    <>
      <div style={{ marginTop: "2rem" }}>
        <Card sx={{ maxWidth: 345, position: "relative" }}>
          <CardHeader
            sx={{ width: "100%", justifyContent: "center" }}
            avatar={
              <Avatar
                sx={{
                  bgcolor: red[500],
                  width: "150px",
                  height: "150px",
                  fontSize: "4.3rem",
                  margin: "0 auto",
                  justifyContent: "center",
                }}
                aria-label="recipe"
              >
                {profile.email.split("")[0].toUpperCase()}
              </Avatar>
            }
          />
          <CardContent sx={{ paddingBottom: 0 }}>
            <Typography
              gutterBottom
              variant="h5"
              align="center"
              component="div"
            >
              {profile.email}
            </Typography>
            <Typography
              variant="h6"
              align="center"
              sx={{ color: "grey" }}
              component="div"
            >
              <span
                style={{
                  color: red[500],
                  textTransform: "uppercase",
                  fontSize: "1.2rem",
                  letterSpacing: "1px",
                }}
              >
                {profile.name}
              </span>
            </Typography>
            <Typography
              variant="h6"
              align="center"
              sx={{ color: "grey" }}
              component="div"
            >
              Phone:{" "}
              <span
                style={{
                  color: red[500],
                  textTransform: "uppercase",
                  fontSize: "1.2rem",
                  letterSpacing: "1px",
                }}
              >
                {profile.phone_number}
              </span>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default ShipperDetails;
