import React,{useEffect,useState} from "react";
import { getAllCategory } from "../../network/productsAPIs";

export default function Filter(props) {
  const [categories  , setCategories ] = useState([])
  const [priceRangeFilter  , setPriceRangeFilter ] = useState([]);
  const [categoryFilter  , setCategoryFilter ] = useState([])
  const [ratingFilter  , setRatingFilter ] = useState([])

  const handelPriceRangeFilter = e =>{
    if(e.target.checked){
        setPriceRangeFilter([...priceRangeFilter,e.target.name ])
    }else{
        setPriceRangeFilter(priceRangeFilter.filter(value=>value!==e.target.name))
    }

  }

  const handelCategoryFilter = e => {
    if(e.target.checked){
      setCategoryFilter([...categoryFilter,e.target.value ])
    }else{
      setCategoryFilter(categoryFilter.filter(value=>value!==e.target.value))
    }
  }

  const handelRatingFilter = e => {
    if(e.target.checked){
      setRatingFilter([...ratingFilter,e.target.value ])
    }else{
      setRatingFilter(ratingFilter.filter(value=>value!==e.target.value))
    }
  }



  useEffect(()=>{
    //SEND REQUEST ON FILTER CHANGE
    props.handelFilterChange({
      priceRange:[...priceRangeFilter],
      category: [...categoryFilter],
      rating:[...ratingFilter]
    })
  },[priceRangeFilter, categoryFilter,ratingFilter])

  useEffect(()=>{
    // Get All category
    getAllCategory().then(res => setCategories(res.data.body) )
  },[]);

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
              <a href="#">Reset All</a>
            </p>
          </li>
          <li>
            <input type="checkbox" id="producttype" />
            <label for="producttype">
              PRODUCTTYPE <i className="fas fa-chevron-down"></i>
            </label>
            <section className="filter-content">
              {
                categories.map(catgory => 
                  <div key={catgory._id}>
                    <input type="checkbox" id={catgory._id} name={catgory.name} value={catgory._id}
                    onChange={handelCategoryFilter}
                    />
                    <label for={catgory._id}> {catgory.name}[{catgory.products.length}]</label>
                    <br></br>
                  </div>
                )
              }
            </section>
          </li>
          <li>
            {/* <input type="checkbox" id="age" />
            <label for="age">
              {" "}
              AGE <i className="fas fa-chevron-down"></i>
            </label>
            <section className="filter-content">
              <input type="checkbox" id="max-4" name="max-4" value="" />
              <label for="max-4"> 4+ [1]</label>
              <br></br>
              <input type="checkbox" id="max-6" name="max-6" value="" />
              <label for="max-6"> 6+ [2]</label>
              <br></br>
              <input type="checkbox" id="max-9" name="max-9" value="" />
              <label for="max-9"> 9+ [1]</label>
              <br></br>
            </section> */}
          </li>
          <li>
            <input type="checkbox" id="price" />
            <label for="price">
              {" "}
              PRICE <i className="fas fa-chevron-down"></i>
            </label>
            <section className="filter-content">
              <br></br>
              <input type="checkbox" id="max-25" name="0-25" value=""  onChange={handelPriceRangeFilter}/>
              <label for="max-25"> $0 - $25 [19]</label>
              <br></br>
              <input type="checkbox" id="max-50" name="25-50" value="" onChange={handelPriceRangeFilter}/>
              <label for="max-50">$25 - $50 [18]</label>
              <br></br>
              <input type="checkbox" id="max-75" name="50-75" value="" onChange={handelPriceRangeFilter} />
              <label for="max-75"> $50 - $75 [7]</label>
              <br></br>
              <input type="checkbox" id="max-100" name="75-100" value="" onChange={handelPriceRangeFilter} />
              <label for="max-100"> $75 - $100 [6]</label>
              <br></br>
              <input type="checkbox" id="min-100" name="100-200" value="" onChange={handelPriceRangeFilter} />
              <label for="min-100"> $100+ [1]</label>
              <br></br>
            </section>
          </li>
          <li>
            {/* <input type="checkbox" id="featured" />
            <label for="featured">
              FEATURED <i className="fas fa-chevron-down"></i>
            </label>
            <section className="filter-content">
              <input type="checkbox" id="new" name="new" value="" />
              <label for="new"> New [8]</label>
              <br></br>
              <input
                type="checkbox"
                id="retiring-soon"
                name="retiring-soon"
                value=""
              />
              <label for="retiring-soon"> Retiring soon [1]</label>
            </section> */}
          </li>
          <li>
            {/* <input type="checkbox" id="availability" />
            <label for="availability">
              AVAILABILITY <i className="fas fa-chevron-down"></i>
            </label>
            <section className="filter-content">
              <input
                type="checkbox"
                id="out-of-Stock"
                name="out-of-Stock"
                value=""
              />
              <label for="out-of-Stock"> Out of Stock [39]</label>
              <br></br>
              <input
                type="checkbox"
                id="available-now"
                name="available-now"
                value=""
              />
              <label for="available-now"> Available Now [12]</label>
            </section> */}
          </li>
          <li>
            <input type="checkbox" id="rating" />
            <label for="rating">
              RATING<i className="fas fa-chevron-down"></i>
            </label>
            <section className="filter-content">
              <input type="checkbox" id="up-2-star" name="up-2-star" value="2" onChange={handelRatingFilter} />
              <label for="up-2-star">
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
                <span>[19]</span>
              </label>
              <br></br>
              <input type="checkbox" id="up-4-star" name="up-4-star" value="4" onChange={handelRatingFilter}/>
              <label for="up-4-star">
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
                <span>[3]</span>
              </label>
            </section>
          </li>
        </ul>
      </section>
    </div>
  );
}
