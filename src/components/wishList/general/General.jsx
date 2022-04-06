import { Link } from "@mui/material";
import React from "react";
import Style from "./general.module.css";

export default function General() {
  return (
    <div>
      <div className={Style["wish-general"]}>
        <div className={Style["wish-general-info"]}>
          <Link href="#" className={Style.link}>
            <span>General (0)</span>
          </Link>
          <div className={Style["general-content"]}>
            <div className={Style["content-info"]}>
              <span className={Style["wish-general-date"]}>Last updated: 1/28/2022</span>
              <span className={Style["wish-general-cost"]}>Total cost: 0.00</span>
            </div>
            <div className={Style["content-btn"]}>
              <div className={Style.breakline}></div>
              <button disabled className={Style["addtobag-btn"]}>
                Add all to Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
