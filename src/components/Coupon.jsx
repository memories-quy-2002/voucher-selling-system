import axios from "axios";
import React, { useEffect, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import CouponItem from "./CouponItem";
import Filter from "./Filter";
import Layout from "./Layout";

const Coupon = () => {
	const url = new URLSearchParams(window.location.search);
	const id = parseInt(url.get("id"));
	const name = url.get("searchTerm") ? url.get("searchTerm") : undefined;
	const parts = url.get("days") ? url.get("days").split("-") : undefined;
	const daysLeft = [parseInt(parts[0], 10), parseInt(parts[1], 10)];

	const [isNewCoupon, setIsNewCoupon] = useState(id === 2 ? false : true);
	const [couponsData, setCouponsData] = useState({
		new: [],
		featured: [],
		"my-coupon": [],
	});
	const [showToast, setShowToast] = useState(false);
	const [message, showMessage] = useState("");

	useEffect(() => {
		const coupons = require("./vouchers.json");
		setCouponsData(coupons);
	}, []);

	const onTakeCoupon = async (couponId) => {
		const updatedCoupons = { ...couponsData }; // Create a copy
		const foundCoupon =
			updatedCoupons.new.find((coupon) => coupon.id === couponId) ||
			updatedCoupons.featured.find((coupon) => coupon.id === couponId);
		if (foundCoupon) {
			try {
				foundCoupon.isTaken = true;
				updatedCoupons["my-coupon"].push(foundCoupon);
				setCouponsData(updatedCoupons); // Update state with modified data
				console.log(updatedCoupons);
				const response = await axios.post(
					"http://localhost:4000/api/update",
					updatedCoupons
				);
				if (response.status === 200) {
					showMessage(response.data.msg);
					setShowToast(true); // Show the toast immediately
					setTimeout(() => {
						setShowToast(false);
					}, 5000); // 5 seconds in milliseconds
				}
			} catch (err) {
				console.error(err);
			}
		} else {
			alert("Coupon with ID " + couponId + " not found.");
		}
	};

	const onDismissCoupon = async (couponId) => {
		console.log(couponId);
		const updatedCoupons = { ...couponsData }; // Create a copy
		const foundCoupon =
			updatedCoupons.new.find((coupon) => coupon.id === couponId) ||
			updatedCoupons.featured.find((coupon) => coupon.id === couponId);
		if (foundCoupon) {
			try {
				foundCoupon.isTaken = false;
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
					showMessage(response.data.msg);
					setShowToast(true); // Show the toast immediately
					setTimeout(() => {
						setShowToast(false);
					}, 5000); // 5 seconds in milliseconds
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
								<h2 className="page-title">
									A lot of Vouchers are waiting for you!
								</h2>
							</div>
						</div>
					</div>
				</div>
				<Filter />
				{/*end: .mod-filter */}
				<div className="grid_frame page-content">
					<div className="container_grid">
						<div className="mod-grp-coupon block clearfix tabbable">
							<div className="grid_12">
								<h3 className="title-block">
									<span className="wrap-tab">
										<span
											className={`lbl-tab ${isNewCoupon && "active"}`}
											onClick={() => setIsNewCoupon(true)}
										>
											New Vouchers
										</span>
										<span
											className={`lbl-tab ${!isNewCoupon && "active"}`}
											onClick={() => setIsNewCoupon(false)}
										>
											Featured Vouchers
										</span>
									</span>
								</h3>
							</div>

							<div className="block-content list-coupon clearfix">
								<div className="tab-content">
									<div
										className={`tab-content-item ${isNewCoupon && "active"}`}
									>
										{couponsData.new
											.filter(
												(coupon) =>
													coupon.days >= daysLeft[0] &&
													coupon.days <= daysLeft[1]
											)
											.filter((coupon) => {
												if (name)
													return coupon.name
														.toLowerCase()
														.includes(name.toLowerCase());
												else return true;
											})
											.map((coupon) => (
												<CouponItem
													key={coupon.id}
													coupon={coupon}
													onTakeCoupon={() => onTakeCoupon(coupon.id)}
													onDismissCoupon={() => onDismissCoupon(coupon.id)}
												/>
											))}
										{/*end: .coupon-item */}
									</div>
									<div
										className={`tab-content-item ${!isNewCoupon && "active"}`}
									>
										{couponsData.featured.map((coupon) => (
											<CouponItem
												key={coupon.id}
												coupon={coupon}
												onTakeCoupon={() => onTakeCoupon(coupon.id)}
												onDismissCoupon={() => onDismissCoupon(coupon.id)}
											/>
										))}
										{/*end: .coupon-item */}
									</div>
								</div>
							</div>
							<a className="grid_6 btn btn-orange btn-load-more" href="/coupon">
								LOAD MORE VOUCHERS
							</a>
						</div>
						{/*end block: Featured Coupons*/}
						<div className="mod-email-newsletter clearfix">
							<div className="grid_12">
								<div className="wrap-form clearfix">
									<div className="left-lbl">
										<div className="big-lbl">newsletter</div>
										<div className="sml-lbl">Don't miss a chance!</div>
									</div>
									<div className="wrap-email">
										<label htmlFor="sys_email_newsletter">
											<input
												type="email"
												id="sys_email_newsletter"
												placeholder="Enter your email here"
											/>
										</label>
									</div>
									<button
										className="btn btn-orange btn-submit-email"
										type="submit"
									>
										SUBSCRIBE NOW
									</button>
								</div>
							</div>
						</div>
						{/*end: .mod-email-newsletter*/}
						<div className="mod-brands block clearfix">
							<div className="grid_12">
								<h3 className="title-block has-link">
									POPULAR BRANDS (129)
									<a href="/brand" className="link-right">
										See all <i className="pick-right" />
									</a>
								</h3>
							</div>
							<div className="block-content list-brand clearfix">
								{["08", "09", "10", "11", "12", "13"].map((brand) => (
									<div key={brand} className="brand-item grid_4">
										<div className="brand-content">
											<div className="brand-logo">
												<div className="wrap-img-logo">
													<span className="ver_hold" />
													<a href="/" className="ver_container">
														<img
															src={require(`../images/ex/01_${brand}.jpg`)}
															alt="$BRAND_TITLE"
														/>
													</a>
												</div>
											</div>
										</div>
									</div>
								))}
								<ToastContainer
									className="p-3"
									position={"bottom-end"}
									style={{
										zIndex: 1,
										position: "fixed",
										bottom: 0,
										right: 0,
									}}
								>
									<Toast
										onClose={() => setShowToast(false)}
										show={showToast}
										delay={5000}
										autohide
										animation
									>
										<Toast.Header closeButton={true}>
											<strong className="me-auto">Notifications</strong>
										</Toast.Header>
										<Toast.Body>{message}</Toast.Body>
									</Toast>
								</ToastContainer>
								{/*end: .brand-item */}
							</div>
						</div>
						{/*end: .mod-brand */}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Coupon;
