import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import couponsData from "../components/coupons.json";
import CouponItem from "./CouponItem";
import Filter from "./Filter";
import Layout from "./Layout";

const HomePage = () => {
	return (
		<div className="container-page">
			<div className="mp-pusher" id="mp-pusher">
				<Layout>
					<div className="top-area">
						<div className="mod-head-slide">
							<div className="grid_frame">
								<div className="wrap-slide">
									<Carousel
										autoPlay
										infiniteLoop
										stopOnHover
										showThumbs={false}
										showStatus={false}
									>
										<div>
											<img
												src={require("../images/ex/01_banner.jpg")}
												alt="Banner 1"
											/>
										</div>
										<div>
											<img
												src={require("../images/ex/02_banner.jpg")}
												alt="Banner 2"
											/>
										</div>
										<div>
											<img
												src={require("../images/ex/03_banner.jpg")}
												alt="Banner 3"
											/>
										</div>
									</Carousel>
								</div>
							</div>
						</div>
					</div>
					<Filter />
					{/*end: .mod-filter */}
					<div className="grid_frame page-content">
						<div className="container_grid">
							<div className="mod-grp-coupon block clearfix">
								<div className="grid_12">
									<h3 className="title-block has-link">
										New Coupons
										<a
											href="/coupon?id=1"
											className="link-right"
										>
											See all <i className="pick-right" />
										</a>
									</h3>
								</div>
								{couponsData.new.slice(0, 4).map((coupon) => (
									<CouponItem
										key={coupon.id}
										coupon={coupon}
									/>
								))}
							</div>
							{/*end block: New Coupons*/}
							<div className="mod-grp-coupon block clearfix">
								<div className="grid_12">
									<h3 className="title-block has-link">
										Featured Coupons
										<a
											href="/coupon?id=2"
											className="link-right"
										>
											See all <i className="pick-right" />
										</a>
									</h3>
								</div>
								<div className="block-content list-coupon clearfix">
									{couponsData.featured.map((coupon) => (
										<CouponItem
											key={coupon.id}
											coupon={coupon}
										/>
									))}
									{/*end: .coupon-item */}
								</div>
								<a
									className="grid_6 btn btn-orange btn-load-more"
									href="/coupon"
								>
									Load more coupon
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
														href="/"
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
														href="/"
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
														href="/"
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
														href="/"
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
														href="/"
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
														href="/"
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
				</Layout>
			</div>
		</div>
	);
};

export default HomePage;
