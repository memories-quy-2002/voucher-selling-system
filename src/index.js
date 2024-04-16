import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
