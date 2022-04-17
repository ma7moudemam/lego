import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import axios from "axios";

function User({ user, openNotification }) {
  const [userState, setUserState] = useState(user.blocked);

  const blockUser = () => {
    setUserState(true);
    axios
      .post(
        "http://localhost:8080/dashboard/users",
        { email: user.email },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((res) => {})
      .catch((err) => console.log(err));
    // update blocked user state
    axios
      .put("http://localhost:8080/dashboard/users", {
        id: user._id,
        blocked: true,
      })
      .then((res) => {
        setUserState(true);
        openNotification(`${user.email} has been blocked`);
      })
      .catch((err) => console.log(err));
  };

  const unBlock = () => {
    axios
      .delete(
        "http://localhost:8080/dashboard/users",
        { data: { user: user.email } },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((res) => {
        // if (res.data.body.deletedCount === 1) {
        // }
      })
      .catch((err) => console.log(err));
    // update blocked user state

    axios
      .put("http://localhost:8080/dashboard/users", {
        id: user._id,
        blocked: false,
      })
      .then((res) => {
        setUserState(false);
        openNotification(`${user.email} unBlocked`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card sx={{ maxWidth: 345, position: "relative" }}>
      {userState && (
        <div className="user-state">
          <span></span> Blocked user
        </div>
      )}

      <CardHeader
        sx={{ width: "100%", justifyContent: "center" }}
        avatar={
          <Avatar
            sx={{
              bgcolor: red[500],
              width: "150px",
              height: "150px",
              fontSize: "4.3rem",
              justifyContent: "center",
            }}
            aria-label="recipe"
          >
            {user.email.split("")[0].toUpperCase()}
          </Avatar>
        }
      />
      <CardContent sx={{ paddingBottom: 0 }}>
        <Typography gutterBottom variant="h5" align="center" component="div">
          {user.email}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ color: "grey" }}
          component="div"
        >
          From:{" "}
          <span
            style={{
              color: red[500],
              textTransform: "uppercase",
              fontSize: "1.2rem",
              letterSpacing: "1px",
            }}
          >
            {user.country}
          </span>
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        {userState ? (
          <Button
            size="small"
            onClick={() => {
              unBlock();
            }}
          >
            Unblock
          </Button>
        ) : (
          <Button
            size="small"
            onClick={() => {
              setUserState(true);
              blockUser();
            }}
          >
            Send to Blacklist
          </Button>
        )}

        <Button size="small">Go to profile</Button>
      </CardActions>
    </Card>
  );
}

export default User;
