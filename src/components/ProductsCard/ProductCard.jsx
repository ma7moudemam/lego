import React, { useEffect, useState } from "react";

import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CustomFilter from "./../CustomFilter/CustomFilter";
import Cards from "./Cards";

import "./ProductCard.css";
import { getProduct, getProductDetails } from "../../network/productsAPIs";

function handleClick(event) {
	event.preventDefault();
}

export default function ProductCard() {
	const [page, setPage] = useState(1);
	const [count, setCount] = useState(1);
	const [products, setProducts] = useState([]);
	const [filterValues, setFilterValues] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (event, value) => {
		setPage(value);
	};

	useEffect(() => {
		// setIsLoading(true);
		getProduct(9, page, filterValues)
			.then((res) => {
				setProducts(res.data.products);
				setCount(res.data.count);
				// setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
				// setIsLoading(false);
			});
		return () => {};
	}, [page]);
	useEffect(() => {
		// setIsLoading(true);
		getProduct(9, page, filterValues)
			.then((res) => {
				setProducts(res.data.products);
				setCount(res.data.count);
				setPage(1);
				// setIsLoading(false);
			})
			.catch((err) => console.log(err));
		return () => {};
	}, [filterValues]);

	const handelFilterChange = (filterValues) => {
		setFilterValues(filterValues);
	};

	return (
		<>
			{isLoading && (
				<div className="inner-loader">
					<h1>Logging you in please hold</h1>
					<div className="lds-ring">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			)}
			{!isLoading && (
				<div className="shop-container">
					<div role="presentation" className="breadcrumbs" onClick={handleClick}>
						<Breadcrumbs
							separator={<NavigateNextIcon fontSize="small" />}
							sx={{ pt: 1 }}
							aria-label="breadcrumb"
						>
							<Link underline="hover" color="inherit" href="/">
								<Typography color="#006db7">Home</Typography>
							</Link>
							<Typography color="text.primary">Shop Now</Typography>
						</Breadcrumbs>
					</div>
					<section className="shop-now ">
						<div className="filter">
							<CustomFilter handelFilterChange={handelFilterChange} />
						</div>
						<section className="cards">
							{/* <!-- cards-header-section --> */}
							<div className="cards-header-section">
								<span>
									Showing {count < 9 ? count : 9} of {count} Products
								</span>
							</div>
							{/* <!-- cards ccontainer --> */}
							<Grid container>
								{products.map((item) => (
									<Grid item xs={12} sm={6} md={4} lg={3}>
										<Cards product={item} key={item._id} />
									</Grid>
								))}
							</Grid>

							{/* <!-- sliding --> */}
							<div className="sliding">
								<Stack spacing={2}>
									<Pagination count={Math.ceil(count / 9) || 1} card={page} onChange={handleChange} />
								</Stack>
							</div>
						</section>
					</section>
				</div>
			)}
		</>
	);
}
