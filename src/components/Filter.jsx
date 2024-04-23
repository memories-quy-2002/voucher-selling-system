import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactSlider from "react-slider";


const categories = ["Beverages", "Books", "Foods", "Health Care", "Coupon Codes", "Recipes"]

const Filter = () => {
	const navigate = useNavigate()
	const url = new URLSearchParams(window.location.search);

	const [show, setShow] = useState(false);
	const [daysLeft, setDaysLeft] = useState([1, 160])
	const [searchTerm, setSearchTerm] = useState(url.get("searchTerm"))

	const handleSubmit = () => {
		navigate(`/coupon?days=${daysLeft[0]}-${daysLeft[1]}${searchTerm.length < 1 ? '' : `&searchTerm=${searchTerm}`}`)
		window.location.reload(false)
	}
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
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
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
										{categories.map((category, index) =>
											<a key={index} href={`/coupon?category=${category.replace(" ", "-").toLowerCase()} `} data-cate-id={index}>
												{category}
											</a>)}

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
							type="submit"
							value="Apply Filter"
							onClick={() => handleSubmit()}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filter;
