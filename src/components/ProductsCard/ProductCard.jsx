import React from "react";

import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import Filter from "./Filter";
import Cards from "./Cards";
// import ProductFilter from "./ProductFilter";

import "./ProductCard.css";

function handleClick(event) {
  event.preventDefault();
}

export default function ProductCard() {
  const [card, setCard] = React.useState('');
  const handleChange = (event, value) => {
    setCard(value);
  };
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   axiosInstance
  //     .get("/products", {
  //       params: {
  //         limit: 5,
  //       },
  //     })
  //     .then((res) => setProducts(res.data))
  //     .catch((err) => console.log(err));

  //   // axiosInstance.post('url' , { name : "test" } , {
  //   //   params: {
  //   //     limit: 5,
  //   //   },
  //   //   headers: {
  //   //     Authorization: "Bearer s5da46s5d43a2s1das5d4as5d4as5dasd",
  //   //   },
  //   // })
  // }, []);

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
          <Filter />

          <section className="cards">
            {/* <!-- cards-header-section --> */}
            <div className="cards-header-section">
              <span>Showing 1 - 17 of 51 results</span>
            </div>
            {/* <!-- cards ccontainer --> */}
            <div className="cards-container">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>

            {/* <!-- sliding --> */}
            <div className="sliding">
              <Stack spacing={2}>
                <Pagination count={10} card={card} onChange={handleChange} />
              </Stack>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
