import React, { useEffect, useState } from "react";

import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import Filter from "./Filter";
import Cards from "./Cards";
// import ProductFilter from "./ProductFilter";

import "./ProductCard.css";
import { getProduct, getProductDetails } from "../../network/productsAPIs";

function handleClick(event) {
  event.preventDefault();
}

export default function ProductCard() {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [products, setProducts] = useState([]);
  const [filterValues , setFilterValues]=useState({});
 
    const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
      getProduct(3, page,filterValues)
      .then((res) => {
        setProducts(res.data.products)
        setCount(res.data.count)
      })
      .catch((err) => console.log(err));

  }, [page]);
  useEffect(() => {
    getProduct(3, page,filterValues)
    .then((res) => {
      setProducts(res.data.products)
      setCount(res.data.count)
      setPage(1)
    })
    .catch((err) => console.log(err));

}, [filterValues]);
  

 
  useEffect(() => {
    getProduct(5, page,filterValues)
    .then((res) => setCount(res.data.count))
    .catch((err) => console.log(err));

  }, []);

  const handelFilterChange = filterValues =>{
    setFilterValues(filterValues);
  }

  return (
    <>
      <div className="container">
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs sx={{ pt: 1 }} aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              <Typography color="text.primary">Home</Typography>
            </Link>
            <Typography color="text.primary">Shop Now</Typography>
          </Breadcrumbs>
        </div>

        <section className="shop-now ">
          <Filter  handelFilterChange={handelFilterChange}/>

          <section className="cards">
            {/* <!-- cards-header-section --> */}
            <div className="cards-header-section">
              <span>Showing 1 - {3} of {count} results</span>
            </div>
            {/* <!-- cards ccontainer --> */}
            <div className="cards-container">
              {
                products.map(item => <Cards product={item} key={item._id} />)
              }
            </div>

            {/* <!-- sliding --> */}
            <div className="sliding">
              <Stack spacing={2}>
                <Pagination count={Math.ceil(count/3) || 1} card={page} onChange={handleChange} />
              </Stack>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
