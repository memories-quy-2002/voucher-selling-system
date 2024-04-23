import React from "react";

const CouponItem = ({
	coupon,
	onTakeCoupon,
	onDismissCoupon,
	hasButton = true,
}) => {
	const {
		id,
		name,
		description,
		amount,
		unit,
		price,
		days,
		brand,
		tags,
		image,
		isTaken,
	} = coupon;
	return (
		<div className="coupon-item grid_3">
			<div className="coupon-content">
				<div className="img-thumb-center">
					<div className="wrap-img-thumb">
						<span className="ver_hold" />
						<a
							href={`/coupon-detail?id=${id}`}
							className="ver_container">
							<img
								src={require(`../images/${image}`)}
								alt="$COUPON_TITLE"
							/>
						</a>
					</div>
				</div>
				<div className="coupon-price">{amount}% Off</div>
				<div className="coupon-brand">{name}</div>
				<div className="coupon-brand">{brand}</div>
				<div className="coupon-price">{price} VND</div>

				<div
					className="coupon-desc"
					style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
					{description}{" "}
				</div>
				<div className="time-left">{days} days left</div>
				{hasButton &&
					(isTaken ? (
						<button
							className="btn btn-blue btn-take-coupon untake btn-red"
							onClick={onDismissCoupon}>
							Discard Voucher
						</button>
					) : (
						<button
							className="btn btn-blue btn-take-coupon"
							onClick={onTakeCoupon}>
							Take Voucher
						</button>
					))}
			</div>
		</div>
	);
};

export default CouponItem;
