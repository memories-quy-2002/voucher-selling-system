import React from "react";
import Layout from "./Layout";
import CouponCodeTwo from "./CouponCodeTwo";
import CouponCodeOne from "./CouponCodeOne";

const CouponCode = () => {
	const url = new URLSearchParams(window.location.search);
	const id = parseInt(url.get("id"));

	return <Layout>{id === 2 ? <CouponCodeTwo /> : <CouponCodeOne />}</Layout>;
};

export default CouponCode;
