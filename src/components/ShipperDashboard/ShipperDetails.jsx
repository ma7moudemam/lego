import axios from "axios";
import React, { useState, useEffect } from "react";

function ShipperDetails() {
  useEffect(() => {
    axios
      .get("http://localhost:8080/shippers", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div style={{ marginTop: "2rem" }}>shipper profile</div>
    </>
  );
}

export default ShipperDetails;
