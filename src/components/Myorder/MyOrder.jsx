import React from "react";

export default function MyOrder() {
  return (
    <div>
      <div class="inner-content ">
        {/* My orders */}
        <h1 class="nameOfBlock">My Orders</h1>
        <div class="wrapper-order">
          <span class="heading">Latest Order</span>
          <div class="wrapper-orders">
            <span class="order-text">You currently have no open orders.</span>
            <button class="order-btn">Start Shopping</button>
          </div>
        </div>

        {/* wish support  */}
        <div class="wish-supp">
          <img src="/imags/Support_2.png" class="img-supp" />
          <span class="supp-heading">Support</span>
          <div class="line-break"></div>
          <div class="wrapper-supp">
            <div class="cont-supp-link">
              <a href="#" class="supp-link">
                Deliveries and Returns
              </a>
              <a href="#" class="supp-link">
                FAQs
              </a>
            </div>
            <div class="line-breakTwo"></div>
            <div class="cont-supp-link">
              <a href="#" class="supp-link">
                Contact{" "}
              </a>
              <a href="#" class="supp-link">
                Replacement Parts and Instructions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
