import { Link } from "@mui/material";
import Style from "./sidemenue.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function SideMenue() {

  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => {
      setIsOpen(!isOpen);
  }
  return (
    <div className={Style.container}>
      <ul className={Style.menu} style={{paddingLeft: "0px"}}>
        <NavLink
          to="/whishlist/myorder"
          className={({isActive}) =>
            isActive ? Style.active : Style["side-menu"]
            
          }
        >
          <li className={Style["side-menu-items"]}>My Orders</li>
        </NavLink>
        <NavLink
          to="/whishlist/personal"
          className={({isActive}) =>
            isActive ? Style.active : Style["side-menu"]
          }
        >
          <li className={Style["side-menu-items"]}>
            Personal & Address Details
          </li>
        </NavLink>
        <NavLink
          to="/whishlist/whishlist"
          className={({isActive}) =>
            isActive ? Style.active : Style["side-menu"]
          }
        >
          <li className={Style["side-menu-items"]}>Wish list</li>
        </NavLink>
        <NavLink to="/" className={Style["side-menu"]}>
          <li className={Style["side-menu-items"]}>Logout</li>
        </NavLink>
      </ul>
      <ul className={Style.menuTwo} style={{paddingLeft: "0px"}}>
        <div>
          <button className={Style["btn-menu"]} onClick={toggling}>
            <div className={Style["account-menu"]}>
              <div className={Style["account-menu-text"]}>account menu</div>
              <div className={Style["menu-arrow"]}>
                Wish list
                <svg
                  className={isOpen ?Style.up :Style.down}
                  width="18"
                  height="28"
                  viewBox="0 0 18 28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </button>
          <div className={isOpen ?Style.show :Style.hiddenMenu} >
            <ul className={Style.menuTwo} style={{paddingLeft: "0px"}}> 
              <NavLink
                to="/whishlist/myorder"
                className={(isActive) =>
                  isActive ? Style.active : Style["side-menu"]
                }
              >
                <li className={Style["side-menu-items"]}>My Orders</li>
              </NavLink>
              <NavLink
                to="/whishlist/personal"
                className={(isActive) =>
                  isActive ? Style.active : Style["side-menu"]
                }
              >
                <li className={Style["side-menu-items"]}>
                  Personal & Address Details
                </li>
              </NavLink>
              <NavLink
                to="/whishlist/whishlist"
                className={(isActive) =>
                  isActive ? Style.active : Style["side-menu"]
                }
              >
                <li className={Style["side-menu-items"]}>Wish list</li>
              </NavLink>
              <NavLink to="/" className={Style["side-menu"]}>
                <li className={Style["side-menu-items"]}>Logout</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default SideMenue;
