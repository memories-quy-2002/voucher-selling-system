import React from "react";

const BrandDetailOne = () => {
	return (
		<div>
			<div className="top-area">
				<div className="top-of-brand">
					<img
						className="brand-img"
						style={{
							backgroundImage: 'url("../images/ex/07-01.jpg")',
						}}
						src={require("../images/null.gif")}
						alt="Lindt"
					/>
					<div className="grid_frame">
						<div className="container_grid clearfix">
							<div className="grid_12">
								<h2 className="page-title">Lindt</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid_frame page-content">
				<div className="container_grid">
					<div className="mod-grp-coupon block">
						<div className="brand-top-info clearfix">
							<div className="wrap-for-res">
								<div className="grid_3 wrap-brand-logo">
									<div className="brand-logo">
										<img
											src={require("../images/ex/01_07.jpg")}
											alt="$BRAND_NAME"
										/>
									</div>
								</div>
								<div className="grid_2 make-right">
									<div className="ta-c">
										<span className="star-rate">
											<span style={{ width: "74%" }} />
										</span>
										<a
											className="btn btn-orange btn-follow-brand"
											href="/brand-detail"
										>
											Follow brand
										</a>
									</div>
								</div>
							</div>
							<div className="grid_7">
								<div className="brand-desc">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. In quis metus non nunc
									iaculis dapibus. Nullam tempus accumsan
									metus vitae facilisis. Nullam non faucibus
									nisi, nec auctor neque. Ut consequat
									consequat purus. Sed vestivbulum viverra
									nulla vel fermentum. Fusce luctus ultrices
									lorem, in placerat nibh adipiscing ut.{" "}
								</div>
							</div>
						</div>
						<div className="block-content list-coupon clearfix">
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
									<div className="coupon-brand">Wallmart</div>
									<div className="coupon-desc">
										Find Parts for All Major Brands at Sears
										PartsDirect{" "}
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
										Find Parts for All Major Brands at Sears
										PartsDirect{" "}
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
										Find Parts for All Major Brands at Sears
										PartsDirect{" "}
									</div>
									<div className="time-left">
										2 days 14 hours left
									</div>
									<a
										className="btn btn-blue btn-take-coupon untake"
										href="#"
									>
										Un Take Coupon
									</a>
								</div>
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
									<div className="coupon-brand">Wallmart</div>
									<div className="coupon-desc">
										During the Red Star Spectacular Sale
										going on now get an extra 20% off
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
									<div className="coupon-brand">Wallmart</div>
									<div className="coupon-desc">
										Find Parts for All Major Brands at Sears
										PartsDirect{" "}
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
										Find Parts for All Major Brands at Sears
										PartsDirect{" "}
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
										Find Parts for All Major Brands at Sears
										PartsDirect{" "}
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
									<div className="coupon-brand">Wallmart</div>
									<div className="coupon-desc">
										During the Red Star Spectacular Sale
										going on now get an extra 20% off
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
										$2.00 Off
									</div>
									<div className="coupon-brand">
										Lindt Chocolate
									</div>
									<div className="coupon-desc">
										Find Parts for All Major Brands at Sears
										PartsDirect{" "}
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
										$11.50 off
									</div>
									<div className="coupon-brand">
										Lindt Chocolate
									</div>
									<div className="coupon-desc">
										Find Parts for All Major Brands at Sears
										PartsDirect{" "}
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
										$12.00 Off
									</div>
									<div className="coupon-brand">SunMart</div>
									<div className="coupon-desc">
										Find Parts for All Major Brands at Sears
										PartsDirect{" "}
									</div>
									<div className="time-left">
										2 days 14 hours left
									</div>
									<a
										className="btn btn-blue btn-take-coupon untake"
										href="#"
									>
										Un Take Coupon
									</a>
								</div>
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
									<div className="coupon-price">$4.5 Off</div>
									<div className="coupon-brand">Wallmart</div>
									<div className="coupon-desc">
										During the Red Star Spectacular Sale
										going on now get an extra 20% off
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
					</div>
					{/*end block: Featured Coupons*/}
				</div>
			</div>
		</div>
	);
};

export default BrandDetailOne;
