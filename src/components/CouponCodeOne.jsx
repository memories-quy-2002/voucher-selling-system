import React, { useState } from "react";
import Pagination from "./Pagination";

const CouponCodeOne = () => {
	const url = new URLSearchParams(window.location.search);
	const page = parseInt(url.get("page"));
	const [codes, setCodes] = useState({}); // Object to store code for each button ID

	const generateCode = (buttonId) => {
		const characters =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		let result = "";
		const charactersLength = characters.length;
		for (let i = 0; i < 8; i++) {
			result += characters.charAt(
				Math.floor(Math.random() * charactersLength)
			);
		}
		console.log(result);
		setCodes((prevCodes) => ({ ...prevCodes, [buttonId]: result })); // Update specific key-value pair
	};
	return (
		<>
			<div>
				<div className="top-area">
					<div className="grid_frame">
						<div className="container_grid clearfix">
							<div className="grid_12">
								<h2 className="page-title">Coupon Code</h2>
							</div>
						</div>
					</div>
				</div>
				<div id="sys_mod_filter" className="mod-filter">
					{" "}
				</div>
				{/*end: .mod-filter */}
				<div className="grid_frame page-content">
					<div className="container_grid">
						<div className="layout-2cols clearfix">
							<div className="grid_8 content">
								<div className="mod-coupons-code">
									<div className="wrap-list">
										<div className="coupons-code-item full flex">
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
														Save 20%-50% Off All
														Vitamin World Brand
														Items
													</a>
												</p>
												<p className="rs coupon-desc">
													Must book by 11:59PM CT on
													11/17/13. Travel completed
													by 3/30/14.
												</p>
												<div className="bottom-action">
													<div className="left-vote">
														<span className="lbl-work">
															100% work
														</span>
														<span>
															<span className="lbl-vote">
																12{" "}
																<i className="icon iAddVote" />
															</span>
															<span className="lbl-vote">
																2{" "}
																<i className="icon iSubVote" />
															</span>
														</span>
													</div>
													{codes[1] ? (
														<button
															className="btn btn-blue btn-view-coupon"
															disabled
														>
															{codes[1]}
														</button>
													) : (
														<button
															className="btn btn-blue btn-view-coupon"
															onClick={() =>
																generateCode(
																	"1"
																)
															}
														>
															VIEW COUPON CODE
														</button>
													)}
												</div>
											</div>
										</div>
										{/*end: .coupons-code-item */}
										<div className="coupons-code-item flex">
											<div className="brand-logo thumb-left">
												<div className="wrap-logo">
													<div className="center-img">
														<span className="ver_hold" />
														<a
															href="#"
															className="ver_container"
														>
															<img
																src={require("../images/ex/04-04.jpg")}
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
													</a>
												</p>
												<p className="rs coupon-desc">
													Must book by 11:59PM CT on
													11/17/13. Travel completed
													by 3/30/14.
												</p>
												<div className="bottom-action">
													<div className="left-vote">
														<span className="lbl-work">
															100% work
														</span>
														<span>
															<span className="lbl-vote">
																12{" "}
																<i className="icon iAddVote" />
															</span>
															<span className="lbl-vote">
																2{" "}
																<i className="icon iSubVote" />
															</span>
														</span>
													</div>
													{codes[2] ? (
														<button
															className="btn btn-blue btn-view-coupon"
															disabled
														>
															{codes[2]}
														</button>
													) : (
														<button
															className="btn btn-blue btn-view-coupon"
															onClick={() =>
																generateCode(
																	"2"
																)
															}
														>
															VIEW COUPON CODE
														</button>
													)}
												</div>
											</div>
										</div>
										{/*end: .coupons-code-item */}
										<div className="coupons-code-item flex">
											<div className="brand-logo thumb-left">
												<div className="wrap-logo">
													<div className="center-img">
														<span className="ver_hold" />
														<a
															href="#"
															className="ver_container"
														>
															<img
																src={require("../images/ex/04-05.jpg")}
																alt="$BRAND_NAME"
															/>
														</a>
													</div>
												</div>
											</div>
											<div className="right-content flex-body">
												<p className="rs save-price">
													<a href="#">
														Save 20%-50% Off All
														Vitamin World Brand
														Items
													</a>
												</p>
												<p className="rs coupon-desc">
													Must book by 11:59PM CT on
													11/17/13. Travel completed
													by 3/30/14.
												</p>
												<div className="bottom-action">
													<div className="left-vote">
														<span className="lbl-work">
															100% work
														</span>
														<span>
															<span className="lbl-vote">
																16{" "}
																<i className="icon iAddVote" />
															</span>
															<span className="lbl-vote">
																0{" "}
																<i className="icon iSubVote" />
															</span>
														</span>
													</div>
													{codes[3] ? (
														<button
															className="btn btn-blue btn-view-coupon"
															disabled
														>
															{codes[3]}
														</button>
													) : (
														<button
															className="btn btn-blue btn-view-coupon"
															onClick={() =>
																generateCode(
																	"3"
																)
															}
														>
															VIEW COUPON CODE
														</button>
													)}
												</div>
											</div>
										</div>
										{/*end: .coupons-code-item */}
										<div className="coupons-code-item flex">
											<div className="brand-logo thumb-left">
												<div className="wrap-logo">
													<div className="center-img">
														<span className="ver_hold" />
														<a
															href="#"
															className="ver_container"
														>
															<img
																src={require("../images/ex/04-02.jpg")}
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
													</a>
												</p>
												<p className="rs coupon-desc">
													Must book by 11:59PM CT on
													11/17/13. Travel completed
													by 3/30/14.
												</p>
												<div className="bottom-action">
													<div className="left-vote">
														<span className="lbl-work">
															100% work
														</span>
														<span>
															<span className="lbl-vote">
																21{" "}
																<i className="icon iAddVote" />
															</span>
															<span className="lbl-vote">
																12{" "}
																<i className="icon iSubVote" />
															</span>
														</span>
													</div>
													{codes[4] ? (
														<button
															className="btn btn-blue btn-view-coupon"
															disabled
														>
															{codes[4]}
														</button>
													) : (
														<button
															className="btn btn-blue btn-view-coupon"
															onClick={() =>
																generateCode(
																	"4"
																)
															}
														>
															VIEW COUPON CODE
														</button>
													)}
												</div>
											</div>
										</div>
										{/*end: .coupons-code-item */}
										<div className="coupons-code-item flex">
											<div className="brand-logo thumb-left">
												<div className="wrap-logo">
													<div className="center-img">
														<span className="ver_hold" />
														<a
															href="#"
															className="ver_container"
														>
															<img
																src={require("../images/ex/04-06.jpg")}
																alt="$BRAND_NAME"
															/>
														</a>
													</div>
												</div>
											</div>
											<div className="right-content flex-body">
												<p className="rs save-price">
													<a href="#">
														Save 20%-50% Off All
														Vitamin World Brand
														Items
													</a>
												</p>
												<p className="rs coupon-desc">
													Must book by 11:59PM CT on
													11/17/13. Travel completed
													by 3/30/14.
												</p>
												<div className="bottom-action">
													<div className="left-vote">
														<span className="lbl-work">
															100% work
														</span>
														<span>
															<span className="lbl-vote">
																321{" "}
																<i className="icon iAddVote" />
															</span>
															<span className="lbl-vote">
																5{" "}
																<i className="icon iSubVote" />
															</span>
														</span>
													</div>
													{codes[5] ? (
														<button
															className="btn btn-blue btn-view-coupon"
															disabled
														>
															{codes[5]}
														</button>
													) : (
														<button
															className="btn btn-blue btn-view-coupon"
															onClick={() =>
																generateCode(
																	"5"
																)
															}
														>
															VIEW COUPON CODE
														</button>
													)}
												</div>
											</div>
										</div>
										{/*end: .coupons-code-item */}
										<div className="coupons-code-item flex">
											<div className="brand-logo thumb-left">
												<div className="wrap-logo">
													<div className="center-img">
														<span className="ver_hold" />
														<a
															href="#"
															className="ver_container"
														>
															<img
																src={require("../images/ex/04-04.jpg")}
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
													</a>
												</p>
												<p className="rs coupon-desc">
													Must book by 11:59PM CT on
													11/17/13. Travel completed
													by 3/30/14.
												</p>
												<div className="bottom-action">
													<div className="left-vote">
														<span className="lbl-work">
															100% work
														</span>
														<span>
															<span className="lbl-vote">
																34{" "}
																<i className="icon iAddVote" />
															</span>
															<span className="lbl-vote">
																8{" "}
																<i className="icon iSubVote" />
															</span>
														</span>
													</div>
													{codes[6] ? (
														<button
															className="btn btn-blue btn-view-coupon"
															disabled
														>
															{codes[6]}
														</button>
													) : (
														<button
															className="btn btn-blue btn-view-coupon"
															onClick={() =>
																generateCode(
																	"6"
																)
															}
														>
															VIEW COUPON CODE
														</button>
													)}
												</div>
											</div>
										</div>
										{/*end: .coupons-code-item */}
										<div className="coupons-code-item flex">
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
														Save 20%-50% Off All
														Vitamin World Brand
														Items
													</a>
												</p>
												<p className="rs coupon-desc">
													Must book by 11:59PM CT on
													11/17/13. Travel completed
													by 3/30/14.
												</p>
												<div className="bottom-action">
													<div className="left-vote">
														<span className="lbl-work">
															100% work
														</span>
														<span>
															<span className="lbl-vote">
																59{" "}
																<i className="icon iAddVote" />
															</span>
															<span className="lbl-vote">
																21{" "}
																<i className="icon iSubVote" />
															</span>
														</span>
													</div>
													{codes[7] ? (
														<button
															className="btn btn-blue btn-view-coupon"
															disabled
														>
															{codes[7]}
														</button>
													) : (
														<button
															className="btn btn-blue btn-view-coupon"
															onClick={() =>
																generateCode(
																	"7"
																)
															}
														>
															VIEW COUPON CODE
														</button>
													)}
												</div>
											</div>
										</div>
										{/*end: .coupons-code-item */}
										<div className="coupons-code-item flex">
											<div className="brand-logo thumb-left">
												<div className="wrap-logo">
													<div className="center-img">
														<span className="ver_hold" />
														<a
															href="#"
															className="ver_container"
														>
															<img
																src={require("../images/ex/04-05.jpg")}
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
													</a>
												</p>
												<p className="rs coupon-desc">
													Must book by 11:59PM CT on
													11/17/13. Travel completed
													by 3/30/14.
												</p>
												<div className="bottom-action">
													<div className="left-vote">
														<span className="lbl-work">
															100% work
														</span>
														<span>
															<span className="lbl-vote">
																63{" "}
																<i className="icon iAddVote" />
															</span>
															<span className="lbl-vote">
																10{" "}
																<i className="icon iSubVote" />
															</span>
														</span>
													</div>
													{codes[8] ? (
														<button
															className="btn btn-blue btn-view-coupon"
															disabled
														>
															{codes[8]}
														</button>
													) : (
														<button
															className="btn btn-blue btn-view-coupon"
															onClick={() =>
																generateCode(
																	"8"
																)
															}
														>
															VIEW COUPON CODE
														</button>
													)}
												</div>
											</div>
										</div>
										{/*end: .coupons-code-item */}
										<div className="coupons-code-item flex">
											<div className="brand-logo thumb-left">
												<div className="wrap-logo">
													<div className="center-img">
														<span className="ver_hold" />
														<a
															href="#"
															className="ver_container"
														>
															<img
																src={require("../images/ex/04-06.jpg")}
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
													</a>
												</p>
												<p className="rs coupon-desc">
													Must book by 11:59PM CT on
													11/17/13. Travel completed
													by 3/30/14.
												</p>
												<div className="bottom-action">
													<div className="left-vote">
														<span className="lbl-work">
															100% work
														</span>
														<span>
															<span className="lbl-vote">
																63{" "}
																<i className="icon iAddVote" />
															</span>
															<span className="lbl-vote">
																10{" "}
																<i className="icon iSubVote" />
															</span>
														</span>
													</div>
													<button className="btn btn-blue btn-view-coupon">
														VIEW COUPON CODE
													</button>
												</div>
											</div>
										</div>
										{/*end: .coupons-code-item */}
									</div>
									<Pagination page={page} />
								</div>
								{/*end: .mod-coupons-code */}
							</div>
							<div className="grid_4 sidebar">
								<div className="mod-search block">
									<h3 className="title-block">
										Find your coupon code
									</h3>
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
												class="btn-search"
												value=""
											></input>
										</label>
									</div>
								</div>
								{/*end: .mod-search */}
								<div className="mod-list-store block">
									<h3 className="title-block">
										Popular store
									</h3>
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
									<h3 className="title-block">
										Latest coupon
									</h3>
									<div className="block-content">
										<div className="coupons-code-item simple flex">
											<div className="brand-logo thumb-left">
												<div className="wrap-logo">
													<div className="center-img">
														<span className="ver_hold" />
														<a
															href="#"
															className="ver_container"
														>
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
														Save 10% Off a New Hotel
														Booking at Participating
														Price Match Guarantee
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
														<a
															href="#"
															className="ver_container"
														>
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
														Save 10% Off a New Hotel
														Booking at Participating
														Price Match Guarantee
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
														<a
															href="#"
															className="ver_container"
														>
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
														Save 10% Off a New Hotel
														Booking at Participating
														Price Match Guarantee
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
														<a
															href="#"
															className="ver_container"
														>
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
														Save 10% Off a New Hotel
														Booking at Participating
														Price Match Guarantee
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
														<a
															href="#"
															className="ver_container"
														>
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
														Save 10% Off a New Hotel
														Booking at Participating
														Price Match Guarantee
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
										<a
											className="btn btn-gray type-tag"
											href="#"
										>
											Sweet
										</a>
										<a
											className="btn btn-gray type-tag"
											href="#"
										>
											Lindor
										</a>
										<a
											className="btn btn-gray type-tag"
											href="#"
										>
											Food
										</a>
										<a
											className="btn btn-gray type-tag"
											href="#"
										>
											Lindt
										</a>
										<a
											className="btn btn-gray type-tag"
											href="#"
										>
											Walmart
										</a>
										<a
											className="btn btn-gray type-tag"
											href="#"
										>
											Chocolate
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CouponCodeOne;
