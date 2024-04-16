import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import "../styles/checkout.css";

const Checkout = () => {
	const navigate = useNavigate();
	const [totalPrice, setTotalPrice] = useState(0);
	useEffect(() => {
		const coupons = require("./vouchers.json");
		const allPrice = coupons["my-coupon"].reduce(
			(sum, item) => sum + item.price,
			0
		);
		setTotalPrice(allPrice);
	}, []);

	const handleSubmit = () => {
		alert("Checkout successfully");
		navigate("/");
	};

	return (
		<Layout>
			<div>
				<div className="top-area">
					<div className="grid_frame">
						<div className="container_grid clearfix">
							<div className="grid_12">
								<h2 className="page-title">Voucher Cart</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="grid_frame page-content">
					<div className="container_grid">
						<div className="my-coupon mod-grp-coupon block clearfix tabbable tab-style-2">
							<div className="block-content list-coupon clearfix">
								<div
									className="tab-content"
									style={{ display: "flex", gap: "2rem" }}
								>
									<div
										className="tab-content-item clearfix active"
										style={{
											display: "flex",
											flexDirection: "column",
											flex: 5,
										}}
									>
										<div
											className="main"
											style={{ width: "720px" }}
										>
											<div
												className="container"
												style={{ width: "100%" }}
											>
												<svg
													id="exit"
													width={20}
													height={20}
													viewBox="0 0 24 24"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95044C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043Z"
														stroke="#1B1B1B"
														strokeWidth="1.5"
													/>
													<path
														d="M13.7678 10.2322L10.2322 13.7678M13.7678 13.7678L10.2322 10.2322"
														stroke="#1B1B1B"
														strokeWidth="1.5"
														strokeLinecap="round"
													/>
												</svg>
												<div className="heading">
													<svg
														width={28}
														height={28}
														viewBox="0 0 24 24"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M13.3986 7.64605C13.495 7.37724 13.88 7.37724 13.9764 7.64605L14.2401 8.38111C14.271 8.46715 14.3395 8.53484 14.4266 8.56533L15.1709 8.82579C15.443 8.92103 15.443 9.30119 15.1709 9.39644L14.4266 9.65689C14.3395 9.68738 14.271 9.75507 14.2401 9.84112L13.9764 10.5762C13.88 10.845 13.495 10.845 13.3986 10.5762L13.1349 9.84112C13.104 9.75507 13.0355 9.68738 12.9484 9.65689L12.2041 9.39644C11.932 9.30119 11.932 8.92103 12.2041 8.82579L12.9484 8.56533C13.0355 8.53484 13.104 8.46715 13.1349 8.38111L13.3986 7.64605Z"
															fill="#1B1B1B"
														/>
														<path
															d="M16.3074 10.9122C16.3717 10.733 16.6283 10.733 16.6926 10.9122L16.8684 11.4022C16.889 11.4596 16.9347 11.5047 16.9928 11.525L17.4889 11.6987C17.6704 11.7622 17.6704 12.0156 17.4889 12.0791L16.9928 12.2527C16.9347 12.2731 16.889 12.3182 16.8684 12.3756L16.6926 12.8656C16.6283 13.0448 16.3717 13.0448 16.3074 12.8656L16.1316 12.3756C16.111 12.3182 16.0653 12.2731 16.0072 12.2527L15.5111 12.0791C15.3296 12.0156 15.3296 11.7622 15.5111 11.6987L16.0072 11.525C16.0653 11.5047 16.111 11.4596 16.1316 11.4022L16.3074 10.9122Z"
															fill="#1B1B1B"
														/>
														<path
															d="M17.7693 3.29184C17.9089 2.90272 18.4661 2.90272 18.6057 3.29184L19.0842 4.62551C19.1288 4.75006 19.2281 4.84805 19.3542 4.89219L20.7045 5.36475C21.0985 5.50263 21.0985 6.05293 20.7045 6.19081L19.3542 6.66337C19.2281 6.7075 19.1288 6.80549 19.0842 6.93005L18.6057 8.26372C18.4661 8.65284 17.9089 8.65284 17.7693 8.26372L17.2908 6.93005C17.2462 6.80549 17.1469 6.7075 17.0208 6.66337L15.6705 6.19081C15.2765 6.05293 15.2765 5.50263 15.6705 5.36475L17.0208 4.89219C17.1469 4.84805 17.2462 4.75006 17.2908 4.62551L17.7693 3.29184Z"
															fill="#1B1B1B"
														/>
														<path
															d="M3 13.4597C3 17.6241 6.4742 21 10.7598 21C14.0591 21 16.8774 18.9993 18 16.1783C17.1109 16.5841 16.1181 16.8109 15.0709 16.8109C11.2614 16.8109 8.17323 13.8101 8.17323 10.1084C8.17323 8.56025 8.71338 7.13471 9.62054 6C5.87502 6.5355 3 9.67132 3 13.4597Z"
															stroke="#1B1B1B"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
													<h1>Payment details</h1>
												</div>
												<label htmlFor="name">
													Name
												</label>
												<input
													type="text"
													id="name"
													name="name"
													placeholder="Name"
													className="input"
												/>
												<br />
												<label htmlFor="card">
													Card number
												</label>
												<input
													type="text"
													minLength={16}
													maxLength={16}
													id="card"
													name="card"
													placeholder="0000 0000 0000 0000"
													className="input"
												/>
												<br />
												<div className="exp-cvc">
													<div className="expiration">
														<label htmlFor="expiry">
															Expiration date
														</label>
														<input
															className="inputCard input"
															name="expiry"
															id="expiry"
															type="text"
															required=""
															placeholder="00/00"
														/>
														<br />
													</div>
													<div className="security">
														<label htmlFor="cvc">
															CVC
														</label>
														<input
															type="text"
															minLength={3}
															maxLength={4}
															id="cvc"
															name="cvc"
															placeholder="XXX"
															className="input"
														/>
														<br />
													</div>
												</div>
												<div className="btn-checkout">
													<svg
														width={24}
														height={24}
														viewBox="0 0 24 24"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M12.8768 16.1682C13.0292 15.7535 13.6375 15.7535 13.7899 16.1682L14.2066 17.3023C14.2554 17.435 14.3637 17.5395 14.5013 17.5865L15.6774 17.9884C16.1075 18.1353 16.1075 18.7218 15.6774 18.8688L14.5013 19.2706C14.3637 19.3177 14.2554 19.4221 14.2066 19.5549L13.7899 20.6889C13.6375 21.1037 13.0292 21.1037 12.8768 20.6889L12.4601 19.5549C12.4113 19.4221 12.303 19.3177 12.1653 19.2706L10.9892 18.8688C10.5591 18.7218 10.5591 18.1353 10.9892 17.9884L12.1653 17.5865C12.303 17.5395 12.4113 17.435 12.4601 17.3023L12.8768 16.1682Z"
															stroke="#1B1B1B"
															strokeWidth="1.5"
															strokeLinejoin="round"
														/>
														<path
															d="M14.6394 3.47278C14.8711 2.84241 15.7956 2.84241 16.0272 3.47278L16.8211 5.63332C16.8953 5.8351 17.0599 5.99384 17.2691 6.06534L19.5097 6.83089C20.1634 7.05426 20.1634 7.94574 19.5097 8.16911L17.2691 8.93466C17.0599 9.00616 16.8953 9.1649 16.8211 9.36668L16.0272 11.5272C15.7956 12.1576 14.8711 12.1576 14.6394 11.5272L13.8455 9.36668C13.7714 9.1649 13.6068 9.00616 13.3975 8.93466L11.157 8.16911C10.5032 7.94574 10.5032 7.05426 11.157 6.83089L13.3975 6.06534C13.6068 5.99384 13.7714 5.8351 13.8455 5.63332L14.6394 3.47278Z"
															stroke="#1B1B1B"
															strokeWidth="1.5"
															strokeLinejoin="round"
														/>
														<path
															d="M6.48641 9.36289C6.65786 8.87904 7.34214 8.87904 7.51358 9.36289L7.9824 10.686C8.03728 10.8409 8.15913 10.9627 8.31401 11.0176L9.63711 11.4864C10.121 11.6579 10.121 12.3421 9.63711 12.5136L8.31401 12.9824C8.15913 13.0373 8.03728 13.1591 7.9824 13.314L7.51358 14.6371C7.34214 15.121 6.65786 15.121 6.48641 14.6371L6.0176 13.314C5.96272 13.1591 5.84087 13.0373 5.68599 12.9824L4.36289 12.5136C3.87904 12.3421 3.87904 11.6579 4.36289 11.4864L5.68599 11.0176C5.84087 10.9627 5.96272 10.8409 6.0176 10.686L6.48641 9.36289Z"
															stroke="#1B1B1B"
															strokeWidth="1.5"
															strokeLinejoin="round"
														/>
													</svg>
													<span
														id="submit"
														onClick={handleSubmit}
													>
														Submit
													</span>
												</div>
											</div>
										</div>
									</div>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											justifyContent: "flex-start",
											gap: "1rem",
											flex: 2,
											height: "50%",
											border: "1px solid black",
										}}
									>
										<div
											style={{
												fontSize: "1rem",
												padding: "1rem",
											}}
										>
											<p style={{ color: "black" }}>
												Total Price: {totalPrice} VND
											</p>
											<p style={{ color: "black" }}>
												Discount: 0 VND
											</p>
											<p style={{ color: "black" }}>
												Subtotal: {totalPrice} VND
											</p>
										</div>
										<div></div>
									</div>
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

export default Checkout;
