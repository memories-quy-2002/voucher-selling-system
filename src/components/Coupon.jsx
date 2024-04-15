import React from "react";
import Filter from "./Filter";
import Layout from "./Layout";

const Coupon = () => {
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
										<span className="lbl-tab active">
											New Coupons
										</span>
										<span className="lbl-tab">
											Featured Coupons
										</span>
									</span>
								</h3>
							</div>
							<div className="block-content list-coupon clearfix">
								<div className="tab-content">
									<div className="tab-content-item active">
										<div className="coupon-item grid_3">
											<div className="coupon-content">
												<div className="img-thumb-center">
													<div className="wrap-img-thumb">
														<span className="ver_hold" />
														<a
															href="/coupon-detail"
															className="ver_container"
														>
															<img
																src={require("../images/ex/01_01.jpg")}
																alt="$COUPON_TITLE"
															/>
														</a>
													</div>
												</div>
												<div className="coupon-price">
													$2.00 Off
												</div>
												<div className="coupon-brand">
													Walmart
												</div>
												<div className="coupon-desc">
													Find Parts for All Major
													Brands at Sears PartsDirect{" "}
												</div>
												<div className="time-left">
													9 days 4 hours left
												</div>
												<button className="btn btn-blue btn-take-coupon">
													Take Coupon
												</button>
											</div>
											<i className="stick-lbl hot-sale" />
										</div>
										{/*end: .coupon-item */}
										<div className="coupon-item grid_3">
											<div className="coupon-content">
												<div className="img-thumb-center">
													<div className="wrap-img-thumb">
														<span className="ver_hold" />
														<a
															href="/coupon-detail"
															className="ver_container"
														>
															<img
																src={require("../images/ex/01_02.jpg")}
																alt="$COUPON_TITLE"
															/>
														</a>
													</div>
												</div>
												<div className="coupon-price">
													Save $1.50 on two
												</div>
												<div className="coupon-brand">
													Lindt Chocolate
												</div>
												<div className="coupon-desc">
													Find Parts for All Major
													Brands at Sears PartsDirect{" "}
												</div>
												<div className="time-left">
													9 days 4 hours left
												</div>
												<button className="btn btn-blue btn-take-coupon">
													Take Coupon
												</button>
											</div>
											<i className="stick-lbl hot-sale" />
										</div>
										{/*end: .coupon-item */}
										<div className="coupon-item grid_3">
											<div className="coupon-content">
												<div className="img-thumb-center">
													<div className="wrap-img-thumb">
														<span className="ver_hold" />
														<a
															href="/coupon-detail"
															className="ver_container"
														>
															<img
																src={require("../images/ex/01_03.jpg")}
																alt="$COUPON_TITLE"
															/>
														</a>
													</div>
												</div>
												<div className="coupon-price">
													$5.00 Off
												</div>
												<div className="coupon-brand">
													Lindt Chocolate
												</div>
												<div className="coupon-desc">
													Find Parts for All Major
													Brands at Sears PartsDirect{" "}
												</div>
												<div className="time-left">
													2 days 14 hours left
												</div>
												<button className="btn btn-blue btn-take-coupon untake">
													Un Take Coupon
												</button>
											</div>
											<i className="stick-lbl hot-sale" />
										</div>
										{/*end: .coupon-item */}
										<div className="coupon-item grid_3">
											<div className="coupon-content">
												<div className="img-thumb-center">
													<div className="wrap-img-thumb">
														<span className="ver_hold" />
														<a
															href="/coupon-detail"
															className="ver_container"
														>
															<img
																src={require("../images/ex/01_04.jpg")}
																alt="$COUPON_TITLE"
															/>
														</a>
													</div>
												</div>
												<div className="coupon-price">
													$7.00 Off
												</div>
												<div className="coupon-brand">
													Walmart
												</div>
												<div className="coupon-desc">
													During the Red Star
													Spectacular Sale going on
													now get an extra 20% off
												</div>
												<div className="time-left">
													12 days 1 hour left
												</div>
												<button className="btn btn-blue btn-take-coupon">
													Take Coupon
												</button>
											</div>
											<i className="stick-lbl hot-sale" />
										</div>
										{/*end: .coupon-item */}
										<div className="coupon-item grid_3">
											<div className="coupon-content">
												<div className="img-thumb-center">
													<div className="wrap-img-thumb">
														<span className="ver_hold" />
														<a
															href="/coupon-detail"
															className="ver_container"
														>
															<img
																src={require("../images/ex/01_02.jpg")}
																alt="$COUPON_TITLE"
															/>
														</a>
													</div>
												</div>
												<div className="coupon-price">
													$12.00 Off
												</div>
												<div className="coupon-brand">
													Walmart
												</div>
												<div className="coupon-desc">
													Find Parts for All Major
													Brands at Sears PartsDirect{" "}
												</div>
												<div className="time-left">
													9 days 4 hours left
												</div>
												<button className="btn btn-blue btn-take-coupon">
													Take Coupon
												</button>
											</div>
										</div>
										{/*end: .coupon-item */}
										<div className="coupon-item grid_3">
											<div className="coupon-content">
												<div className="img-thumb-center">
													<div className="wrap-img-thumb">
														<span className="ver_hold" />
														<a
															href="/coupon-detail"
															className="ver_container"
														>
															<img
																src={require("../images/ex/01_03.jpg")}
																alt="$COUPON_TITLE"
															/>
														</a>
													</div>
												</div>
												<div className="coupon-price">
													$17.50 off
												</div>
												<div className="coupon-brand">
													Lindt Chocolate
												</div>
												<div className="coupon-desc">
													Find Parts for All Major
													Brands at Sears PartsDirect{" "}
												</div>
												<div className="time-left">
													9 days 4 hours left
												</div>
												<button className="btn btn-blue btn-take-coupon">
													Take Coupon
												</button>
											</div>
										</div>
										{/*end: .coupon-item */}
										<div className="coupon-item grid_3">
											<div className="coupon-content">
												<div className="img-thumb-center">
													<div className="wrap-img-thumb">
														<span className="ver_hold" />
														<a
															href="/coupon-detail"
															className="ver_container"
														>
															<img
																src={require("../images/ex/01_01.jpg")}
																alt="$COUPON_TITLE"
															/>
														</a>
													</div>
												</div>
												<div className="coupon-price">
													$3.00 Off
												</div>
												<div className="coupon-brand">
													Lindt Chocolate
												</div>
												<div className="coupon-desc">
													Find Parts for All Major
													Brands at Sears PartsDirect{" "}
												</div>
												<div className="time-left">
													2 days 14 hours left
												</div>
												<button className="btn btn-blue btn-take-coupon">
													Take Coupon
												</button>
											</div>
										</div>
										{/*end: .coupon-item */}
										<div className="coupon-item grid_3">
											<div className="coupon-content">
												<div className="img-thumb-center">
													<div className="wrap-img-thumb">
														<span className="ver_hold" />
														<a
															href="/coupon-detail"
															className="ver_container"
														>
															<img
																src={require("../images/ex/01_04.jpg")}
																alt="$COUPON_TITLE"
															/>
														</a>
													</div>
												</div>
												<div className="coupon-price">
													$7.00 Off
												</div>
												<div className="coupon-brand">
													Walmart
												</div>
												<div className="coupon-desc">
													During the Red Star
													Spectacular Sale going on
													now get an extra 20% off
												</div>
												<div className="time-left">
													12 days 1 hour left
												</div>
												<button className="btn btn-blue btn-take-coupon">
													Take Coupon
												</button>
											</div>
										</div>
										{/*end: .coupon-item */}
										<div className="coupon-item grid_3">
											<div className="coupon-content">
												<div className="img-thumb-center">
													<div className="wrap-img-thumb">
														<span className="ver_hold" />
														<a
															href="/coupon-detail"
															className="ver_container"
														>
															<img
																src={require("../images/ex/01_04.jpg")}
																alt="$COUPON_TITLE"
															/>
														</a>
													</div>
												</div>
												<div className="coupon-price">
													$2.00 Off
												</div>
												<div className="coupon-brand">
													Lindt Chocolate
												</div>
												<div className="coupon-desc">
													Find Parts for All Major
													Brands at Sears PartsDirect{" "}
												</div>
												<div className="time-left">
													9 days 4 hours left
												</div>
												<button className="btn btn-blue btn-take-coupon">
													Take Coupon
												</button>
											</div>
										</div>
										{/*end: .coupon-item */}
										<div className="coupon-item grid_3">
											<div className="coupon-content">
												<div className="img-thumb-center">
													<div className="wrap-img-thumb">
														<span className="ver_hold" />
														<a
															href="/coupon-detail"
															className="ver_container"
														>
															<img
																src={require("../images/ex/01_01.jpg")}
																alt="$COUPON_TITLE"
															/>
														</a>
													</div>
												</div>
												<div className="coupon-price">
													$11.50 off
												</div>
												<div className="coupon-brand">
													Lindt Chocolate
												</div>
												<div className="coupon-desc">
													Find Parts for All Major
													Brands at Sears PartsDirect{" "}
												</div>
												<div className="time-left">
													9 days 4 hours left
												</div>
												<button className="btn btn-blue btn-take-coupon">
													Take Coupon
												</button>
											</div>
										</div>
										{/*end: .coupon-item */}
										<div className="coupon-item grid_3">
											<div className="coupon-content">
												<div className="img-thumb-center">
													<div className="wrap-img-thumb">
														<span className="ver_hold" />
														<a
															href="/coupon-detail"
															className="ver_container"
														>
															<img
																src={require("../images/ex/01_03.jpg")}
																alt="$COUPON_TITLE"
															/>
														</a>
													</div>
												</div>
												<div className="coupon-price">
													$12.00 Off
												</div>
												<div className="coupon-brand">
													SunMart
												</div>
												<div className="coupon-desc">
													Find Parts for All Major
													Brands at Sears PartsDirect{" "}
												</div>
												<div className="time-left">
													2 days 14 hours left
												</div>
												<button className="btn btn-blue btn-take-coupon untake">
													Un Take Coupon
												</button>
											</div>
										</div>
										{/*end: .coupon-item */}
										<div className="coupon-item grid_3">
											<div className="coupon-content">
												<div className="img-thumb-center">
													<div className="wrap-img-thumb">
														<span className="ver_hold" />
														<a
															href="/coupon-detail"
															className="ver_container"
														>
															<img
																src={require("../images/ex/01_02.jpg")}
																alt="$COUPON_TITLE"
															/>
														</a>
													</div>
												</div>
												<div className="coupon-price">
													$4.5 Off
												</div>
												<div className="coupon-brand">
													Walmart
												</div>
												<div className="coupon-desc">
													During the Red Star
													Spectacular Sale going on
													now get an extra 20% off
												</div>
												<div className="time-left">
													12 days 1 hour left
												</div>
												<button className="btn btn-blue btn-take-coupon">
													Take Coupon
												</button>
											</div>
										</div>
										{/*end: .coupon-item */}
									</div>
									<div className="tab-content-item">
										<div className="coupon-item grid_3">
											<div className="coupon-content">
												<div className="img-thumb-center">
													<div className="wrap-img-thumb">
														<span className="ver_hold" />
														<a
															href="/coupon-detail"
															className="ver_container"
														>
															<img
																src={require("../images/ex/01_04.jpg")}
																alt="$COUPON_TITLE"
															/>
														</a>
													</div>
												</div>
												<div className="coupon-price">
													$7.00 Off
												</div>
												<div className="coupon-brand">
													Walmart
												</div>
												<div className="coupon-desc">
													During the Red Star
													Spectacular Sale going on
													now get an extra 20% off
												</div>
												<div className="time-left">
													12 days 1 hour left
												</div>
												<button className="btn btn-blue btn-take-coupon">
													Take Coupon
												</button>
											</div>
											<i className="stick-lbl hot-sale" />
										</div>
										{/*end: .coupon-item */}
										<div className="coupon-item grid_3">
											<div className="coupon-content">
												<div className="img-thumb-center">
													<div className="wrap-img-thumb">
														<span className="ver_hold" />
														<a
															href="/coupon-detail"
															className="ver_container"
														>
															<img
																src={require("../images/ex/01_02.jpg")}
																alt="$COUPON_TITLE"
															/>
														</a>
													</div>
												</div>
												<div className="coupon-price">
													$12.00 Off
												</div>
												<div className="coupon-brand">
													Walmart
												</div>
												<div className="coupon-desc">
													Find Parts for All Major
													Brands at Sears PartsDirect{" "}
												</div>
												<div className="time-left">
													9 days 4 hours left
												</div>
												<button className="btn btn-blue btn-take-coupon">
													Take Coupon
												</button>
											</div>
										</div>
										{/*end: .coupon-item */}
										<div className="coupon-item grid_3">
											<div className="coupon-content">
												<div className="img-thumb-center">
													<div className="wrap-img-thumb">
														<span className="ver_hold" />
														<a
															href="/coupon-detail"
															className="ver_container"
														>
															<img
																src={require("../images/ex/01_03.jpg")}
																alt="$COUPON_TITLE"
															/>
														</a>
													</div>
												</div>
												<div className="coupon-price">
													$17.50 off
												</div>
												<div className="coupon-brand">
													Lindt Chocolate
												</div>
												<div className="coupon-desc">
													Find Parts for All Major
													Brands at Sears PartsDirect{" "}
												</div>
												<div className="time-left">
													9 days 4 hours left
												</div>
												<button className="btn btn-blue btn-take-coupon">
													Take Coupon
												</button>
											</div>
										</div>
										{/*end: .coupon-item */}
										<div className="coupon-item grid_3">
											<div className="coupon-content">
												<div className="img-thumb-center">
													<div className="wrap-img-thumb">
														<span className="ver_hold" />
														<a
															href="/coupon-detail"
															className="ver_container"
														>
															<img
																src={require("../images/ex/01_01.jpg")}
																alt="$COUPON_TITLE"
															/>
														</a>
													</div>
												</div>
												<div className="coupon-price">
													$3.00 Off
												</div>
												<div className="coupon-brand">
													Lindt Chocolate
												</div>
												<div className="coupon-desc">
													Find Parts for All Major
													Brands at Sears PartsDirect{" "}
												</div>
												<div className="time-left">
													2 days 14 hours left
												</div>
												<button className="btn btn-blue btn-take-coupon">
													Take Coupon
												</button>
											</div>
										</div>
										{/*end: .coupon-item */}
										<div className="coupon-item grid_3">
											<div className="coupon-content">
												<div className="img-thumb-center">
													<div className="wrap-img-thumb">
														<span className="ver_hold" />
														<a
															href="/coupon-detail"
															className="ver_container"
														>
															<img
																src={require("../images/ex/01_04.jpg")}
																alt="$COUPON_TITLE"
															/>
														</a>
													</div>
												</div>
												<div className="coupon-price">
													$7.00 Off
												</div>
												<div className="coupon-brand">
													Walmart
												</div>
												<div className="coupon-desc">
													During the Red Star
													Spectacular Sale going on
													now get an extra 20% off
												</div>
												<div className="time-left">
													12 days 1 hour left
												</div>
												<button className="btn btn-blue btn-take-coupon">
													Take Coupon
												</button>
											</div>
										</div>
										{/*end: .coupon-item */}
										<div className="coupon-item grid_3">
											<div className="coupon-content">
												<div className="img-thumb-center">
													<div className="wrap-img-thumb">
														<span className="ver_hold" />
														<a
															href="/coupon-detail"
															className="ver_container"
														>
															<img
																src={require("../images/ex/01_04.jpg")}
																alt="$COUPON_TITLE"
															/>
														</a>
													</div>
												</div>
												<div className="coupon-price">
													$2.00 Off
												</div>
												<div className="coupon-brand">
													Lindt Chocolate
												</div>
												<div className="coupon-desc">
													Find Parts for All Major
													Brands at Sears PartsDirect{" "}
												</div>
												<div className="time-left">
													9 days 4 hours left
												</div>
												<button className="btn btn-blue btn-take-coupon">
													Take Coupon
												</button>
											</div>
										</div>
										{/*end: .coupon-item */}
										<div className="coupon-item grid_3">
											<div className="coupon-content">
												<div className="img-thumb-center">
													<div className="wrap-img-thumb">
														<span className="ver_hold" />
														<a
															href="/coupon-detail"
															className="ver_container"
														>
															<img
																src={require("../images/ex/01_01.jpg")}
																alt="$COUPON_TITLE"
															/>
														</a>
													</div>
												</div>
												<div className="coupon-price">
													$11.50 off
												</div>
												<div className="coupon-brand">
													Lindt Chocolate
												</div>
												<div className="coupon-desc">
													Find Parts for All Major
													Brands at Sears PartsDirect{" "}
												</div>
												<div className="time-left">
													9 days 4 hours left
												</div>
												<button className="btn btn-blue btn-take-coupon">
													Take Coupon
												</button>
											</div>
										</div>
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
