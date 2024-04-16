import React from "react";
import Layout from "./Layout";

const Register = () => {
	return (
		<Layout>
			<div className="grid_frame page-content">
				<div className="container_grid">
					<div className="mod-register">
						<h3 className="rs title-mod">
							Hello pretty! Welcome to Couponday.com
						</h3>
						<div className="desc-reg">
							Sign up for free and get exclusive access to
							members-only savings, rewards and special promotions
							from Coupons.com. Enter in an email and a password
							or sign up with Facebook.
						</div>
						<div className="wrap-form-reg clearfix">
							<form action="#">
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
										Send me the weekly Couponday.com’s
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
										<a href="#">Terms of Use</a> and{" "}
										<a href="#">Privacy Policy</a>.
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
											href="https://facebook.com"
										>
											Facebook
										</a>
										<a
											className="btn-flat gg"
											href="https://google.com"
										>
											Google
										</a>
									</div>
								</div>
							</form>
						</div>
						<p className="rs wrap-link-back">
							<a href="/login" className="link-back">
								<i className="pick-r" />
								Back to login
							</a>
						</p>
					</div>
					{/*end: .mod-register */}
				</div>
			</div>
		</Layout>
	);
};

export default Register;
