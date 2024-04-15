import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
	const location = useLocation();
	const url = location.pathname;
	return (
		<header className="mod-header">
			<div className="grid_frame">
				<div className="container_grid clearfix">
					<div className="grid_12">
						<div className="header-content clearfix">
							<h1 id="logo" className="rs">
								<a href="/">
									<img
										src={require("../images/logo.png")}
										alt="$SITE_NAME"
									/>
								</a>
							</h1>
							<a
								id="sys_head_login"
								className="btn btn-green type-login btn-login"
								href="/login"
							>
								Login
							</a>
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
												<a href="/coupon-code?id=1">
													Coupons Code 1
												</a>
											</li>
											<li>
												<a href="/coupon-code?id=2">
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
											<span>8</span>
										</i>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
			<div id="sys_pop_login" className="pop-login">
				<div className="viewport-pop">
					<div className="transport-viewer clearfix">
						<div className="mod-register">
							<h3 className="rs title-mod">
								Hello pretty! Welcome to Couponday.com
							</h3>
							<div className="wrap-form-reg clearfix">
								<form action="/">
									<div className="left-form">
										<label
											className="wrap-txt"
											htmlFor="sys_email"
										>
											<input
												className="input-txt"
												id="sys_email"
												type="email"
												placeholder="you@mail.com"
											/>
										</label>
										<label
											className="wrap-txt"
											htmlFor="sys_pass"
										>
											<input
												className="input-txt"
												id="sys_pass"
												type="password"
												placeholder="password please!"
											/>
										</label>
										<label
											className="wrap-check"
											htmlFor="sys_chk_news"
										>
											<input
												id="sys_chk_news"
												className="input-chk"
												type="checkbox"
											/>{" "}
											Remember me
											<i className="icon iUncheck" />
											<a
												className="lost-pass"
												href="/forgot-password"
											>
												Forgot password ?
											</a>
										</label>
										<div className="wrap-login-btn">
											<button
												className="btn-flat gr btn-submit-reg"
												type="submit"
											>
												Login
											</button>
											<div className="sep-connect">
												<span>Or</span>
											</div>
											<div className="grp-connect">
												<a
													className="btn-flat fb"
													href="www.facebook.com"
												>
													Facebook
												</a>
												<a
													className="btn-flat gg"
													href="www.google.com"
												>
													Google
												</a>
											</div>
										</div>
									</div>
									<div className="right-create-acc">
										<img
											className="account"
											src={require("../images/reg-account.png")}
											alt="Couponday.com"
										/>
										<p className="lbl-dung-lo rs">
											Not a member? Don't worry
										</p>
										<a
											id="sys_link_reg_panel"
											href="register.html"
											className="btn-flat yellow btn-submit-reg"
										>
											Create an account
										</a>
										<div
											id="sys_warning_sms"
											className="warning-sms"
											data-warning-txt="No spam guarantee,No disturb,Promotion News"
										/>
									</div>
								</form>
								<i className="line-sep" />
							</div>
						</div>
						{/*end: Login panel */}
						<div className="mod-register">
							<h3 className="rs title-mod">
								Hello pretty! Welcome to Couponday.com
							</h3>
							<div className="desc-reg">
								Sign up for free and get exclusive access to
								members-only savings, rewards and special
								promotions from Coupons.com. Enter in an email
								and a password or sign up with Facebook.
							</div>
							<div className="wrap-form-reg clearfix">
								<form action="/">
									<div className="left-form">
										<label
											className="wrap-txt"
											htmlFor="sys_email_reg"
										>
											<input
												className="input-txt"
												id="sys_email_reg"
												type="email"
												placeholder="you@mail.com"
											/>
										</label>
										<label
											className="wrap-txt"
											htmlFor="sys_pass_reg"
										>
											<input
												className="input-txt"
												id="sys_pass_reg"
												type="password"
												placeholder="password please!"
											/>
										</label>
										<label
											className="wrap-check"
											htmlFor="sys_chk_news_reg"
										>
											<input
												id="sys_chk_news_reg"
												className="input-chk"
												type="checkbox"
											/>{" "}
											Send me the weekly Couponday.com's
											offers.
											<i className="icon iUncheck" />
										</label>
										<label
											className="wrap-check"
											htmlFor="sys_chk_agree"
										>
											<input
												id="sys_chk_agree"
												className="input-chk"
												type="checkbox"
											/>{" "}
											I agree to the{" "}
											<a href="/terms-of-use">
												Terms of Use
											</a>{" "}
											and{" "}
											<a href="privacy-policy">
												Privacy Policy
											</a>
											.
											<i className="icon iUncheck" />
										</label>
									</div>
									<div className="right-connect">
										<button
											className="btn-flat yellow btn-submit-reg"
											type="submit"
										>
											Create an account
										</button>
										<div className="sep-connect">
											<span>Or</span>
										</div>
										<div className="grp-connect">
											<p className="rs">
												Sign up using your account on:
											</p>
											<a
												className="btn-flat fb"
												href="www.facebook.com"
											>
												Facebook
											</a>
											<a
												className="btn-flat gg"
												href="www.google.com"
											>
												Google
											</a>
										</div>
									</div>
								</form>
							</div>
							<p className="rs wrap-link-back">
								<a
									id="sys_link_login_panel"
									href="login.html"
									className="link-back"
								>
									<i className="pick-r" />
									Back to login
								</a>
							</p>
						</div>
						{/*end: Register panel */}
					</div>
					<div id="sys_paging_state" className="paging-state">
						<i className="active" />
						<i />
					</div>
					<i
						id="sys_close_login_popup"
						className="icon iClose close-popop"
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
