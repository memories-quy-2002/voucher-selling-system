import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const MyCoupon = () => {
	const navigate = useNavigate();
	const [couponsData, setCouponsData] = useState({
		new: [],
		featured: [],
		"my-coupon": [],
	});
	useEffect(() => {
		const coupons = require("./coupons.json");
		setCouponsData(coupons);
	}, []);

	const onDismissCoupon = async (couponId) => {
		const updatedCoupons = { ...couponsData }; // Create a copy
		const foundCoupon =
			updatedCoupons.new.find((coupon) => coupon.id === couponId) ||
			updatedCoupons.featured.find((coupon) => coupon.id === couponId);
		if (foundCoupon) {
			try {
				foundCoupon.isTaken = false;
				// const newCoupons = updatedCoupons["my-coupon"].filter(
				// 	(item) => item.id !== foundCoupon.id
				// );
				const index = updatedCoupons["my-coupon"].indexOf(foundCoupon);
				const newCoupons = updatedCoupons["my-coupon"].splice(index, 1);
				console.log("New coupons: ", newCoupons);
				setCouponsData((previousCoupons) => ({
					...previousCoupons,
					"my-coupon": newCoupons,
				}));
				console.log(couponsData);
				const response = await axios.post(
					"http://localhost:4000/api/delete",
					couponsData
				);
				if (response.status === 200) {
					navigate("/");
				}
			} catch (err) {
				console.error(err);
			}
		} else {
			alert("Coupon with ID " + couponId + " not found.");
		}
	};
	return (
		<Layout>
			<div>
				<div className="top-area">
					<div className="grid_frame">
						<div className="container_grid clearfix">
							<div className="grid_12">
								<h2 className="page-title">My Coupons</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="grid_frame page-content">
					<div className="container_grid">
						<div className="my-coupon mod-grp-coupon block clearfix tabbable tab-style-2">
							<div className="grid_12">
								<h3 className="title-block">
									<span className="wrap-tab clearfix">
										<span className="lbl-tab active">
											COUPONS (
											{couponsData["my-coupon"].length})
										</span>
									</span>
								</h3>
							</div>
							<div className="block-content list-coupon clearfix">
								<div className="tab-content">
									<div className="tab-content-item clearfix active">
										{couponsData["my-coupon"].map(
											(coupon) => (
												<div className="coupon-item grid_3">
													<div className="coupon-content">
														<div className="img-thumb-center">
															<div className="wrap-img-thumb">
																<span className="ver_hold" />
																<a
																	href="#"
																	className="ver_container"
																>
																	<img
																		src={require(`../images/${coupon.image}`)}
																		alt="$COUPON_TITLE"
																	/>
																</a>
															</div>
														</div>
														<div className="coupon-price">
															{coupon.price}
														</div>
														<div className="coupon-brand">
															{coupon.brand}
														</div>
														<div className="coupon-desc">
															{coupon.desc}
														</div>
														<div className="time-left">
															{coupon.days ===
																0 &&
															coupon.hours === 0
																? "EXPIRED"
																: `${coupon.days} days ${coupon.hours} hours left`}
														</div>

														<button
															className="btn-discard"
															onClick={() =>
																onDismissCoupon(
																	coupon.id
																)
															}
														>
															Discard coupon
														</button>
													</div>
													<i className="stick-lbl hot-sale" />
												</div>
											)
										)}
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

export default MyCoupon;
