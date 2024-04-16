import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import couponsData from "../components/coupons.json";
import accountsData from "../components/accounts.json";
const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const url = location.pathname;
	const handleLogout = () => {
		accountsData.isLoggedIn = false;
		window.location.reload();
	};
	return (
		<header className="mod-header" style={{ height: "72px" }}>
			<div className="grid_frame" style={{ height: "100%" }}>
				<div
					className="container_grid clearfix"
					style={{ height: "100%" }}
				>
					<div className="grid_12" style={{ height: "100%" }}>
						<div
							className="header-content clearfix"
							style={{
								height: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent: "space-around",
								flexDirection: "row",
							}}
						>
							<h1 id="logo" className="rs">
								<a href="/">
									<img
										src={require("../images/logo.png")}
										alt="$SITE_NAME"
									/>
								</a>
							</h1>

							<nav className="main-nav">
								<ul
									id="main-menu"
									className="nav nav-horizontal clearfix"
								>
									<li className={url === "/" && "active"}>
										<a href="/">Home</a>
									</li>
									<li
										className={
											url === "/coupon" && "active"
										}
									>
										<a href="/coupon">Coupons</a>
									</li>
									<li
										className={`has-sub ${
											url === "/coupon-code" && "active"
										}`}
									>
										<a href="/coupon-code">Coupons Code</a>
										<ul className="sub-menu">
											<li>
												<a href="/coupon-code">
													Coupons Code 1
												</a>
											</li>
											<li>
												<a href="/coupon-code-2">
													Coupons Code 2
												</a>
											</li>
										</ul>
									</li>
									<li
										className={`has-sub ${
											url === "/brand" && "active"
										}`}
									>
										<a href="/brand">Brands</a>
										<ul className="sub-menu">
											{[1, 2, 3, 4, 5].map((num) => (
												<li key={num}>
													<a
														href={`/brand-detail?id=${num}`}
													>
														Brand Detail {num}
													</a>
												</li>
											))}
										</ul>
									</li>
									<li className={url === "/blog" && "active"}>
										<a href="/blog">Blog</a>
									</li>
									<li
										className={
											url === "/my-coupon" && "active"
										}
										style={{
											display: "flex",
											gap: "0.25rem",
										}}
									>
										<a href="/my-coupon?page=1">
											My coupons
										</a>
										<i className="icon iPickRed lbl-count">
											<span>
												{
													couponsData["my-coupon"]
														.length
												}
											</span>
										</i>
									</li>
								</ul>
							</nav>
							{accountsData.isLoggedIn ? (
								<div
									className="btn-login type-login"
									style={{
										display: "flex",
										flexDirection: "column",
									}}
								>
									Welcome {accountsData.username}
									<button
										className="btn btn-red"
										onClick={() => handleLogout()}
									>
										Logout
									</button>
								</div>
							) : (
								<a
									id="sys_head_login"
									className="btn btn-green type-login btn-login"
									href="/login"
								>
									Login
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
