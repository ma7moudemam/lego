import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import allyprops from "../Tabs/allyprops";
import { useTheme } from "@mui/material/styles";
import TabPanel from "../Tabs/TabPanel";
import EditIcon from "@mui/icons-material/Edit";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
import FormData from "form-data";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Search } from "@mui/icons-material";
import { useAutocomplete } from "@mui/base/AutocompleteUnstyled";
import ProductCard from "./ProductCard";

const Input = styled("input")({
  display: "none",
});
const Label = styled("label")({
  display: "block",
});

const SearchInput = styled("input")(({ theme }) => ({
  width: 200,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.getContrastText(theme.palette.background.paper),
}));

const Listbox = styled("ul")(({ theme }) => ({
  width: 200,
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: "absolute",
  listStyle: "none",
  backgroundColor: theme.palette.background.paper,
  overflow: "auto",
  maxHeight: 200,
  border: "1px solid rgba(0,0,0,.25)",
  '& li[data-focus="true"]': {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

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
  const [openModel, setOpenModel] = useState(false);
  const [productDetails, setProductDetails] = useState({});
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchOptions, setSearchOptions] = useState([...products]);
  const [selectedFile, setSelectedFile] = useState([]);
  const [preview, setPreview] = useState([]);
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: searchOptions,
    getOptionLabel: (option) => option.name,
  });
  let imgPreviewer;
  useEffect(() => {
    // imgPreviewer = document.querySelectorAll(".image-previewer");
    // console.log(imgPreviewer);
    if (!selectedFile) {
      setPreview([]);
      // [...imgPreviewer].forEach((img) => {
      //   console.log(img);
      //   img.remove();
      // });
      return;
    }

    let objectUrl;
    for (let i = 0; i < selectedFile.length; i++) {
      // document.querySelectorAll(".image-previewer")[i].remove()
      objectUrl = URL.createObjectURL(selectedFile[i]);
      preview.push(objectUrl);
    }
    // free memory when ever this component is unmounted
    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [selectedFile]);

  /************ delete handlers ************* */
  const deleteConfirmation = (id, name) => {
    setProductDetails({
      id,
      name,
    });
    setOpenModel(true);
  };
  const deleteRejection = () => setOpenModel(false);

  const deleteProduct = () => {
    axios
      .delete("http://localhost:8080/dashboard/products", {
        data: { id: productDetails.id },
      })
      .then((res) => {
        console.log(res);
        let index = searchOptions.findIndex(
          (element) => element._id === productDetails.id
        );
        products.splice(index, 1);
        setSearchOptions(products);
        openNotification(res.data.data);
      })
      .catch((err) => {
        openErrorMsg(err.response.data.Error);
      });
    setOpenModel(false);
  };
  /************ delete handlers ************* */

  /********* tabs handlers******** */
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  /********* tabs handlers******** */

  /**** notifications */
  const [notification, setnotification] = useState(false);
  const [addCategoryStatus, setAddCategoryStatus] = useState("test");
  const [addProductNotify, setAddProductNotify] = useState(false);

  const openNotification = (message) => {
    setAddCategoryStatus(message);
    setnotification(true);
  };

  const hideNotification = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setnotification(false);
  };

  const openErrorMsg = (message) => {
    setAddCategoryStatus(message);
    setAddProductNotify(true);
  };
  const hideErrorMsg = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAddProductNotify(false);
  };
  /**** notifications */
  const search = (searchValue) => {
    let arr = products.filter((product) => product.name.includes(searchValue));
    setSearchOptions(arr);
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/dashboard/category")
      .then((res) => {
        // setCategories(res.data)
        setCategories(res.data.body);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    // products
    axios
      .get("http://localhost:8080/dashboard/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    setSearchOptions(products);
  }, [products]);
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
              {/* <Autocomplete
                freeSolo
                id="updateSearch"
                disableClearable
                options={products.map((product) => product.name)}
                onKeyUp={(event) => search(event.target.value)}
                sx={{ backgroundColor: "#fff", margin: "20px 0" }}
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
              /> */}
              <div {...getRootProps()}>
                <Label {...getInputLabelProps()}>useAutocomplete</Label>
                <SearchInput
                  {...getInputProps()}
                  onKeyUp={(event) => search(event.target.value)}
                />
              </div>
              {groupedOptions.length > 0 ? (
                <Listbox {...getListboxProps()}>
                  {groupedOptions.map((option, index) => (
                    <li {...getOptionProps({ option, index })} key={option._id}>
                      {option.name}
                    </li>
                  ))}
                </Listbox>
              ) : null}
              <Grid container spacing={3} sx={{ my: 2 }}>
                {searchOptions.length > 0 ? (
                  searchOptions.map((product, index) => (
                    <ProductCard
                      product={product}
                      categories={categories}
                      deleteConfirm={deleteConfirmation}
                      showNotify={openNotification}
                      showErr={openErrorMsg}
                      key={product._id}
                    />
                  ))
                ) : (
                  <Typography
                    component="div"
                    sx={{ textAlign: "center", width: "100%", m: 2 }}
                  >
                    <Alert severity="warning">
                      There is No products in your database
                    </Alert>
                  </Typography>
                )}
              </Grid>
              <Modal
                open={openModel}
                onClose={deleteRejection}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    R u sure u want to delete{" "}
                    <span style={{ color: "orange" }}>
                      {productDetails.name}
                    </span>
                    ?
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => deleteProduct()}
                      sx={{ mr: "1rem" }}
                    >
                      yes i'm sure
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={deleteRejection}
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
                images: [""],
                price: 0,
                amount: 0,
                sold: 0,
                rating: 0,
                category: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("product name is Required"),
                images: Yup.array()
                  .nullable()
                  .required(" you should select at least one image"),
                price: Yup.number().required("price is required"),
                amount: Yup.number().required(" amount is Required"),
                category: Yup.number().required("category is required"),
              })}
              onSubmit={(values, { resetForm }) => {
                let data = new FormData();
                data.append("productName", values.name.toLowerCase());
                data.append("price", values.price);
                data.append("amount", values.amount);
                data.append("sold", values.sold);
                data.append("rating", values.rating);
                data.append("category", values.category);
                [...values.images].forEach((image) => {
                  data.append("images", image);
                });

                let config = {
                  headers: {
                    "content-type": "multipart/form-data",
                  },
                  onUploadProgress: (progressEvent) => {
                    console.log(
                      "progress:" +
                        Math.round(
                          (progressEvent.loaded / progressEvent.total) * 100
                        ) +
                        "%"
                    );
                  },
                };
                axios
                  .post(
                    "http://localhost:8080/dashboard/products",
                    data,
                    config
                  )
                  .then((response) => {
                    console.log(response);
                    openNotification(response.data.message);
                    resetForm();
                    setPreview([]);
                    // [...imgPreviewer].forEach((img) => {
                    //   img.remove();
                    // });
                    // let imgSrc = values.images.map((img) => {
                    //   return (
                    //     new Date().toLocaleDateString().replace(/\//g, "-") +
                    //     "-" +
                    //     img.name
                    //   );
                    // });
                    // setProducts([
                    //   ...products,
                    //   {
                    //     ...values,
                    //     images: imgSrc,
                    //     _id: imgSrc,
                    //   },
                    // ]);
                    // console.log(products);
                  })
                  .catch((error) => {
                    console.log("err");

                    setPreview([]);

                    openErrorMsg(
                      "Faild to upload your images's size is too large"
                    );
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
                      <FormControl
                        sx={{ width: "100%" }}
                        error={
                          props.touched.category && props.errors.category
                            ? true
                            : false
                        }
                      >
                        <InputLabel id="category">Category</InputLabel>
                        <Select
                          fullWidth
                          labelId="category"
                          id="category"
                          label="Category"
                          name="category"
                          {...props.getFieldProps("category")}
                        >
                          <MenuItem value="" selected>
                            <em>None</em>
                          </MenuItem>
                          {categories.map((category) => (
                            <MenuItem value={category._id} key={category._id}>
                              {category.name}
                            </MenuItem>
                          ))}
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
                          multiple
                          onChange={(e) => {
                            props.setFieldValue("images", [...e.target.files]);
                            if (
                              !e.target.files ||
                              e.target.files.length === 0
                            ) {
                              setSelectedFile(undefined);
                              return;
                            }
                            // i need to delete the images from image list
                            // setSelectedFile([]);
                            setSelectedFile([...e.target.files]);
                            // setImgs([...e.target.files]);
                            console.log(selectedFile);
                          }}
                          onBlur={props.handleBlur}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <PhotoCamera />
                          <p style={{ margin: "0" }}>Upload pictures</p>
                        </IconButton>
                      </label>
                      <FormHelperText sx={{ color: "red" }}>
                        {props.touched.images && props.errors.images
                          ? `${props.errors.images}`
                          : null}
                      </FormHelperText>
                      <Button variant="contained" type="submit" color="success">
                        Add Product
                      </Button>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      {selectedFile.length > 0 ? (
                        <ImageList
                          sx={{
                            width: "100%",
                            height: 300,
                          }}
                          cols={3}
                          rowHeight={164}
                        >
                          {preview.map((item) => (
                            <ImageListItem
                              key={item}
                              className="image-previewer"
                            >
                              <img
                                src={`${item}`}
                                srcSet={`${item}`}
                                alt={item}
                                loading="lazy"
                              />
                            </ImageListItem>
                          ))}
                        </ImageList>
                      ) : (
                        <p>selected images will show here</p>
                      )}
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Formik>
          </TabPanel>
        </SwipeableViews>
        <Snackbar
          open={notification}
          autoHideDuration={3000}
          onClose={hideNotification}
          severity="success"
        >
          <Alert
            onClose={hideNotification}
            severity="success"
            sx={{ width: "100%" }}
          >
            {addCategoryStatus}
          </Alert>
        </Snackbar>
        <Snackbar
          open={addProductNotify}
          autoHideDuration={3000}
          onClose={hideErrorMsg}
          severity="error"
        >
          <Alert onClose={hideErrorMsg} severity="error" sx={{ width: "100%" }}>
            {addCategoryStatus}
          </Alert>
        </Snackbar>
      </Box>
    </div>
  );
}

export default Products;
