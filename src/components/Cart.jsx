import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

const Cart = () => {
	const navigate = useNavigate();
	const [couponsData, setCouponsData] = useState({
		new: [],
		featured: [],
		"my-coupon": [],
	});
	const [totalPrice, setTotalPrice] = useState(0);
	useEffect(() => {
		const coupons = require("./vouchers.json");
		setCouponsData(coupons);
	}, []);
	useEffect(() => {
		const coupons = require("./vouchers.json");
		const allPrice = coupons["my-coupon"].reduce(
			(sum, item) => sum + item.price,
			0
		);
		setTotalPrice(allPrice);
	}, []);

	return (
		<Layout>
			<div>
				<div className="top-area">
					<div className="grid_frame">
						<div className="container_grid clearfix">
							<div className="grid_12">
								<h2 className="page-title">Voucher Cart</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="grid_frame page-content">
					<div className="container_grid">
						<div className="my-coupon mod-grp-coupon block clearfix tabbable tab-style-2">
							<div className="block-content list-coupon clearfix">
								<div
									className="tab-content"
									style={{ display: "flex", gap: "2rem" }}
								>
									<div
										className="tab-content-item clearfix active"
										style={{
											display: "flex",
											flexDirection: "column",
											gap: "1rem",
											flex: 5,
										}}
									>
										{couponsData["my-coupon"].map(
											(coupon) => (
												<div
													className="coupon-content coupon-item"
													style={{
														display: "flex",
														flexDirection: "row",
														justifyContent:
															"flex-start",
														gap: "1rem",
														boxShadow:
															"00 5px 3px rgba(0, 0, 0, 0.2)",
													}}
												>
													<div>
														<div>
															<span className="ver_hold" />

															<img
																src={require(`../images/${coupon.image}`)}
																alt="$COUPON_TITLE"
																style={{
																	width: "200px",
																	height: "200px",
																}}
															/>
														</div>
													</div>
													<div>
														<div className="coupon-price">
															{coupon.amount}% Off
														</div>
														<div className="coupon-brand">
															{coupon.name}
														</div>
														<div className="coupon-brand">
															{coupon.brand}
														</div>
														<div className="coupon-price">
															{coupon.price} VND
														</div>
													</div>
												</div>
											)
										)}
									</div>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											justifyContent: "flex-start",
											gap: "1rem",
											flex: 2,
											height: "50%",
											border: "1px solid black",
										}}
									>
										<div
											style={{
												fontSize: "1rem",
												padding: "1rem",
											}}
										>
											<p style={{ color: "black" }}>
												Total Price: {totalPrice} VND
											</p>
											<p style={{ color: "black" }}>
												Discount: 0 VND
											</p>
											<p style={{ color: "black" }}>
												Subtotal: {totalPrice} VND
											</p>
											<button
												className="btn btn-blue"
												onClick={() =>
													navigate("/checkout")
												}
											>
												CHeckout
											</button>
										</div>
										<div></div>
									</div>
								</div>
							</div>
						</div>
						{/*end block: Tab Coupons*/}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Cart;
