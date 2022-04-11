import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
function User({ user }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
      <CardContent>
        <Typography gutterBottom variant="h6" align="center" component="div">
          {user.email}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small">Send to Blacklist</Button>
        <Button size="small">Go to profile</Button>
      </CardActions>
    </Card>
  );
}

export default User;
