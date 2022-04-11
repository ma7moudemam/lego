import React from "react";
import Women from "../../assets/images/woman.png";
import HomeCard from './HomeCard'
import { useState , useEffect } from "react";
import axios from "axios";

import "./HomePage.css";

export default function HomePage() {
  // const [randomProducts, setRandomProducts] = useState([]);

  // useEffect(() => {
  //   // console.log("hiiiii")
  //   axios
  //     .get("http://localhost:8080/home/random-products")
  //     .then((res) => setRandomProducts(res.data.randomProduct)) 
  //     .catch((err) => console.log(err));
  // }, []);
  // console.log(randomProducts)
  // const [trendingProducts, setTtrendingProducts] = useState([])
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/home/trending-products")
  //     .then((res) => setTtrendingProducts(res.data.trendingProducts)) 
  //     .catch((err) => console.log(err));

  // }, [])
  // console.log(trendingProducts)
  const [newProducts, setNewProducts] = useState([])
  useEffect(() => {
    console.log("'in use effect")
    axios
      .get("http://localhost:8080/home/new-products")
      .then((res) => {setNewProducts(res.data.newProducts); console.log(res)}) 
      .catch((err) => console.log(err));
  }, [])
  // console.log(newProducts)

  // const [users, setUsers] = useState([]);
  // // Just getting user
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/account/me", {
  //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //     })
  //     .then((res) => setUsers(res.data)) // users => returned data
  //     .catch((err) => console.log(err));
  // }, []);

  // 
  return (
    <>
      {/* Keep-in-touch */}
      <div className="container-full">
        <section className="keep-in-touch">
          <div className="keep-in-touch-container">
            <div className="left-side">
              <h2>
                <span>Keep in touch</span>
              </h2>
              <p>
                <span>
                  Sign up to receive communications from LEGO® Marketing and be
                  the first to know about new sets, product updates, promotions
                  and much more
                </span>
              </p>
              <a className="shop-fill" href="#" target="_blank">
                <span>Shop Now</span>
                <span>
                  <i className="fas fa-angle-right"></i>
                </span>
              </a>
            </div>
            <div className="right-side">
              <img src={Women} />
            </div>
          </div>
        </section>
      </div>

      {/* Spotlight-on */}
      <div className="container">
        <section id="spotlight-on">
          <div className="card-section">
            {/* card inner content */}
            <div className="card-header-spotlight">
              <h2>
                <span>Spotlight on</span>
              </h2>
            </div>

            {/* card outer content  */}
            <div className="card-container">
              {newProducts.map((product) => {
                <>
                <HomeCard product={product}/>
              <HomeCard product={product}/>
              <HomeCard product={product}/>
              </>
              })}
              
            </div>
          </div>
        </section>
      </div>

      {/* trending Now */}
      <div className="container">
        <section id="spotlight-on">
          <div className="card-section">
            {/* card inner content */}
            <div className="card-header-spotlight">
              <h2>
                <span>Spotlight on</span>
              </h2>
            </div>

            {/* card outer content  */}
            <div className="card-container">
              <HomeCard />
              <HomeCard />
              <HomeCard />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
