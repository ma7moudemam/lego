import axios from "axios";
import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import OrdersTable from "./Table/OrdersTable";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ShipperOrder from "./Table/ShipperOrder";
import "./ShipperDashboard.css";
function ShipperOrders() {
  let token = localStorage.getItem("token");
  let decode = jwt_decode(token);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:8080/shipper/orders", { id: decode.user._id })
      .then((res) => {
        console.log(res);
        setOrders(res.data.orders);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ marginTop: "2rem" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Total Price</TableCell>
              <TableCell align="center">Order Status</TableCell>
              <TableCell align="center">Controls</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <ShipperOrder order={order} key={order._id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ShipperOrders;
