import React, { useState } from "react";
import ReactSlider from "react-slider";

const Filter = () => {
	const [daysLeft, setDaysLeft] = useState([1, 160]);
	const [show, setShow] = useState(false);
	return (
		<div id="sys_mod_filter" className="mod-filter">
			<div className="grid_frame">
				<div className="container_grid clearfix">
					<div style={{ display: "flex", gap: "1rem" }}>
						<div className="lbl-search">
							<input
								className="txt-search"
								id="sys_txt_search"
								type="search"
								placeholder="Search"
							/>
							<button type="submit" className="btn-search" />
						</div>
						<div className="select-cate">
							<div
								id="sys_selected_val"
								className="show-val"
								onClick={() => setShow(true)}
							>
								<span data-cate-id={0}>All type</span>
								<i className="pick-down" />
							</div>
							{show && (
								<div
									id="sys_list_dd_cate"
									className="dropdown-cate"
								>
									<div
										className="first-lbl"
										style={{ cursor: "pointer" }}
										onClick={() => setShow(false)}
									>
										All Categories
									</div>
									<div className="wrap-list-cate clearfix">
										<a href="/" data-cate-id={1}>
											Baby &amp; Toddler
										</a>
										<a href="/" data-cate-id={2}>
											Automotive{" "}
										</a>
										<a href="/" data-cate-id={3}>
											Beverages
										</a>
										<a href="/" data-cate-id={4}>
											Books &amp; Magazines
										</a>
										<a href="/" data-cate-id={5}>
											Foods{" "}
										</a>
										<a href="/" data-cate-id={6}>
											Health Care
										</a>
										<a href="/" data-cate-id={7}>
											Home Entertainment
										</a>
										<a href="/" data-cate-id={8}>
											Personal Care{" "}
										</a>
										<a href="/" data-cate-id={9}>
											Pet Care{" "}
										</a>
										<a href="/" data-cate-id={10}>
											Professional Services{" "}
										</a>
										<a href="/" data-cate-id={11}>
											Toys and Games
										</a>
										<a href="/" data-cate-id={12}>
											Coupon Codes
										</a>
										<a href="/" data-cate-id={13}>
											Recipes
										</a>
										<a href="/" data-cate-id={14}>
											Household{" "}
										</a>
									</div>
								</div>
							)}
						</div>
						{/*end: .select-cate */}
						<div
							className="range-days-left"
							style={{
								flex: 2,
								display: "flex",
								flexDirection: "row",
							}}
						>
							<span className="lbl-day">Days left</span>
							<div
								className="range-days-left"
								style={{
									display: "flex",
									flexDirection: "row",
									width: "280px",
									marginTop: "0px",
								}}
							>
								<span id="sys_min_day" className="min-day">
									{daysLeft[0]}
								</span>
								<ReactSlider
									className="horizontal-slider"
									thumbClassName="example-thumb"
									trackClassName="example-track"
									defaultValue={[1, 160]}
									min={1}
									max={160}
									pearling
									minDistance={10}
									onChange={(value) => setDaysLeft(value)}
								/>
								<span id="sys_max_day" className="max-day">
									{daysLeft[1]}
								</span>
							</div>
						</div>
						{/*end: .range-days-left */}
						<input
							id="sys_apply_filter"
							className="btn btn-red type-1 btn-apply-filter"
							type="button"
							defaultValue="Apply Filter"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filter;
