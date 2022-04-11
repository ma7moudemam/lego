import React, { useState, useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { red } from "@mui/material/colors";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  bcategory: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Categories() {
  const [categories, setCategories] = useState([
    { id: 1, name: "dc", products: [0, 1, 2] },
    { id: 2, name: "marvel", products: [0, 1, 2, 5, 3] },
    { id: 3, name: "paramount", products: [0, 1, 2] },
    { id: 4, name: "netflix", products: [0, 1, 2] },
  ]);
  const [searchOptions, setSearchOptions] = useState([...categories]);
  const [open, setOpen] = useState(false);
  const handleOpen = (id) => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const search = (value) => {
    let arr = categories.filter((category) => category.name.includes(value));
    setSearchOptions(arr);
  };

  return (
    <>
      <Box component="div" sx={{ my: 3 }}>
        <Autocomplete
          freeSolo
          id="categorySearch"
          onKeyUp={(e) => search(e.target.value)}
          disableClearable
          options={categories.map((category) => category.name)}
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Products Number</TableCell>
              <TableCell>Controls</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchOptions.map((category) => (
              <TableRow
                key={category.id}
                sx={{ "&:last-child td, &:last-child th": { bcategory: 0 } }}
              >
                <TableCell>{category.id}</TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.products.length}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", padding: "16px" }}>
                    <IconButton aria-label="dispatch">
                      <CheckIcon color="success" />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={handleOpen}>
                      <DeleteIcon sx={{ color: red[600] }} />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            R u sure u want to delete this Category?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleClose()}
              sx={{ mr: "1rem" }}
            >
              yes i'm sure
            </Button>
            <Button variant="contained" color="success" onClick={handleClose}>
              Cancel
            </Button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default Categories;
