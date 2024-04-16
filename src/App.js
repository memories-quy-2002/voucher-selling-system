import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import Brand from "./components/Brand";
import Coupon from "./components/Coupon";
import CouponCode from "./components/CouponCode";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import MyCoupon from "./components/MyCoupon";
import Register from "./components/Register";
import BlogDetail from "./components/BlogDetail";
import BrandDetail from "./components/BrandDetail";
import CouponDetail from "./components/CouponDetail";
import CouponCodeTwo from "./components/CouponCodeTwo";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

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
				<Route path="/coupon-code" element={<CouponCode />} />
				<Route path="/coupon-code-2" element={<CouponCodeTwo />} />
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
