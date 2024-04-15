import React from "react";
import Layout from "./Layout";

const MyCoupon = () => {
	const url = new URLSearchParams(window.location.search);
	const page = parseInt(url.get("page"));
	console.log(page);
	const pageArray =
		page <= 3
			? [1, 2, 3, 4, 5]
			: page >= 13
			? [11, 12, 13, 14, 15]
			: [page - 2, page - 1, page, page + 1, page + 2];
	console.log(pageArray);
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
											COUPONS (12)
										</span>
										<span className="lbl-tab">
											COUPON CODES (8)
										</span>
										<span className="lbl-tab">
											BRANDS (6)
										</span>
									</span>
								</h3>
							</div>
							<div className="block-content list-coupon clearfix">
								<div className="tab-content">
									<div className="tab-content-item clearfix active">
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
													Wallmart
												</div>
												<div className="coupon-desc">
													Find Parts for All Major
													Brands at Sears PartsDirect{" "}
												</div>
												<div className="time-left">
													9 days 4 hours left
												</div>
												<a
													className="btn-discard"
													href="#"
												>
													Discard coupon
												</a>
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
															href="#"
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
												<a
													className="btn-discard"
													href="#"
												>
													Discard coupon
												</a>
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
															href="#"
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
													EXPIRED
												</div>
												<a
													className="btn-discard"
													href="#"
												>
													Discard coupon
												</a>
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
															href="#"
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
													Wallmart
												</div>
												<div className="coupon-desc">
													During the Red Star
													Spectacular Sale going on
													now get an extra 20% off
												</div>
												<div className="time-left">
													12 days 1 hour left
												</div>
												<a
													className="btn-discard"
													href="#"
												>
													Discard coupon
												</a>
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
															href="#"
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
													Wallmart
												</div>
												<div className="coupon-desc">
													Find Parts for All Major
													Brands at Sears PartsDirect{" "}
												</div>
												<div className="time-left">
													EXPIRED
												</div>
												<a
													className="btn-discard"
													href="#"
												>
													Discard coupon
												</a>
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
															href="#"
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
												<a
													className="btn-discard"
													href="#"
												>
													Discard coupon
												</a>
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
															href="#"
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
													EXPIRED
												</div>
												<a
													className="btn-discard"
													href="#"
												>
													Discard coupon
												</a>
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
															href="#"
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
													Wallmart
												</div>
												<div className="coupon-desc">
													During the Red Star
													Spectacular Sale going on
													now get an extra 20% off
												</div>
												<div className="time-left">
													12 days 1 hour left
												</div>
												<a
													className="btn-discard"
													href="#"
												>
													Discard coupon
												</a>
											</div>
											<i className="stick-lbl hot-sale" />
										</div>
										{/*end: .coupon-item */}
										<div className="grid_12">
											<div className="pagination">
												{page > 3 && (
													<a
														className="txt-nav"
														href={`?page=${
															page - 1
														}`}
													>
														Newer post
													</a>
												)}

												{pageArray.map((num) => (
													<a
														className={`page-num ${
															num === page
																? "active"
																: ""
														}`}
														href={`?page=${num}`}
													>
														{num}
													</a>
												))}
												{page < 13 && (
													<a
														className="txt-nav"
														href={`?page=${
															page + 1
														}`}
													>
														Older post
													</a>
												)}
											</div>
										</div>
									</div>
									{/*end: tab coupon*/}
									<div className="tab-content-item clearfix">
										<div className="coupons-code-item view-code flex grid_6">
											<div className="brand-logo thumb-left">
												<div className="wrap-logo">
													<div className="center-img">
														<span className="ver_hold" />
														<a
															href="#"
															className="ver_container"
														>
															<img
																src={require("../images/ex/04-01.jpg")}
																alt="$BRAND_NAME"
															/>
														</a>
													</div>
												</div>
											</div>
											<div className="right-content flex-body">
												<p className="rs save-price">
													<a href="#">
														Save 10% Off a New Hotel
														Booking at Participating
														Price Match Guarantee
														Hotels
													</a>{" "}
													<i className="icon iI" />
												</p>
												<div className="bottom-action clearfix">
													<span className="codes">
														223487 GHT 379
													</span>
													<a
														className="btn-discard"
														href="#"
													>
														Discard
													</a>
												</div>
											</div>
										</div>
										{/*end: .coupons-code-item */}
										<div className="coupons-code-item view-code flex grid_6">
											<div className="brand-logo thumb-left">
												<div className="wrap-logo">
													<div className="center-img">
														<span className="ver_hold" />
														<a
															href="#"
															className="ver_container"
														>
															<img
																src={require("../images/ex/04-01.jpg")}
																alt="$BRAND_NAME"
															/>
														</a>
													</div>
												</div>
											</div>
											<div className="right-content flex-body">
												<p className="rs save-price">
													<a href="#">
														Save 10% Off a New Hotel
														Booking at Participating
														Price Match Guarantee
														Hotels
													</a>{" "}
													<i className="icon iI" />
												</p>
												<div className="bottom-action clearfix">
													<span className="codes">
														223487 GHT 379
													</span>
													<a
														className="btn-discard"
														href="#"
													>
														Discard
													</a>
												</div>
											</div>
										</div>
										{/*end: .coupons-code-item */}
										<div className="coupons-code-item view-code flex grid_6">
											<div className="brand-logo thumb-left">
												<div className="wrap-logo">
													<div className="center-img">
														<span className="ver_hold" />
														<a
															href="#"
															className="ver_container"
														>
															<img
																src={require("../images/ex/04-01.jpg")}
																alt="$BRAND_NAME"
															/>
														</a>
													</div>
												</div>
											</div>
											<div className="right-content flex-body">
												<p className="rs save-price">
													<a href="#">
														Save 10% Off a New Hotel
														Booking at Participating
														Price Match Guarantee
														Hotels
													</a>{" "}
													<i className="icon iI" />
												</p>
												<div className="bottom-action clearfix">
													<span className="codes">
														223487 GHT 379
													</span>
													<a
														className="btn-discard"
														href="#"
													>
														Discard
													</a>
												</div>
											</div>
										</div>
										{/*end: .coupons-code-item */}
										<div className="coupons-code-item view-code flex grid_6">
											<div className="brand-logo thumb-left">
												<div className="wrap-logo">
													<div className="center-img">
														<span className="ver_hold" />
														<a
															href="#"
															className="ver_container"
														>
															<img
																src={require("../images/ex/04-01.jpg")}
																alt="$BRAND_NAME"
															/>
														</a>
													</div>
												</div>
											</div>
											<div className="right-content flex-body">
												<p className="rs save-price">
													<a href="#">
														Save 10% Off a New Hotel
														Booking at Participating
														Price Match Guarantee
														Hotels
													</a>{" "}
													<i className="icon iI" />
												</p>
												<div className="bottom-action clearfix">
													<span className="codes">
														223487 GHT 379
													</span>
													<a
														className="btn-discard"
														href="#"
													>
														Discard
													</a>
												</div>
											</div>
										</div>
										{/*end: .coupons-code-item */}
										<div className="grid_12">
											<div className="pagination">
												{page > 3 && (
													<a
														className="txt-nav"
														href={`?page=${
															page - 1
														}`}
													>
														Newer post
													</a>
												)}

												{pageArray.map((num) => (
													<a
														className={`page-num ${
															num === page
																? "active"
																: ""
														}`}
														href={`?page=${num}`}
													>
														{num}
													</a>
												))}
												{page < 13 && (
													<a
														className="txt-nav"
														href={`?page=${
															page + 1
														}`}
													>
														Older post
													</a>
												)}
											</div>
										</div>
									</div>
									{/*end: tab Coupon codes*/}
									<div className="tab-content-item clearfix">
										<div className="brand-item grid_4">
											<div className="brand-content">
												<div className="brand-logo">
													<div className="wrap-img-logo">
														<span className="ver_hold" />
														<a
															href="#"
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
											<div className="wrap-unfollow ta-c">
												<a
													className="btn-discard"
													href="#"
												>
													Unfollow
												</a>
											</div>
										</div>
										{/*end: .brand-item */}
										<div className="brand-item grid_4">
											<div className="brand-content">
												<div className="brand-logo">
													<div className="wrap-img-logo">
														<span className="ver_hold" />
														<a
															href="#"
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
											<div className="wrap-unfollow ta-c">
												<a
													className="btn-discard"
													href="#"
												>
													Unfollow
												</a>
											</div>
										</div>
										{/*end: .brand-item */}
										<div className="brand-item grid_4">
											<div className="brand-content">
												<div className="brand-logo">
													<div className="wrap-img-logo">
														<span className="ver_hold" />
														<a
															href="#"
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
											<div className="wrap-unfollow ta-c">
												<a
													className="btn-discard"
													href="#"
												>
													Unfollow
												</a>
											</div>
										</div>
										{/*end: .brand-item */}
										<div className="brand-item grid_4">
											<div className="brand-content">
												<div className="brand-logo">
													<div className="wrap-img-logo">
														<span className="ver_hold" />
														<a
															href="#"
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
											<div className="wrap-unfollow ta-c">
												<a
													className="btn-discard"
													href="#"
												>
													Unfollow
												</a>
											</div>
										</div>
										{/*end: .brand-item */}
										<div className="brand-item grid_4">
											<div className="brand-content">
												<div className="brand-logo">
													<div className="wrap-img-logo">
														<span className="ver_hold" />
														<a
															href="#"
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
											<div className="wrap-unfollow ta-c">
												<a
													className="btn-discard"
													href="#"
												>
													Unfollow
												</a>
											</div>
										</div>
										{/*end: .brand-item */}
										<div className="brand-item grid_4">
											<div className="brand-content">
												<div className="brand-logo">
													<div className="wrap-img-logo">
														<span className="ver_hold" />
														<a
															href="#"
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
											<div className="wrap-unfollow ta-c">
												<a
													className="btn-discard"
													href="#"
												>
													Unfollow
												</a>
											</div>
										</div>
										{/*end: .brand-item */}
									</div>
									{/*end: tab Brands*/}
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
