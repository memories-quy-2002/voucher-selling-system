import React from "react";
import couponData from "../components/coupons.json";
import CouponItem from "./CouponItem";
import starRate from "../images/star-rate.png?v=0.1121989";

const BrandDetailOne = () => {
	const url = new URLSearchParams(window.location.search);
	const id = parseInt(url.get("id"));
	console.log(id);
	const allCoupons = couponData.new.concat(couponData.featured);
	const brandCoupons = allCoupons.filter((coupon) =>
		id === 1
			? coupon.brand === "Lindt Chocolate"
			: coupon.brand === "Walmart"
	);
	console.log(brandCoupons);
	return (
		<div>
			<div className="top-area">
				<div className="top-of-brand">
					<img
						className="brand-img"
						style={{
							backgroundImage: 'url("/images/ex/07-01.jpg")',
						}}
						src={require("../images/null.gif")}
						alt="Lindt"
					/>
					<div className="grid_frame">
						<div className="container_grid clearfix">
							<div className="grid_12">
								<h2 className="page-title">
									{id === 1 ? "Lindt" : "Walmart"}
								</h2>
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
											src={require(`../images/ex/${
												id === 1 ? "01_07" : "04-07"
											}.jpg`)}
											alt="$BRAND_NAME"
										/>
									</div>
								</div>
								<div className="grid_2 make-right">
									<div className="ta-c">
										<span
											className="star-rate"
											style={{
												backgroundImage: `url(${starRate})`,
											}}
										>
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
							{brandCoupons.map((coupon) => (
								<CouponItem key={coupon.id} coupon={coupon} />
							))}
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
