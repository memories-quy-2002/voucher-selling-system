import React from "react";

const Aside = () => {
	return (
		<>
			<div className="grid_4 sidebar">
				<div className="mod-search block">
					<h3 className="title-block">Find your voucher code</h3>
					<div className="block-content">
						<label
							className="lbl-wrap"
							htmlFor="sys_search_coupon_code"
						>
							<input
								className="keyword-search"
								id="sys_search_coupon_code"
								type="search"
								placeholder="Search"
							/>
							<input
								type="submit"
								className="btn-search"
								defaultValue
							/>
						</label>
					</div>
				</div>
				{/*end: .mod-search */}
				<div className="mod-list-store block">
					<h3 className="title-block">Popular store</h3>
					<div className="block-content">
						<div className="wrap-list-store clearfix">
							<a className="brand-logo" href="#">
								<span className="wrap-logo">
									<span className="center-img">
										<span className="ver_hold" />
										<span className="ver_container">
											<img
												src={require("../images/ex/04-07.jpg")}
												alt="$BRAND_NAME"
											/>
										</span>
									</span>
								</span>
							</a>
							<a className="brand-logo" href="#">
								<span className="wrap-logo">
									<span className="center-img">
										<span className="ver_hold" />
										<span className="ver_container">
											<img
												src={require("../images/ex/04-12.jpg")}
												alt="$BRAND_NAME"
											/>
										</span>
									</span>
								</span>
							</a>
							<a className="brand-logo" href="#">
								<span className="wrap-logo">
									<span className="center-img">
										<span className="ver_hold" />
										<span className="ver_container">
											<img
												src={require("../images/ex/04-11.jpg")}
												alt="$BRAND_NAME"
											/>
										</span>
									</span>
								</span>
							</a>
							<a className="brand-logo" href="#">
								<span className="wrap-logo">
									<span className="center-img">
										<span className="ver_hold" />
										<span className="ver_container">
											<img
												src={require("../images/ex/04-10.jpg")}
												alt="$BRAND_NAME"
											/>
										</span>
									</span>
								</span>
							</a>
							<a className="brand-logo" href="#">
								<span className="wrap-logo">
									<span className="center-img">
										<span className="ver_hold" />
										<span className="ver_container">
											<img
												src={require("../images/ex/04-09.jpg")}
												alt="$BRAND_NAME"
											/>
										</span>
									</span>
								</span>
							</a>
							<a className="brand-logo" href="#">
								<span className="wrap-logo">
									<span className="center-img">
										<span className="ver_hold" />
										<span className="ver_container">
											<img
												src={require("../images/ex/04-08.jpg")}
												alt="$BRAND_NAME"
											/>
										</span>
									</span>
								</span>
							</a>
						</div>
					</div>
				</div>
				{/*end: .mod-list-store */}
				<div className="mod-simple-coupon block">
					<h3 className="title-block">Latest voucher</h3>
					<div className="block-content">
						<div className="coupons-code-item simple flex">
							<div className="brand-logo thumb-left">
								<div className="wrap-logo">
									<div className="center-img">
										<span className="ver_hold" />
										<a href="#" className="ver_container">
											<img
												src={require("../images/ex/04-13.jpg")}
												alt="$BRAND_NAME"
											/>
										</a>
									</div>
								</div>
							</div>
							<div className="right-content flex-body">
								<p className="rs save-price">
									<a href="#">
										Save 10% Off a New Hotel Booking at
										Participating Price Match Guarantee
										Hotels
									</a>
								</p>
							</div>
						</div>
						{/*end: .coupons-code-item */}
						<div className="coupons-code-item simple flex">
							<div className="brand-logo thumb-left">
								<div className="wrap-logo">
									<div className="center-img">
										<span className="ver_hold" />
										<a href="#" className="ver_container">
											<img
												src={require("../images/ex/04-14.jpg")}
												alt="$BRAND_NAME"
											/>
										</a>
									</div>
								</div>
							</div>
							<div className="right-content flex-body">
								<p className="rs save-price">
									<a href="#">
										Save 10% Off a New Hotel Booking at
										Participating Price Match Guarantee
										Hotels
									</a>
								</p>
							</div>
						</div>
						{/*end: .coupons-code-item */}
						<div className="coupons-code-item simple flex">
							<div className="brand-logo thumb-left">
								<div className="wrap-logo">
									<div className="center-img">
										<span className="ver_hold" />
										<a href="#" className="ver_container">
											<img
												src={require("../images/ex/04-15.jpg")}
												alt="$BRAND_NAME"
											/>
										</a>
									</div>
								</div>
							</div>
							<div className="right-content flex-body">
								<p className="rs save-price">
									<a href="#">
										Save 10% Off a New Hotel Booking at
										Participating Price Match Guarantee
										Hotels
									</a>
								</p>
							</div>
						</div>
						{/*end: .coupons-code-item */}
						<div className="coupons-code-item simple flex">
							<div className="brand-logo thumb-left">
								<div className="wrap-logo">
									<div className="center-img">
										<span className="ver_hold" />
										<a href="#" className="ver_container">
											<img
												src={require("../images/ex/04-16.jpg")}
												alt="$BRAND_NAME"
											/>
										</a>
									</div>
								</div>
							</div>
							<div className="right-content flex-body">
								<p className="rs save-price">
									<a href="#">
										Save 10% Off a New Hotel Booking at
										Participating Price Match Guarantee
										Hotels
									</a>
								</p>
							</div>
						</div>
						{/*end: .coupons-code-item */}
						<div className="coupons-code-item simple flex">
							<div className="brand-logo thumb-left">
								<div className="wrap-logo">
									<div className="center-img">
										<span className="ver_hold" />
										<a href="#" className="ver_container">
											<img
												src={require("../images/ex/04-13.jpg")}
												alt="$BRAND_NAME"
											/>
										</a>
									</div>
								</div>
							</div>
							<div className="right-content flex-body">
								<p className="rs save-price">
									<a href="#">
										Save 10% Off a New Hotel Booking at
										Participating Price Match Guarantee
										Hotels
									</a>
								</p>
							</div>
						</div>
						{/*end: .coupons-code-item */}
					</div>
				</div>
				{/*end: .mod-simple-coupon */}
				<div className="mod-ads">
					<a href="#">
						<img
							src={require("../images/ex/04-17.jpg")}
							alt="$NAME"
						/>
					</a>
				</div>
				<div className="mod-popular-tag block">
					<h3 className="title-block">Popular Tag</h3>
					<div className="block-content">
						<a className="btn btn-gray type-tag" href="#">
							Sweet
						</a>
						<a className="btn btn-gray type-tag" href="#">
							Lindor
						</a>
						<a className="btn btn-gray type-tag" href="#">
							Food
						</a>
						<a className="btn btn-gray type-tag" href="#">
							Lindt
						</a>
						<a className="btn btn-gray type-tag" href="#">
							Walmart
						</a>
						<a className="btn btn-gray type-tag" href="#">
							Chocolate
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Aside;
