import { Link } from "@mui/material";
import React from "react";
import General from "../general/General";

import Style from "./wishlist.module.css";

export default function WishListContent() {
  return (
    <>
      <div className={Style.content}>
          <h1 className={Style.nameOfBlock}>Wish list</h1>
          <div className={Style["wish-block"]}>
            <div className={Style["wish-content"]}>
              <img src="/imags/fairy_girl.png" className={Style["wish-img"]} />
              <div className={Style["wish-wrapper"]}>
                <div style={{ paddingBottom: "1rem" }}>
                  <h4 className={Style["wish-header"]}>
                    Your wish is our command
                  </h4>
                  <p className={Style["wish-text"]}>
                    Create a new wish list or manage your current lists here.
                    You can add or remove products, name the lists to make it
                    easier to track, and even create and save separate wish
                    lists for different occasions or events.
                  </p>
                </div>
                <div className={Style["button-content"]}>
                  <button className={Style["wish-btn"]}>
                    + Create new list
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={Style.general}>
            <General/>
          </div>
        {/*  wish support  */}
        <div className={Style["wish-supp"]}>
          <img src="/imags/Support_2.png" className={Style["img-supp"]} />
          <span className={Style["supp-heading"]}>Support</span>
          <div className={Style["line-break"]}></div>
          <div className={Style["wrapper-supp"]}>
            <div className={Style["cont-supp-link"]}>
              <Link href="#" className={Style["supp-link"]}>
                Deliveries and Returns
              </Link>
              <Link href="#" className={Style["supp-link"]}>
                FAQs
              </Link>
            </div>
            <div className={Style["line-breakTwo"]}></div>
            <div className={Style["cont-supp-link"]}>
              <Link href="#" className={Style["supp-link"]}>
                Contact{" "}
              </Link>
              <Link href="#" className={Style["supp-link"]}>
                Replacement Parts and Instructions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
