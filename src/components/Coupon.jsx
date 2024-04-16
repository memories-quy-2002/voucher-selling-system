import React, { useState } from "react";
import Filter from "./Filter";
import Layout from "./Layout";
import couponsData from "../components/coupons.json";
import CouponItem from "./CouponItem";

const Coupon = () => {
	const url = new URLSearchParams(window.location.search);
	const id = parseInt(url.get("id"));
	const [isNewCoupon, setIsNewCoupon] = useState(id === 2 ? false : true);
	return (
		<Layout>
			<div>
				<div className="top-area">
					<div className="grid_frame">
						<div className="container_grid clearfix">
							<div className="grid_12">
								<h2 className="page-title">
									456 Coupons are waiting for you!
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
											className={`lbl-tab ${
												isNewCoupon && "active"
											}`}
											onClick={() => setIsNewCoupon(true)}
										>
											New Coupons
										</span>
										<span
											className={`lbl-tab ${
												!isNewCoupon && "active"
											}`}
											onClick={() =>
												setIsNewCoupon(false)
											}
										>
											Featured Coupons
										</span>
									</span>
								</h3>
							</div>

							<div className="block-content list-coupon clearfix">
								<div className="tab-content">
									<div
										className={`tab-content-item ${
											isNewCoupon && "active"
										}`}
									>
										{couponsData.new.map((coupon) => (
											<CouponItem
												key={coupon.id}
												coupon={coupon}
											/>
										))}
										{/*end: .coupon-item */}
									</div>
									<div
										className={`tab-content-item ${
											!isNewCoupon && "active"
										}`}
									>
										{couponsData.featured.map((coupon) => (
											<CouponItem
												key={coupon.id}
												coupon={coupon}
											/>
										))}
										{/*end: .coupon-item */}
									</div>
								</div>
							</div>
							<a
								className="grid_6 btn btn-orange btn-load-more"
								href="/coupon"
							>
								LOAD MORE COUPON
							</a>
						</div>
						{/*end block: Featured Coupons*/}
						<div className="mod-email-newsletter clearfix">
							<div className="grid_12">
								<div className="wrap-form clearfix">
									<div className="left-lbl">
										<div className="big-lbl">
											newsletter
										</div>
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
								<div className="brand-item grid_4">
									<div className="brand-content">
										<div className="brand-logo">
											<div className="wrap-img-logo">
												<span className="ver_hold" />
												<a
													href="/coupon-detail"
													className="ver_container"
												>
													<img
														src={require("../images/ex/01_07.jpg")}
														alt="$BRAND_TITLE"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								{/*end: .brand-item */}
								<div className="brand-item grid_4">
									<div className="brand-content">
										<div className="brand-logo">
											<div className="wrap-img-logo">
												<span className="ver_hold" />
												<a
													href="/coupon-detail"
													className="ver_container"
												>
													<img
														src={require("../images/ex/01_07.jpg")}
														alt="$BRAND_TITLE"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								{/*end: .brand-item */}
								<div className="brand-item grid_4">
									<div className="brand-content">
										<div className="brand-logo">
											<div className="wrap-img-logo">
												<span className="ver_hold" />
												<a
													href="/coupon-detail"
													className="ver_container"
												>
													<img
														src={require("../images/ex/01_07.jpg")}
														alt="$BRAND_TITLE"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								{/*end: .brand-item */}
								<div className="brand-item grid_4">
									<div className="brand-content">
										<div className="brand-logo">
											<div className="wrap-img-logo">
												<span className="ver_hold" />
												<a
													href="/coupon-detail"
													className="ver_container"
												>
													<img
														src={require("../images/ex/01_07.jpg")}
														alt="$BRAND_TITLE"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								{/*end: .brand-item */}
								<div className="brand-item grid_4">
									<div className="brand-content">
										<div className="brand-logo">
											<div className="wrap-img-logo">
												<span className="ver_hold" />
												<a
													href="/coupon-detail"
													className="ver_container"
												>
													<img
														src={require("../images/ex/01_07.jpg")}
														alt="$BRAND_TITLE"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								{/*end: .brand-item */}
								<div className="brand-item grid_4">
									<div className="brand-content">
										<div className="brand-logo">
											<div className="wrap-img-logo">
												<span className="ver_hold" />
												<a
													href="/coupon-detail"
													className="ver_container"
												>
													<img
														src={require("../images/ex/01_07.jpg")}
														alt="$BRAND_TITLE"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
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
