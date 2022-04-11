import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import TableCell from "@mui/material/TableCell";

export default function Order({
  id,
  email,
  address,
  date,
  productName,
  price,
}) {
  return (
    <Card sx={{ display: "flex", padding: "10px" }}>
      <CardContent
      // sx={{
      //   flex: "1 0 auto",
      //   display: "flex",
      //   justifyContent: "space-around",
      // }}
      >
        <TableCell align="right">
          <Typography component="td" variant="h6">
            {id}
          </Typography>
        </TableCell>
        <TableCell align="right">
          <Typography variant="h6" component="td">
            {email}
          </Typography>
        </TableCell>
        <TableCell align="right">
          <Typography variant="h6" component="td">
            {address}
          </Typography>
        </TableCell>
        {/* <Typography variant="h6" component="div">
          {date}
        </Typography>
        <Typography variant="h6" component="div">
          {price}
        </Typography>
        <Typography variant="h6" component="div">
          {productName}
        </Typography> */}
      </CardContent>
      <Box sx={{ display: "flex", padding: "16px" }}>
        <IconButton aria-label="dispatch">
          <CheckIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Box>
    </Card>
  );
}
