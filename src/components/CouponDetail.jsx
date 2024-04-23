import React, { useState } from "react";
import Layout from "./Layout";
import CouponItem from "./CouponItem";
import axios from "axios";

const CouponDetail = () => {
	const url = new URLSearchParams(window.location.search);
	const id = parseInt(url.get("id"));
	const [couponsData, setCouponsData] = useState(require("./vouchers.json"));
	const allCoupons = couponsData.new.concat(couponsData.featured);
	const couponDetail = allCoupons.filter((coupon) => coupon.id === id)[0];

	const onTakeCoupon = async (couponId) => {
		const updatedCoupons = { ...couponsData }; // Create a copy

		if (couponDetail) {
			try {
				couponDetail.isTaken = true;
				updatedCoupons["my-coupon"].push(couponDetail);
				setCouponsData(updatedCoupons);
				console.log(couponsData);
				const response = await axios.post(
					"http://localhost:4000/api/update",
					couponsData
				);
				if (response.status === 200) {
					console.log(response.data.msg);
				}
			} catch (err) {
				console.error(err);
			}
		} else {
			alert("Coupon with ID " + couponId + " not found.");
		}
	};
	const onDismissCoupon = async (couponId) => {
		const updatedCoupons = { ...couponsData }; // Create a copy

		if (couponDetail) {
			try {
				couponDetail.isTaken = false;
				// const newCoupons = updatedCoupons["my-coupon"].filter(
				// 	(item) => item.id !== couponDetail.id
				// );
				const index = updatedCoupons["my-coupon"].indexOf(couponDetail);
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
					console.log(response.data.msg);
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
			<div className="top-area">
				<div className="grid_frame">
					<div className="container_grid clearfix">
						<div className="grid_12">
							<h2 className="page-title">Coupons</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="grid_frame page-content">
				<div className="container_grid">
					<div className="mod-breadcrumb clearfix">
						<div className="grid_12">
							<a href="/">Home</a>
							<span>&gt;</span>
							<a href="/coupon">Coupons</a>
							<span>&gt;</span>
							<a href="/coupon-detail">
								{couponDetail.brand} - {couponDetail.price}
							</a>
						</div>
					</div>
					{/*end: .mod-breadcrumb */}
					<div className="mod-coupon-detail clearfix">
						<div className="grid_4">
							<div className="wrap-thumb">
								<div className="img-thumb-center">
									<div className="wrap-img-thumb">
										<span className="ver_hold" />

										<img
											src={require(`../images/${couponDetail.image}`)}
											alt="$COUPON_TITLE"
										/>
									</div>
								</div>
								{couponDetail.isSale && (
									<i className="stick-lbl hot-sale" />
								)}
							</div>
						</div>
						<div className="grid_5">
							<div className="save-price">
								{couponDetail.amount} % Off
							</div>
							<span className="brand-name">
								{couponDetail.brand}
							</span>
							<div className="coupon-desc">
								{couponDetail.description}
							</div>
							<div className="wrap-btn clearfix">
								<div className="day-left">
									9 days 4 hours left
								</div>
								{couponDetail.isTaken ? (
									<button
										class="btn btn-blue btn-take-coupon untake btn-red"
										onClick={onDismissCoupon}>
										Discard Voucher
									</button>
								) : (
									<button
										className="btn btn-blue btn-take-coupon"
										onClick={onTakeCoupon}>
										Take Voucher
									</button>
								)}
							</div>
							<div className="wrap-action clearfix">
								<div className="left-vote">
									<span className="lbl-work">100% work</span>
									<span className="lbl-vote">
										12 <i className="icon iAddVote" />
									</span>
									<span className="lbl-vote">
										2 <i className="icon iSubVote" />
									</span>
								</div>
								<div className="right-social">
									Share now
									<a
										href="https://www.facebook.com"
										target="blank">
										<i className="fa fa-facebook-square fa-2x" />
									</a>
									<a
										href="https://www.twitter.com"
										target="blank">
										<i className="fa fa-twitter-square fa-2x" />
									</a>
									<a
										href="https://www.pinterest.com"
										target="blank">
										<i className="fa fa-pinterest-square fa-2x" />
									</a>
									<a
										href="https://www.linkedin.com"
										target="blank">
										<i className="fa fa-linkedin-square fa-2x" />
									</a>
								</div>
							</div>
							<div className="wrap-tag">
								<span className="btn btn-gray type-tag tag-lbl">
									Tag
								</span>
								{couponDetail.tags.split(", ").map((tag) => (
									<span className="btn btn-gray type-tag">
										{tag}
									</span>
								))}
							</div>
						</div>
						<div className="grid_3">
							<div className="brand-info ta-c">
								<span
									className="star-rate"
									style={{ padding: 0 }}>
									<span
										style={{
											width: `${Math.random() * 50 + 50
												}%`,
										}}
									/>
								</span>
								<div className="rated-number">
									{Math.floor(Math.random() * 1000000)}{" "}
									followers
								</div>
								<div className="brand-desc ta-l">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Duis vestibulum interdum
									ipsum, eu gravida massa cursus id.
									Pellentesque feugiat ante eu scelerisque
									porta. In quis velit ligula.
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container_grid">
					<div className="mod-grp-coupon block clearfix tabbable">
						<div className="grid_12">
							<h3 className="title-block">Related coupons</h3>
						</div>
						<div className="block-content list-coupon clearfix">
							<div className="tab-content">
								<div className="tab-content-item active">
									{couponsData.new.map((coupon) => (
										<CouponItem
											key={coupon.id}
											coupon={coupon}
											hasButton={false}
										/>
									))}
									{/*end: .coupon-item */}
								</div>
							</div>
						</div>
					</div>
					{/*end block: Featured Coupons*/}
					<div className="mod-email-newsletter clearfix">
						<div className="grid_12">
							<div className="wrap-form clearfix">
								<div className="left-lbl">
									<div className="big-lbl">newsletter</div>
									<div className="sml-lbl">
										Don't miss a chance!
									</div>
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
									type="submit">
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
							{
								["08", "09", "10", "11", "12", "13"].map((brand) =>
									<div className="brand-item grid_4">
										<div className="brand-content">
											<div className="brand-logo">
												<div className="wrap-img-logo">
													<span className="ver_hold" />
													<a
														href="/"
														className="ver_container"
													>
														<img
															src={require(`../images/ex/01_${brand}.jpg`)}
															alt="$BRAND_TITLE"
														/>
													</a>
												</div>
											</div>
										</div>
									</div>
								)
							}
							{/*end: .brand-item */}

						</div>
					</div>
					{/*end: .mod-brand */}
				</div>
			</div>
		</Layout>
	);
};

export default CouponDetail;
