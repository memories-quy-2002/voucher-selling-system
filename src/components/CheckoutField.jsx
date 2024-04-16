import PropTypes from "prop-types";
import React from "react";
import "../styles/checkout.css";

export const CheckoutField = ({
	rectangle = "rectangle-57.svg",
	text = "$ 1,307.99",
	text1 = "$ 1,207.99",
	image = "image-4.png",
	img = "image-8.png",
	image1 = "image-9.png",
}) => {
	return (
		<div className="checkout-field">
			<div className="overlap">
				<img className="rectangle" alt="Rectangle" src={rectangle} />
				<div className="coupon-code">&nbsp;&nbsp;Coupon code</div>
				<div className="div" />
				<div className="text-wrapper">Apply</div>
			</div>
			<div className="have-coupon">&nbsp;&nbsp; Have coupon?</div>
			<div className="overlap-group">
				<div className="total-price">&nbsp;&nbsp; Total price:</div>
				<div className="discount">&nbsp;&nbsp; Discount:</div>
				<p className="subtotal">
					<span className="span">&nbsp;&nbsp;</span>
					<span className="text-wrapper-2"> Subtotal:</span>
				</p>
				<div className="element">{text}</div>
				<div className="text-wrapper-3">$ 100.00</div>
				<div className="element-2">{text1}</div>
			</div>
			<div className="text-wrapper-4">Payment method?</div>
			<img className="image" alt="Image" src={image} />
			<img className="img" alt="Image" src={img} />
			<img className="image-2" alt="Image" src={image1} />
		</div>
	);
};

CheckoutField.propTypes = {
	rectangle: PropTypes.string,
	text: PropTypes.string,
	text1: PropTypes.string,
	image: PropTypes.string,
	img: PropTypes.string,
	image1: PropTypes.string,
};
