import React from "react";
import Layout from "./Layout";
import couponsData from "../components/vouchers.json";

const CouponDetail = () => {
	const url = new URLSearchParams(window.location.search);
	const id = parseInt(url.get("id"));
	const allCoupons = couponsData.new.concat(couponsData.featured);
	const couponDetail = allCoupons.filter((coupon) => coupon.id === id)[0];
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
								{couponDetail.price}
							</div>
							<span className="brand-name">
								{couponDetail.brand}
							</span>
							<div className="coupon-desc">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Duis vestibulum interdum ipsum,
								eu gravida massa cursus id. Pellentesque feugiat
								ante eu scelerisque porta. In quis velit ligula.
								Cum sociis natoque penatibus etmagnis dis
								parturient montes, nascetur ridiculus mus. Donec
								ac dignissim nulla.
							</div>
							<div className="wrap-btn clearfix">
								<div className="day-left">
									{couponDetail.days} days{" "}
									{couponDetail.hours} hours left
								</div>
								<button className="btn btn-blue btn-take-coupon">
									Take Coupon
								</button>
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
										target="blank"
									>
										<i className="fa fa-facebook-square fa-2x" />
									</a>
									<a
										href="https://www.twitter.com"
										target="blank"
									>
										<i className="fa fa-twitter-square fa-2x" />
									</a>
									<a
										href="https://www.pinterest.com"
										target="blank"
									>
										<i className="fa fa-pinterest-square fa-2x" />
									</a>
									<a
										href="https://www.linkedin.com"
										target="blank"
									>
										<i className="fa fa-linkedin-square fa-2x" />
									</a>
								</div>
							</div>
							<div className="wrap-tag">
								<span className="btn btn-gray type-tag tag-lbl">
									Tag
								</span>
								<span className="btn btn-gray type-tag">
									Sweet
								</span>
								<span className="btn btn-gray type-tag">
									Lindor
								</span>
								<span className="btn btn-gray type-tag">
									Food
								</span>
								<span className="btn btn-gray type-tag">
									Lindt
								</span>
								<span className="btn btn-gray type-tag">
									Walmart
								</span>
								<span className="btn btn-gray type-tag">
									Chocolate
								</span>
							</div>
						</div>
						<div className="grid_3">
							<div className="brand-info ta-c">
								<div className="brand-logo">
									<img
										src={require(`../images/ex/${
											couponDetail.brand ===
											"Lindt Chocolate"
												? "03-03"
												: "04-07"
										}.jpg`)}
										alt="$NAME"
									/>
								</div>
								<span className="star-rate">
									<span style={{ width: "91%" }} />
								</span>
								<div className="rated-number">
									{couponDetail.brand === "Walmart"
										? "523.138 Followers"
										: "289.876 Followers"}
								</div>
								<div className="brand-desc ta-l">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Duis vestibulum interdum
									ipsum, eu gravida massa cursus id.
									Pellentesque feugiat ante eu scelerisque
									porta. In quis velit ligula.{" "}
								</div>
								<a
									className="link-brand"
									href={`/brand-detail?id=${
										couponDetail.brand === "Lindt Chocolate"
											? 1
											: 2
									}`}
								>
									View Brand
								</a>
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
												Find Parts for All Major Brands
												at Sears PartsDirect{" "}
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
												Find Parts for All Major Brands
												at Sears PartsDirect{" "}
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
												Find Parts for All Major Brands
												at Sears PartsDirect{" "}
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
												During the Red Star Spectacular
												Sale going on now get an extra
												20% off
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
												Find Parts for All Major Brands
												at Sears PartsDirect{" "}
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
												Find Parts for All Major Brands
												at Sears PartsDirect{" "}
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
												Find Parts for All Major Brands
												at Sears PartsDirect{" "}
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
												During the Red Star Spectacular
												Sale going on now get an extra
												20% off
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
												Find Parts for All Major Brands
												at Sears PartsDirect{" "}
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
												Find Parts for All Major Brands
												at Sears PartsDirect{" "}
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
												Find Parts for All Major Brands
												at Sears PartsDirect{" "}
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
												During the Red Star Spectacular
												Sale going on now get an extra
												20% off
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
												During the Red Star Spectacular
												Sale going on now get an extra
												20% off
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
												Find Parts for All Major Brands
												at Sears PartsDirect{" "}
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
												Find Parts for All Major Brands
												at Sears PartsDirect{" "}
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
												Find Parts for All Major Brands
												at Sears PartsDirect{" "}
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
												During the Red Star Spectacular
												Sale going on now get an extra
												20% off
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
												Find Parts for All Major Brands
												at Sears PartsDirect{" "}
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
												Find Parts for All Major Brands
												at Sears PartsDirect{" "}
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
								<a href="/coupon" className="link-right">
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
		</Layout>
	);
};

export default CouponDetail;
