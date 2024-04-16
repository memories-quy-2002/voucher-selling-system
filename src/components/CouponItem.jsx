import React from "react";

const CouponItem = ({ coupon }) => {
	const { id, image, price, brand, desc, days, hours, isTaken, isSale } =
		coupon;
	return (
		<div className="coupon-item grid_3">
			<div className="coupon-content">
				<div className="img-thumb-center">
					<div className="wrap-img-thumb">
						<span className="ver_hold" />
						<a
							href={`/coupon-detail?id=${id}`}
							className="ver_container"
						>
							<img
								src={require(`../images/${image}`)}
								alt="$COUPON_TITLE"
							/>
						</a>
					</div>
				</div>
				<div className="coupon-price">{price}</div>
				<div className="coupon-brand">{brand}</div>
				<div className="coupon-desc">{desc} </div>
				<div className="time-left">
					{days} days {hours} hours left
				</div>
				{isTaken ? (
					<button class="btn btn-blue btn-take-coupon untake">
						Un Take Coupon
					</button>
				) : (
					<button className="btn btn-blue btn-take-coupon">
						Take Coupon
					</button>
				)}
				{isSale && <i className="stick-lbl hot-sale" />}
			</div>
		</div>
	);
};

export default CouponItem;
