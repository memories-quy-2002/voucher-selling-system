import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import vouchersData from "../components/vouchers.json";
import accountsData from "../components/accounts.json";
import axios from "axios";
const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const url = location.pathname;
	const handleLogout = async () => {
		accountsData.isLoggedIn = false;
		try {
			const response = await axios.post(
				"http://localhost:4000/api/user/logout",
				accountsData
			);
			if (response.status === 200) {
				console.log("Logout successfully");
				navigate("/");
			}
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<header className="mod-header" style={{ height: "72px" }}>
			<div className="grid_frame" style={{ height: "100%" }}>
				<div className="container_grid clearfix" style={{ height: "100%" }}>
					<div className="grid_12" style={{ height: "100%" }}>
						<div
							className="header-content clearfix"
							style={{
								height: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<h1 id="logo" className="rs">
								<a href="/">
									<img src={require("../images/logo.png")} alt="$SITE_NAME" />
								</a>
							</h1>

							<nav
								className="main-nav"
								style={{
									height: "100%",
								}}
							>
								<ul
									id="main-menu"
									className="nav nav-horizontal clearfix"
									style={{
										height: "100%",
										display: "flex",
										alignItems: "center",
									}}
								>
									<li className={url === "/" ? "active" : undefined}>
										<a href="/">Home</a>
									</li>
									<li className={url === "/coupon" ? "active" : undefined}>
										<a href="/coupon">Vouchers</a>
									</li>

									<li className={url === "/blog" ? "active" : undefined}>
										<a href="/blog">Blog</a>
									</li>
									<li
										className={url === "/my-coupon" ? "active" : undefined}
										style={{
											display: "flex",
											gap: "0.25rem",
										}}
									>
										<a href="/my-coupon?page=1">My vouchers</a>
										<i className="icon iPickRed lbl-count">
											<span>{vouchersData["my-coupon"].length}</span>
										</i>
									</li>
								</ul>
							</nav>
							{accountsData.isLoggedIn ? (
								<div
									className="btn-login"
									style={{
										display: "flex",
										flexDirection: "column",
									}}
								>
									Welcome {accountsData.username}
									<button
										onClick={() => handleLogout()}
										className="btn btn-red btn-login type-login"
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
