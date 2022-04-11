import React from "react";
import Cards from "../../assets/images/spotlight/card1.jpg";
import NestedCards from "../../assets/images/spotlight/nested-card1.png";
export default function HomeCard() {
  return (
    <div>
      {" "}
      <div className="card-1">
        <a className="card-content" href="#" target="_blank">
          <div className="image-container">
            <div className="main-image">
              <img src={Cards} />
            </div>
            <div className="nested-image">
              <img src={NestedCards} />
            </div>
          </div>
          <div className="text-container">
            <h3>
              <span>Bring worlds together</span>
            </h3>
            <p>
              <span>
                Kids can mix and match stories with new LEGO® | Disney sets.
              </span>
            </p>
            <div className="shop">
              <span>Shop Now</span>
              <span>
                <i className="fas fa-angle-right"></i>
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}