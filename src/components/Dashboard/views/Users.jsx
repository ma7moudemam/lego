import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import User from "./User";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Users() {
  const [users, setUsers] = useState([
    { email: "batman@gotham.dc", name: "vengeance" },
    { email: "batwoman@gotham.dc", name: "batwoman" },
    { email: "homelander@theboys.paramount", name: "cocksucker" },
    { email: "superman@metropolice.dc", name: "superman" },
  ]);
  const [searchOptions, setSearchOptions] = useState([...users]);
  const search = (value) => {
    let arr = users.filter((user) => user.email.includes(value));
    setSearchOptions(arr);
  };

  useEffect(() => {}, []);
  return (
    <div className="users">
      <Box component="div" sx={{ my: 3 }}>
        <Autocomplete
          freeSolo
          id="usersSearch"
          disableClearable
          onKeyUp={(e) => search(e.target.value)}
          options={users.map((user) => user.email)}
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
        {searchOptions.map((user) => (
          <Grid item md={6} xs={12} lg={4} key={user.email}>
            <User user={user} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Users;
