import * as React from "react";
import Typography from "@mui/material/Typography";
import Title from "./Title";

export default function Deposits({ recentDeposites }) {
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        {recentDeposites}.00 EGP
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        In {new Date().toLocaleString("en-US", { month: "long" })}
      </Typography>
    </React.Fragment>
  );
}
