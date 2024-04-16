const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const crypto = require("crypto");
const PORT = 4000;
const app = express();

app.use(bodyParser.json());
app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);

const takeCoupon = (request, response) => {
	const couponsData = request.body;
	fs.writeFile(
		"../components/vouchers.json",
		JSON.stringify(couponsData),
		function (err) {
			if (err) {
				console.log(err);
			}
		}
	);
	response.status(200).json({
		msg: "Coupon taken successfully",
	});
};

const dismissCoupon = (request, response) => {
	const couponsData = request.body;
	fs.writeFile(
		"../components/vouchers.json",
		JSON.stringify(couponsData),
		function (err) {
			if (err) {
				console.log(err);
			}
		}
	);
	response.status(200).json({
		msg: "Coupon dismissed successfully",
	});
};

const handleRegister = (request, response) => {
	const { username, email, password } = request.body;
	const id = crypto.randomBytes(16).toString("hex");

	fs.writeFile(
		"../components/accounts.json",
		JSON.stringify({ id, username, email, password, isLoggedIn: true }),
		function (err) {
			if (err) {
				console.log(err);
			}
		}
	);
	response.status(200).json({
		msg: "Account create successfully",
	});
};

const handleLogin = (request, response) => {
	const accounts = request.body;

	fs.writeFile(
		"../components/accounts.json",
		JSON.stringify(accounts),
		function (err) {
			if (err) {
				console.log(err);
			}
		}
	);
	response.status(200).json({
		msg: "Account create successfully",
	});
};

const handleLogout = (request, response) => {
	const accountsData = request.body;

	fs.writeFile(
		"../components/accounts.json",
		JSON.stringify(accountsData),
		function (err) {
			if (err) {
				console.log(err);
			}
		}
	);
	response.status(200).json({
		msg: "Account create successfully",
	});
};

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
app.post("/api/update", takeCoupon);
app.post("/api/delete", dismissCoupon);
app.post("/api/user/create", handleRegister);
app.post("/api/user/login", handleLogin);
app.post("/api/user/logout", handleLogout);
