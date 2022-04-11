import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import User from "./views/User";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Shippers() {
  const [shippers, setShipppers] = useState([
    { email: "aramex@gotham.dc", name: "aramex" },
    { email: "sigma@gotham.dc", name: "sigma" },
    { email: "fedex@theboys.paramount", name: "fedex" },
    { email: "tedex@metropolice.dc", name: "tedex" },
  ]);
  const [searchOptions, setSearchOptions] = useState([...shippers]);
  const search = (value) => {
    let arr = shippers.filter((shipper) => shipper.email.includes(value));
    setSearchOptions(arr);
  };
  return (
    <div className="shippers">
      <Box component="div" sx={{ my: 3 }}>
        <Autocomplete
          freeSolo
          id="shippersSearch"
          onKeyUp={(e) => search(e.target.value)}
          disableClearable
          options={shippers.map((shipper) => shipper.email)}
          // options={["lego batman", "lego joker"]}
          sx={{ backgroundColor: "#fff" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Box>
      <Grid container spacing={3}>
        {searchOptions.map((shipper) => (
          <Grid item md={6} xs={12} lg={4} key={shipper.email}>
            <User user={shipper} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Shippers;
