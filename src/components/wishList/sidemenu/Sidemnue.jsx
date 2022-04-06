import { Link } from "@mui/material";
import Style from "./sidemenue.module.css";
import { NavLink } from 'react-router-dom';

function SideMenue() {
 
  return (
    <div className={Style.container}>
      <ul className={Style.menu}>
        <NavLink to="/whishlist/myorder"  className={(isActive) =>
                isActive ? Style.active : Style["side-menu"]} style={{ textDecoration: 'none' }}>
          <li className={Style["side-menu-items"]}>My Orders</li>
        </NavLink>
        <NavLink to="/whishlist/personal"  className={(isActive) =>
                isActive ? Style.active : Style["side-menu"]} style={{ textDecoration: 'none' }}>
          <li className={Style["side-menu-items"]}>Personal & Address Details</li>
        </NavLink>
        <NavLink to="/whishlist/whishlist"  className={(isActive) =>
                isActive ? Style.active : Style["side-menu"]}>
          <li className={Style["side-menu-items"]} 
          //  style={{backgroundColor:'rgb(0, 109, 183)'}}
           >
            Wish list
          </li>
        </NavLink>
        <NavLink to="/"  className={Style["side-menu"]} style={{ textDecoration: 'none' }}>
          <li className={Style["side-menu-items"]}>Logout</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default SideMenue;
