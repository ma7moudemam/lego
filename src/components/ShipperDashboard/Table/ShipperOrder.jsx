import React, { useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import TableCell from "@mui/material/TableCell";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import {
  TableRow,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Button,
} from "@mui/material";
import axios from "axios";

export default function Order({ order }) {
  const [assignedState, setAssignedState] = useState("");
  const [changeShipper, setChangeShipper] = useState(false);
  const [orderState, setOrderState] = useState(() => {
    return {
      isDelivered: order.isDelivered,
      isPending: order.isPending,
      isShipped: order.isShipped,
    };
  });
  const [isDelivered, setIsDelivered] = useState(order.isDelivered);
  const [isPending, setIsPending] = useState(order.isPending);
  const [isShipped, setIsShipped] = useState(order.isShipped);

  console.log(assignedState);
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  const submitShipper = () => {
    // setIsDelivered();
    // seIsPending();
    // setIsShipped(assignedState === "isShipped" ? true : false);
    axios
      .post("http://localhost:8080/userOrder", {
        id: order._id,
        isDelivered: assignedState === "isDelivered" ? true : false,
        isPending: assignedState === "isPending" ? true : false,
        isShipped: assignedState === "isShipped" ? true : false,
      })
      .then((res) => {
        console.log(res.data);
        setChangeShipper(false);
        setIsDelivered(res.data.isDelivered);
        setIsShipped(res.data.isShipped);
        setIsPending(res.data.isPending);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (assignedState === "isDelivered") {
      setIsDelivered(true);
      setIsShipped(false);
      setIsPending(false);
    } else if (assignedState === "isShipped") {
      setIsDelivered(false);
      setIsShipped(true);
      setIsPending(false);
    } else if (assignedState === "isPending") {
      setIsDelivered(false);
      setIsShipped(false);
      setIsPending(true);
    }
  }, [assignedState]);
  return (
    <TableRow>
      <TableCell>{order.order_date}</TableCell>
      <TableCell align="center">{order.user.email}</TableCell>
      <TableCell align="center">{order.total_price} EGP</TableCell>

      {changeShipper ? (
        <TableCell align="center" sx={{ minWidth: "150px" }}>
          <FormControl sx={{ width: "100%", mt: 2 }}>
            <InputLabel id="updateCategory">Order State</InputLabel>
            <Select
              fullWidth
              labelId="updateCategory"
              id="updateCategory"
              label="Category"
              name="updateCategory"
              value={assignedState}
              onChange={(e) => setAssignedState(e.target.value)}
            >
              <MenuItem value="isPending">Is Pending</MenuItem>
              <MenuItem value="isShipped">Is Shipped</MenuItem>
              <MenuItem value="isDelivered">Is Delivered</MenuItem>
            </Select>
            <FormHelperText sx={{ color: "red" }}></FormHelperText>
          </FormControl>
        </TableCell>
      ) : (
        <TableCell align="center">
          <span
            className="order-status-code"
            style={{
              backgroundColor: isDelivered
                ? "green"
                : isShipped
                ? "orange"
                : isPending && "grey",
            }}
          ></span>{" "}
          {isDelivered
            ? "Delivered"
            : isShipped
            ? "Shipped"
            : isPending && "Pending"}
        </TableCell>
      )}
      <TableCell align="center">
        {changeShipper && (
          <Button
            variant="outlined"
            startIcon={<CheckIcon color="success" />}
            onClick={submitShipper}
            sx={{ marginRight: "5px" }}
          >
            Set
          </Button>
        )}
        <Button
          variant="outlined"
          startIcon={<ModeEditIcon color="primary" />}
          onClick={() => setChangeShipper(!changeShipper)}
        >
          {changeShipper ? "Cancel" : "Change"}
        </Button>
      </TableCell>
    </TableRow>
  );
}
