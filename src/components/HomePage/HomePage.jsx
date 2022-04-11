import React from "react";
import Women from "../../assets/images/woman.png"
import Cards from "../../assets/images/spotlight/card1.jpg"
import NestedCards from "../../assets/images/spotlight/nested-card1.png"

import "./HomePage.css";

export default function HomePage() {
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
                        Kids can mix and match stories with new LEGO® | Disney
                        sets.
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

              <div className="card-2">
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
                      <span>The ultimate fighting machine</span>
                    </h3>
                    <p>
                      <span>
                        Enthralling ninja action with new LEGO® NINJAGO® sets.
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

              <div className="card-3">
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
                      <span>Build cool shape-shifting vehicles</span>
                    </h3>
                    <p>
                      <span>
                        Kids expand their magical creations with new LEGO®
                        Monkie Kid™.
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
                        Kids can mix and match stories with new LEGO® | Disney
                        sets.
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

              <div className="card-2">
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
                      <span>The ultimate fighting machine</span>
                    </h3>
                    <p>
                      <span>
                        Enthralling ninja action with new LEGO® NINJAGO® sets.
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

              <div className="card-3">
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
                      <span>Build cool shape-shifting vehicles</span>
                    </h3>
                    <p>
                      <span>
                        Kids expand their magical creations with new LEGO®
                        Monkie Kid™.
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
          </div>
        </section>
      </div>
    </>
  );
}
