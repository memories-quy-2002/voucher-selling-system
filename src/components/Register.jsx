import React, { useState } from "react";
import Layout from "./Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [checked, setChecked] = useState(false);
	const handleSubmit = async () => {
		try {
			const response = await axios.post(
				"http://localhost:4000/api/user/create",
				{ username, email, password }
			);
			if (response.status === 200) {
				console.log(response.data.msg);
				navigate("/");
			}
		} catch (err) {
			console.error(err);
		}
	};
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
										htmlFor="sys_username"
									>
										<input
											className="input-txt"
											id="sys_username"
											type="text"
											placeholder="Your username"
											value={username}
											onChange={(e) =>
												setUsername(e.target.value)
											}
										/>
									</label>
									<label
										className="wrap-txt"
										htmlFor="sys_email"
									>
										<input
											className="input-txt"
											id="sys_email"
											type="email"
											placeholder="Your email"
											value={email}
											onChange={(e) =>
												setEmail(e.target.value)
											}
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
											placeholder="Your password"
											value={password}
											onChange={(e) =>
												setPassword(e.target.value)
											}
										/>
									</label>

									<label
										className="wrap-check"
										htmlFor="sys_chk_agree"
									>
										<input
											id="sys_chk_agree"
											className="input-chk"
											type="checkbox"
											checked={checked}
											onChange={() =>
												setChecked(
													(checked) => !checked
												)
											}
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
										onClick={() => handleSubmit()}
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
