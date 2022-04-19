import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getOrder } from "../../network/orderAPI";
import WishlistSup from "../wishList/wishListContent/WishListSup"
import Style from "./Myorder.module.css"

export default function MyOrder() {

  const [orders, setOrders] = useState([]);

  useEffect(()=>{
    getOrder().then((data) => setOrders(data.data))
  }, [])
 
  return (
    <div>
      <div className={Style["inner-content"]}>
        {/* My orders */}
        <h1 className={Style.nameOfBlock}>My Orders</h1>
        <div className={Style["wrapper-order"]}>
          <span className={Style.heading}>Latest Order</span>
          {
            orders.length > 0 ?
            <div className={Style["order-contatiner"]}>
             <table>
             <thead>
               <tr>
                  <th>User</th>
                  <th>Shipper Number</th>
                  <th>Is Pending</th>
                  <th>Is Shipped</th>
                  <th>Is Delivered</th>
                  <th>Tax</th>
                  <th>Order Date</th>
                  <th>Product</th>
               </tr>
              </thead>
              <tbody>
              {orders.map(({ _id,user, shipper,isPending, isShipped,isDelivered, tax, order_date,product}) =>
                    <tr key={_id}>
                        <td >{user.email}</td>
                        <td>{shipper}</td>
                        <td>{isPending? "true": "false"}</td>
                        <td>{isShipped ? "true": "false"}</td>
                        <td>{isDelivered ? "true": "false"}</td>
                        <td>{tax}</td>
                        <td>{order_date}</td>
                        {/* <td>
                          <select>
                            {
                              product.map(p => <option key={_id}>{p.product.name}</option>)
                            }
                          </select>
                        </td> */}
                        <td>
                          <ul style={{marginBottom:"0rem"}}>
                            {
                          product.map(p => <li key={_id}>{p?.product?.name}</li>)
                          }
                          </ul>
                        </td>
                    </tr>
                )}
               </tbody>
             </table>
            </div>
            :
            <div className={Style["wrapper-orders"]}>
              <span className={Style["order-text"]}>You currently have no open orders.</span>
              <NavLink to="/shop-now">
              <button className={Style["order-btn"]} >
                Start Shopping
                </button>
                </NavLink>
            </div>
          }
          
        </div>

        {/* wish support  */}
        <WishlistSup/>
      </div>
    </div>
  );
}
