import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import allyprops from "../Tabs/allyprops";
import { useTheme } from "@mui/material/styles";
import TabPanel from "../Tabs/TabPanel";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import testImg from "./../../../assets/imgs/City-Home-202201-Hero-Standard-Small.jpg";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
const Input = styled("input")({
  display: "none",
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Products() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [editable, setEditable] = useState(false);
  const [open, setOpen] = useState(false);
  const [productId, setProductId] = useState(null);
  const [products, setProducts] = useState([
    {
      _id: 1,
      name: "lego batman",
      price: "22.5",
      stock: "30",
      category: "dc",
    },
    {
      _id: 2,
      name: "lego joker",
      price: "25",
      stock: "50",
      category: "dc",
    },
    { _id: 3, name: "spiderman", price: "24", stock: "33", category: "marvel" },
    { _id: 4, name: "spiderman", price: "24", stock: "33", category: "marvel" },
    { _id: 5, name: "spiderman", price: "24", stock: "33", category: "marvel" },
    { _id: 6, name: "spiderman", price: "24", stock: "33", category: "marvel" },
    { _id: 7, name: "spiderman", price: "24", stock: "33", category: "marvel" },
    { _id: 8, name: "spiderman", price: "24", stock: "33", category: "marvel" },
    { _id: 9, name: "spiderman", price: "24", stock: "33", category: "marvel" },
  ]);
  const [imgs, setImgs] = useState([]);

  const handleOpen = (id) => {
    setProductId(id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const deleteProduct = () => {
    console.log(productId, "deleted");
    setOpen(false);
  };
  useEffect(() => {
    // axios.get("http://localhost:8080/")
  }, []);
  return (
    <div className="products">
      <Tabs
        orientation="horizontal"
        value={value}
        variant="fullWidth"
        onChange={handleChange}
        aria-label="Horizontal tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          label="Update"
          icon={<EditIcon color="primary" />}
          {...allyprops(0)}
        />
        <Tab
          label="Add"
          icon={<AddBoxIcon color="success" />}
          {...allyprops(1)}
        />
      </Tabs>
      <Box component="div" sx={{ paddingTop: "1rem" }}>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0}>
            <Box component="div">
              <Autocomplete
                freeSolo
                id="updateSearch"
                disableClearable
                options={products.map((product) => product.name)}
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
              <Grid container spacing={3} sx={{ my: 2 }}>
                {products.map((product, index) => (
                  <Grid item xs={12} md={6} lg={4} key={index}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={testImg}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          contentEditable={editable ? true : false}
                          component="div"
                        >
                          {product.name}
                        </Typography>
                        <Typography
                          variant="h5"
                          contentEditable={editable ? true : false}
                        >
                          {product.price}$
                        </Typography>
                        <Typography
                          variant="body2"
                          contentEditable={editable ? true : false}
                          color="text.secondary"
                        >
                          stock:{product.stock}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          onClick={() => setEditable(!editable)}
                        >
                          {editable ? "Save" : "Edit"}
                        </Button>
                        <Button
                          size="small"
                          onClick={() => handleOpen(product._id)}
                        >
                          Delete
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    R u sure u want to delete this product?
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => deleteProduct(1)}
                      sx={{ mr: "1rem" }}
                    >
                      yes i'm sure
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                  </Typography>
                </Box>
              </Modal>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Formik
              initialValues={{
                name: "",
                images: "",
                price: 0,
                amount: 0,
                sold: 0,
                rating: 0,
                category: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("product name is Required"),
                images: Yup.string().required(
                  " you should select at least one image"
                ),
                price: Yup.number().required("price is required"),
                amount: Yup.number().required(" amount is Required"),
                category: Yup.string().required("category is required"),
              })}
              onSubmit={(values) => {
                console.log("submitted");
                // console.log(JSON.stringify(values, null, 2));
                // console.log(imgs);
                let data = new FormData();
                data.append("name", values.name);
                data.append("images", values.images);
                data.append("price", values.price);
                data.append("amount", values.amount);
                data.append("sold", values.sold);
                data.append("rating", values.rating);
                data.append("category", values.category);

                // console.log(values);
                let config = {
                  headers: { "content-type": "application/json" },
                };
                axios
                  .post(
                    "http://localhost:8080/dashboard/products",
                    data,
                    config
                  )
                  .then((response) => {
                    console.log(response);
                  })
                  .catch((error) => {
                    console.log("err");
                    console.log(error);
                  });
              }}
            >
              {(props) => (
                <Box
                  component="form"
                  id="addProductForm"
                  onSubmit={props.handleSubmit}
                  sx={{ paddingTop: "35px" }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Product Name"
                        helperText={
                          props.touched.name && props.errors.name
                            ? `${props.errors.name}`
                            : null
                        }
                        error={
                          props.touched.name && props.errors.name ? true : false
                        }
                        {...props.getFieldProps("name")}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        name="price"
                        id="price"
                        label="Price"
                        helperText={
                          props.touched.price && props.errors.price
                            ? `${props.errors.price}`
                            : null
                        }
                        error={
                          props.touched.price && props.errors.price
                            ? true
                            : false
                        }
                        {...props.getFieldProps("price")}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        name="amount"
                        id="amount"
                        label="Product amount"
                        helperText={
                          props.touched.amount && props.errors.amount
                            ? `${props.errors.amount}`
                            : null
                        }
                        error={
                          props.touched.amount && props.errors.amount
                            ? true
                            : false
                        }
                        {...props.getFieldProps("amount")}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormControl sx={{ m: 1, minWidth: 200 }}>
                        <InputLabel id="category">Category</InputLabel>
                        <Select
                          fullWidth
                          labelId="category"
                          id="category"
                          label="Category"
                          error={
                            props.touched.category && props.errors.category
                              ? true
                              : false
                          }
                          {...props.getFieldProps("category")}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value="dc">DC</MenuItem>
                          <MenuItem value="marvel">Marvel</MenuItem>
                          <MenuItem value="warner bros">Warner Bros</MenuItem>
                          <MenuItem value="20th century studios">
                            20th Century Studios
                          </MenuItem>
                        </Select>
                        <FormHelperText sx={{ color: "red" }}>
                          {props.touched.category && props.errors.category
                            ? `${props.errors.category}`
                            : null}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <label htmlFor="images">
                        <Input
                          accept="image/*"
                          id="images"
                          name="images"
                          type="file"
                          onChange={(e) => {
                            console.log(e.target.files[0]);
                            props.setFieldValue("images", e.target.files[0]);
                            // setImgs([...e.target.files]);
                          }}
                          onBlur={props.handleBlur}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <PhotoCamera />
                        </IconButton>
                      </label>
                      <FormHelperText sx={{ color: "red" }}>
                        {props.touched.images && props.errors.images
                          ? `${props.errors.images}`
                          : null}
                      </FormHelperText>
                    </Grid>
                  </Grid>

                  <Button variant="contained" type="submit" color="success">
                    Add Product
                  </Button>
                </Box>
              )}
            </Formik>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}

export default Products;
