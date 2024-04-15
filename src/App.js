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
import "./styles/font-awesome.css";
import "./styles/font.css";
import "./styles/jquery.nouislider.css";
import "./styles/jquery.popupcommon.css";
import "./styles/normalize.css";
import "./styles/res-menu.css";
import "./styles/responsive.css";
import "./styles/slider.css";
import "./styles/style-dark.css";
import "./styles/style-gray.css";
import "./styles/style.css";
import BlogDetail from "./components/BlogDetail";
import BrandDetail from "./components/BrandDetail";
import CouponDetail from "./components/CouponDetail";

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
				<Route path="/my-coupon" element={<MyCoupon />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
