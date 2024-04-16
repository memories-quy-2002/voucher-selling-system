import React from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	return (
		<Layout>
			<div className="grid_frame page-content">
				<div className="container_grid">
					<div className="mod-register">
						<h3 className="rs title-mod">
							Hello pretty! Welcome to Couponday.com
						</h3>
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
										Remember me
										<i className="icon iUncheck" />
										<a
											className="lost-pass"
											href="/register"
										>
											Forgot password ?
										</a>
									</label>
									<div className="wrap-login-btn">
										<button
											className="btn-flat gr btn-submit-reg"
											type="submit"
											onClick={() => navigate("/")}
										>
											Login
										</button>
										<div className="sep-connect">
											<span>Or</span>
										</div>
										<div className="grp-connect">
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
								</div>
								<div className="right-create-acc">
									<img
										className="account"
										src={require("../images/null.gif")}
										alt="Couponday.com"
									/>
									<p className="lbl-dung-lo rs">
										Not a member? Don't worry
									</p>
									<button
										onClick={() => navigate("/register")}
										className="btn-flat yellow btn-submit-reg"
									>
										Create an account
									</button>
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
					{/*end: .mod-register */}
				</div>
			</div>
		</Layout>
	);
};

export default Login;
