import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import Brand from "./components/Brand";
import BrandDetail from "./components/BrandDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Coupon from "./components/Coupon";
import CouponDetail from "./components/CouponDetail";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import MyCoupon from "./components/MyCoupon";
import Register from "./components/Register";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path="/" element={<HomePage />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog-detail" element={<BlogDetail />} />
				<Route path="/brand" element={<Brand />} />
				<Route path="/brand-detail" element={<BrandDetail />} />
				<Route path="/coupon" element={<Coupon />} />
				<Route path="/coupon-detail" element={<CouponDetail />} />
				<Route path="/my-coupon" element={<MyCoupon />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/checkout" element={<Checkout />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
