import React, { useEffect, useState } from "react";
import { getAllCategory } from "../../network/productsAPIs";

export default function Filter(props) {
  const [categories, setCategories] = useState([]);
  const [priceRangeFilter, setPriceRangeFilter] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState([]);
  const [isReset, setReset] = useState(false);

  const handelPriceRangeFilter = (e) => {
    setReset(false);
    if (e.target.checked) {
      setPriceRangeFilter([...priceRangeFilter, e.target.name]);
    } else {
      setPriceRangeFilter(
        priceRangeFilter.filter((value) => value !== e.target.name)
      );
    }
  };

  const handelCategoryFilter = (e) => {
    setReset(false);
    if (e.target.checked) {
      setCategoryFilter([...categoryFilter, e.target.value]);
    } else {
      setCategoryFilter(
        categoryFilter.filter((value) => value !== e.target.value)
      );
    }
  };

  const handelRatingFilter = (e) => {
    setReset(false);
    if (e.target.checked) {
      setRatingFilter([...ratingFilter, e.target.value]);
    } else {
      setRatingFilter(ratingFilter.filter((value) => value !== e.target.value));
    }
  };

  useEffect(() => {
    //SEND REQUEST ON FILTER CHANGE
    props.handelFilterChange({
      priceRange: [...priceRangeFilter],
      category: [...categoryFilter],
      rating: [...ratingFilter],
    });
  }, [priceRangeFilter, categoryFilter, ratingFilter]);

  useEffect(() => {
    // Get All category
    getAllCategory().then((res) => setCategories(res.data.body));
  }, []);

  useEffect(() => {
    // Get All category
    if (isReset) {
      setPriceRangeFilter([]);
      setCategoryFilter([]);
      setRatingFilter([]);
    }
  }, [isReset]);

  return (
    <div>
      {" "}
      {/* <!-- Filter button at max-width:786px --> */}
      <div className="filter-btn">
        <button id="filter-btn">
          {/* <a href={<ProductFilter />}>Filter</a> */}
        </button>
      </div>
      {/* <!-- accordion-filter --> */}
      <section className="filter">
        <ul className="accordion-menu">
          <li id="header-filter">
            <p>
              <span
                onClick={() => setReset(true)}
                style={{ cursor: "pointer" }}
              >
                Reset All
              </span>
            </p>
          </li>
          <li>
            <input type="checkbox" id="producttype" />
            <label htmlFor="producttype">
              PRODUCTTYPE <i className="fas fa-chevron-down"></i>
            </label>
            <section className="filter-content">
              {categories.map((catgory) => (
                <div key={catgory._id}>
                  <input
                    type="checkbox"
                    checked={categoryFilter.includes(String(catgory._id))}
                    id={catgory._id}
                    name={catgory.name}
                    value={catgory._id}
                    onChange={handelCategoryFilter}
                  />
                  <label htmlFor={catgory._id}> {catgory.name}</label>
                  <br></br>
                </div>
              ))}
            </section>
          </li>
          <li>
            {/* <input type="checkbox" id="age" />
            <label htmlFor="age">
              {" "}
              AGE <i className="fas fa-chevron-down"></i>
            </label>
            <section className="filter-content">
              <input type="checkbox" id="max-4" name="max-4" value="" />
              <label htmlFor="max-4"> 4+ [1]</label>
              <br></br>
              <input type="checkbox" id="max-6" name="max-6" value="" />
              <label htmlFor="max-6"> 6+ [2]</label>
              <br></br>
              <input type="checkbox" id="max-9" name="max-9" value="" />
              <label htmlFor="max-9"> 9+ [1]</label>
              <br></br>
            </section> */}
          </li>
          <li>
            <input type="checkbox" id="price" />
            <label htmlFor="price">
              {" "}
              PRICE <i className="fas fa-chevron-down"></i>
            </label>
            <section className="filter-content">
              {/* <br></br> */}
              <input
                type="checkbox"
                id="max-25"
                name="0-25"
                value=""
                checked={priceRangeFilter.includes("0-25")}
                onChange={handelPriceRangeFilter}
              />
              <label htmlFor="max-25"> $0 - $25 </label>
              <br></br>
              <input
                type="checkbox"
                id="max-50"
                name="25-50"
                value=""
                checked={priceRangeFilter.includes("25-50")}
                onChange={handelPriceRangeFilter}
              />
              <label htmlFor="max-50">$25 - $50 </label>
              <br></br>
              <input
                type="checkbox"
                id="max-75"
                name="50-75"
                value=""
                onChange={handelPriceRangeFilter}
                checked={priceRangeFilter.includes("50-75")}
              />
              <label htmlFor="max-75"> $50 - $75 </label>
              <br></br>
              <input
                type="checkbox"
                id="max-100"
                name="75-100"
                value=""
                onChange={handelPriceRangeFilter}
                checked={priceRangeFilter.includes("75-100")}
              />
              <label htmlFor="max-100"> $75 - $100 </label>
              <br></br>
              <input
                type="checkbox"
                id="min-100"
                name="100-200"
                value=""
                onChange={handelPriceRangeFilter}
                checked={priceRangeFilter.includes("100-200")}
              />
              <label htmlFor="min-100"> $100+ </label>
              <br></br>
            </section>
          </li>
          <li>
            {/* <input type="checkbox" id="featured" />
            <label htmlFor="featured">
              FEATURED <i className="fas fa-chevron-down"></i>
            </label>
            <section className="filter-content">
              <input type="checkbox" id="new" name="new" value="" />
              <label htmlFor="new"> New [8]</label>
              <br></br>
              <input
                type="checkbox"
                id="retiring-soon"
                name="retiring-soon"
                value=""
              />
              <label htmlFor="retiring-soon"> Retiring soon [1]</label>
            </section> */}
          </li>
          <li>
            {/* <input type="checkbox" id="availability" />
            <label htmlFor="availability">
              AVAILABILITY <i className="fas fa-chevron-down"></i>
            </label>
            <section className="filter-content">
              <input
                type="checkbox"
                id="out-of-Stock"
                name="out-of-Stock"
                value=""
              />
              <label htmlFor="out-of-Stock"> Out of Stock [39]</label>
              <br></br>
              <input
                type="checkbox"
                id="available-now"
                name="available-now"
                value=""
              />
              <label htmlFor="available-now"> Available Now [12]</label>
            </section> */}
          </li>
          <li>
            <input type="checkbox" id="rating" />
            <label htmlFor="rating">
              RATING<i className="fas fa-chevron-down"></i>
            </label>
            <section className="filter-content">
              <input
                type="checkbox"
                id="up-2-star"
                name="up-2-star"
                checked={ratingFilter.includes("2")}
                value="2"
                onChange={handelRatingFilter}
              />
              <label htmlFor="up-2-star">
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="far fa-star"></i>
                </span>
                <span>
                  <i className="far fa-star"></i>
                </span>
                <span>
                  <i className="far fa-star"></i>
                </span>
                {/* <span></span> */}
              </label>
              <br></br>
              <input
                type="checkbox"
                id="up-4-star"
                name="up-4-star"
                value="4"
                checked={ratingFilter.includes("4")}
                onChange={handelRatingFilter}
              />
              <label htmlFor="up-4-star">
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="far fa-star"></i>
                </span>
                {/* <span></span> */}
              </label>
            </section>
          </li>
        </ul>
      </section>
    </div>
  );
}
