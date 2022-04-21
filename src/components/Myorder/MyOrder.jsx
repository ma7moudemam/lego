import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getOrder } from "../../network/orderAPI";
import WishlistSup from "../wishList/wishListContent/WishListSup";
import Style from "./Myorder.module.css";

export default function MyOrder() {
	const [orders, setOrders] = useState([]);
	useEffect(() => {
		getOrder().then((data) => setOrders(data.data));
		return () => {};
	}, []);
	console.log(orders);
	return (
		<div>
			<div className={Style["inner-content"]}>
				{/* My orders */}
				<h1 className={Style.nameOfBlock}>My Orders</h1>
				<div className={Style["wrapper-order"]}>
					<span className={Style.heading}>Latest Order</span>
					{orders.length > 0 ? (
						<div className={Style["order-contatiner"]}>
							<table className={Style.tableOrder}>
								<thead>
									<tr>
										<th>Shipper Name</th>
										<th>Order Status</th>
										<th>Order Date</th>
										<th>Product</th>
										<th>Total Cost</th>
									</tr>
								</thead>
								<tbody>
									{orders?.map(
										({
											_id,
											shipper,
											isPending,
											isShipped,
											isCanceled,
											isDelivered,
											order_date,
											products,
											total_price,
										}) => (
											<tr key={_id}>
												<td>{shipper ? shipper.name : "-"}</td>
												<td>
													<span
														className="order-status-code"
														style={{
															backgroundColor: isCanceled
																? "red"
																: isDelivered
																? "green"
																: isShipped
																? "orange"
																: isPending
																? "grey"
																: "grey",
														}}
													></span>{" "}
													{isCanceled
														? "Canceled"
														: isDelivered
														? "Delivered"
														: isShipped
														? "Shipped"
														: isPending
														? "Pending"
														: "Pending"}
												</td>
												<td>{order_date}</td>
												{/* <td>
                          <select>
                            {
                              product.map(p => <option key={_id}>{p.product.name}</option>)
                            }
                          </select>
                        </td> */}
												<td>
													<ul style={{ marginBottom: "0rem" }}>
														{products?.map((p) => (
															<li key={_id}>{p?.product?.name}</li>
														))}
													</ul>
												</td>
												<td>{total_price} EGP</td>
											</tr>
										)
									)}
								</tbody>
							</table>
						</div>
					) : (
						<div className={Style["wrapper-orders"]}>
							<span className={Style["order-text"]}>You currently have no open orders.</span>
							<NavLink to="/shop-now">
								<button className={Style["order-btn"]}>Start Shopping</button>
							</NavLink>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
