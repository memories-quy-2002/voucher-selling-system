import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [checked, setChecked] = useState(false);
	const [errors, setErrors] = useState([]);
	const accounts = require("./accounts.json");
	useEffect(() => {
		if (accounts.isLoggedIn) {
			navigate("/");
		}
	});
	const rightAccount =
		accounts.username === username && accounts.password === password;

	const isWebsiteLogged = accounts.isLoggedIn;
	const handleSubmit = async () => {
		accounts.isLoggedIn = true;
		console.log(accounts);
		if (rightAccount && !isWebsiteLogged) {
			try {
				const response = await axios.post(
					"http://localhost:4000/api/user/login",
					accounts
				);
				if (response.status === 200) {
					console.log("Login successfully");
					navigate("/");
				}
			} catch (err) {
				console.error(err);
			}
		} else {
			setErrors([
				"The username or password is incorrect. Please try again",
			]);
			setTimeout(() => {
				setErrors([]);
			}, 5000); // 5 seconds in milliseconds
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
											value={username}
											onChange={(e) =>
												setUsername(e.target.value)
											}
											placeholder="Your username"
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
											value={password}
											onChange={(e) =>
												setPassword(e.target.value)
											}
											placeholder="Password"
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
											checked={checked}
											onChange={(e) =>
												setChecked(e.target.checked)
											}
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
											onClick={() => handleSubmit()}
										>
											Login
										</button>
										{errors.map((error) => (
											<div style={{ color: "red" }}>
												{error}
											</div>
										))}
										{/* <div className="sep-connect">
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
										</div> */}
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
