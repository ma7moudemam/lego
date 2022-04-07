import React from 'react'

import  "./ProductCard.css";
import CardImg from './img/1.jpg'
import ProductFilter from './ProductFilter';

export default function ProductCard() {

  return (
    <>
    <div className="container">

        {/* <!-- breadcrumb --> */}
        <section className="breadcrumb-navigator">
            <ul className="breadcrumb">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>Shop Now</li>
            </ul>
        </section>

        {/* <!-- Shop Now --> */}
        <section className="shop-now ">

            {/* <!-- Filter button at max-width:786px --> */}
            <div className="filter-btn">
                <button id="filter-btn"><a href={<ProductFilter />}>Filter</a></button>
            </div>

            {/* <!-- accordion-filter --> */}
            <section className="filter">

                <ul className="accordion-menu">
                    <li id="header-filter">
                        <p><a href="#">Reset All</a></p>
                    </li>
                    <li>
                        <input type="checkbox" id="producttype" />
                        <label for="producttype">PRODUCTTYPE <i className="fas fa-chevron-down"></i></label>
                        <section className="filter-content">
                            <input type="checkbox" id="sets" name="sets" value="" />
                            <label for="sets"> Sets [48]</label><br></br>
                            <input type="checkbox" id="polybag" name="polybag" value="" />
                            <label for="polybag"> Polybag [2]</label>
                        </section>
                    </li>
                    <li>
                        <input type="checkbox" id="age" />
                        <label for="age"> AGE <i className="fas fa-chevron-down"></i></label>
                        <section className="filter-content">
                            <input type="checkbox" id="max-4" name="max-4" value="" />
                            <label for="max-4"> 4+ [1]</label><br></br>
                            <input type="checkbox" id="max-6" name="max-6" value="" />
                            <label for="max-6"> 6+ [2]</label><br></br>
                            <input type="checkbox" id="max-9" name="max-9" value="" />
                            <label for="max-9"> 9+ [1]</label><br></br>
                        </section>
                    </li>
                    <li>
                        <input type="checkbox" id="price" />
                        <label for="price"> PRICE <i className="fas fa-chevron-down"></i></label>
                        <section className="filter-content">
                            <input type="checkbox" id="max-25" name="max-25" value="" />
                            <label for="max-25"> $0 - $25 [19]</label><br></br>
                            <input type="checkbox" id="max-50" name="max-50" value="" />
                            <label for="max-50">$25 - $50 [18]</label><br></br>
                            <input type="checkbox" id="max-75" name="max-75" value="" />
                            <label for="max-75"> $50 - $75 [7]</label><br></br>
                            <input type="checkbox" id="max-100" name="max-100" value="" />
                            <label for="max-100"> $75 - $100 [6]</label><br></br>
                            <input type="checkbox" id="min-100" name="min-100" value="" />
                            <label for="min-100"> $100+ [1]</label><br></br>

                        </section>
                    </li>
                    <li>
                        <input type="checkbox" id="featured" />
                        <label for="featured">FEATURED <i className="fas fa-chevron-down"></i></label>
                        <section className="filter-content">
                            <input type="checkbox" id="new" name="new" value="" />
                            <label for="new"> New [8]</label><br></br>
                            <input type="checkbox" id="retiring-soon" name="retiring-soon" value="" />
                            <label for="retiring-soon"> Retiring soon [1]</label>
                        </section>
                    </li>
                    <li>
                        <input type="checkbox" id="availability" />
                        <label for="availability">AVAILABILITY <i className="fas fa-chevron-down"></i></label>
                        <section className="filter-content">
                            <input type="checkbox" id="out-of-Stock" name="out-of-Stock" value="" />
                            <label for="out-of-Stock"> Out of Stock [39]</label><br></br>
                            <input type="checkbox" id="available-now" name="available-now" value="" />
                            <label for="available-now"> Available Now [12]</label>
                        </section>
                    </li>
                    <li>
                        <input type="checkbox" id="rating" />
                        <label for="rating">RATING<i className="fas fa-chevron-down"></i></label>
                        <section className="filter-content">
                            <input type="checkbox" id="up-2-star" name="up-2-star" value="" />
                            <label for="up-2-star">
                                <span><i className="fas fa-star"></i></span>
                                <span><i className="fas fa-star"></i></span>
                                <span><i className="far fa-star"></i></span>
                                <span><i className="far fa-star"></i></span>
                                <span><i className="far fa-star"></i></span>
                                <span>[19]</span>
                            </label><br></br>
                            <input type="checkbox" id="up-4-star" name="up-4-star" value="" />
                            <label for="up-4-star">
                                <span><i className="fas fa-star"></i></span>
                                <span><i className="fas fa-star"></i></span>
                                <span><i className="fas fa-star"></i></span>
                                <span><i className="fas fa-star"></i></span>
                                <span><i className="far fa-star"></i></span>
                                <span>[3]</span>
                            </label>
                        </section>
                    </li>
                </ul>

            </section>

            {/* <!-- cards section --> */}
            <section className="cards">

                {/* <!-- cards-header-section --> */}
                <div className="cards-header-section">
                    <span>Showing 1 - 17 of 51 results</span>
                </div>

                {/* <!-- cards ccontainer --> */}
                <div className="cards-container">

                    <div className="card">
                        <div className="add-to-wishlist">
                            <span><i className="far fa-heart"></i></span>
                            <span>Add to wish list</span>
                        </div>
                        <img src={CardImg} className="card-img" />
                        <div className="new-item">new</div>
                        <div className="card-name">
                            <p><a href="#">Heartlake City Park</a></p>
                        </div>
                        <span><i className="fas fa-star"></i></span>
                        <div className="card-price">$79.99</div>
                        <button className="card-button-exist"><a href="#">Add to Bag</a></button>
                    </div>

                    <div className="card">
                        <div className="add-to-wishlist">
                            <span><i className="far fa-heart"></i></span>
                            <span>Add to wish list</span>
                        </div>
                        <img src={CardImg}  className="card-img" />
                        <div className="offer-item">20% off</div>
                        <div className="card-name">
                            <p><a href="#">Vet Clinic Ambulance</a></p>
                        </div>
                        <span><i className="fas fa-star"></i></span>
                        <div className="card-price">$79.99</div>
                        <button className="card-button-out">Out of Stock</button>
                    </div>

                    <div className="card">
                        <div className="add-to-wishlist">
                            <span><i className="far fa-heart"></i></span>
                            <span>Add to wish list</span>
                        </div>
                        <img src={CardImg}  className="card-img" />
                        <div className="offer-item">20% off</div>
                        <div className="card-name">
                            <p><a href="#">Vet Clinic Ambulance</a></p>
                        </div>
                        <span><i className="fas fa-star"></i></span>
                        <div className="card-price">$79.99</div>
                        <button className="card-button-out">Out of Stock</button>
                    </div>

{/* ******************************************************************************************* */}
                    <div className="card">
                        <div className="add-to-wishlist">
                            <span><i className="far fa-heart"></i></span>
                            <span>Add to wish list</span>
                        </div>
                        <img src={CardImg}  className="card-img" />
                        <div className="new-item">new</div>
                        <div className="card-name">
                            <p><a href="#">Heartlake City Park</a></p>
                        </div>
                        <span><i className="fas fa-star"></i></span>
                        <div className="card-price">$79.99</div>
                        <button className="card-button-exist"><a href="#">Add to Bag</a></button>
                    </div>

                    <div className="card">
                        <div className="add-to-wishlist">
                            <span><i className="far fa-heart"></i></span>
                            <span>Add to wish list</span>
                        </div>
                        <img src={CardImg}  className="card-img" />
                        <div className="offer-item">20% off</div>
                        <div className="card-name">
                            <p><a href="#">Vet Clinic Ambulance</a></p>
                        </div>
                        <span><i className="fas fa-star"></i></span>
                        <div className="card-price">$79.99</div>
                        <button className="card-button-out">Out of Stock</button>
                    </div>

{/* ******************************************************************************************* */}
                </div>
                
                {/* <!-- sliding --> */}
                <div className="sliding">
                    <div className="slider-link">
                        <span><a href="#"><i className="fas fa-angle-left"></i></a></span>
                        <span className="slider-number"><a href="#">1</a></span>
                        <span className="slider-number"><a href="#">2</a></span>
                        <span className="slider-number"><a href="#">3</a></span>
                        <span><a href="#"><i className="fas fa-angle-right"></i></a></span>
                    </div>
                    <div className="show-more-less">
                        <button className="showBtn"><a href="#">Show More</a></button>
                    </div>
                </div>

            </section>

        </section>

    </div>
    </>
  )
}


