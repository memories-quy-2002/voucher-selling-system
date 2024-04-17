import axios from "axios";
import React, { useEffect, useState } from "react";
import CouponItem from "./CouponItem";
import Layout from "./Layout";

const MyCoupon = () => {
	const [couponsData, setCouponsData] = useState({
		new: [],
		featured: [],
		"my-coupon": [],
	});
	useEffect(() => {
		const coupons = require("./vouchers.json");
		setCouponsData(coupons);
	}, []);
	console.log(couponsData);

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
					window.location.reload(false);
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
								<h2 className="page-title">My Vouchers</h2>
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
											VOUCHERS (
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
												<CouponItem
													key={coupon.id}
													coupon={coupon}
													onDismissCoupon={() =>
														onDismissCoupon(
															coupon.id
														)
													}
												/>
											)
										)}
									</div>
								</div>
							</div>
							<a
								className="grid_12 btn btn-orange btn-load-more"
								style={{}}
								href="/cart">
								GO TO CART
							</a>
						</div>

						{/*end block: Tab Coupons*/}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default MyCoupon;
