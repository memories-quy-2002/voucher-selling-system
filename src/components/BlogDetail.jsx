import React from "react";
import Layout from "./Layout";
import Aside from "./Aside";

const BlogDetail = () => {
	const url = new URLSearchParams(window.location.search);
	const id = parseInt(url.get("id"));
	const reviews = require("./review.json").reviews;
	const reviewDetail = reviews.filter((review) => review.id === id)[0];
	const { image, title, short_desc, long_desc } = reviewDetail;
	return (
		<Layout>
			<div>
				<div className="top-area">
					<div className="grid_frame">
						<div className="container_grid clearfix">
							<div className="grid_12">
								<h2 className="page-title">Blog</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="grid_frame page-content">
					<div className="container_grid">
						<div className="layout-2cols pt-hight clearfix">
							<div className="grid_8 content">
								{/*end: .mod-breadcrumb*/}
								<div className="mod-blog-detail">
									<img
										className="feature-img"
										src={require(`../images/ex/${image}`)}
										alt="$ARTICLE_TITLE"
									/>
									<div className="top-detail clearfix">
										<div className="left-title">
											<a className="blog-title" href="#">
												{title}
											</a>
											<div className="post-by">
												by{" "}
												<span className="user-post">
													Admin
												</span>{" "}
												in{" "}
												<a
													className="category"
													href="/"
												>
													Coupon Day
												</a>
											</div>
										</div>
										<div className="right-date">
											<span className="day">15</span>
											<span className="my">
												April / 2024
											</span>
										</div>
									</div>
									<div className="blog-full-content">
										{long_desc}
									</div>
									<div className="wrap-tag">
										<span className="btn btn-gray type-tag tag-lbl">
											Tag
										</span>
										<a
											className="btn btn-gray type-tag"
											href="#"
										>
											Sweet
										</a>
										<a
											className="btn btn-gray type-tag"
											href="#"
										>
											Lindor
										</a>
										<a
											className="btn btn-gray type-tag"
											href="#"
										>
											Food
										</a>
										<a
											className="btn btn-gray type-tag"
											href="#"
										>
											Lindt
										</a>
										<a
											className="btn btn-gray type-tag"
											href="#"
										>
											Walmart
										</a>
										<a
											className="btn btn-gray type-tag"
											href="#"
										>
											Chocolate
										</a>
									</div>
								</div>
								{/*end: .mod-blog-detail*/}
								<div className="mod-related-posts block clearfix">
									<h3 className="title-block has-link">
										Related posts
										<span className="grp-nav">
											<a
												id="sys_prev_replated_page"
												className="btn-nav btn-prev"
												href="#"
											>
												<i className="icon iPrev" />
											</a>
											<a
												id="sys_next_replated_page"
												className="btn-nav btn-next"
												href="#"
											>
												<i className="icon iNext" />
											</a>
										</span>
									</h3>
									<div className="block-content">
										<div
											id="sys_list_related_post"
											className="list-related-post clearfix"
											data-paging={1}
											data-total-page={3}
										>
											<div className="post-item sys_p_1 active">
												<div className="flex">
													<a
														className="thumb-left"
														href="#"
													>
														<img
															src={require("../images/ex/th-234x234-10.jpg")}
															alt="$POST_TITLE"
														/>
													</a>
													<div className="flex-body">
														<a
															className="title-post"
															href="#"
														>
															Christo tunc agitans
															diam Mucro enim
															formam cum magna{" "}
														</a>
													</div>
												</div>
											</div>
											{/*end: .post-item */}
											<div className="post-item sys_p_1 active">
												<div className="flex">
													<a
														className="thumb-left"
														href="#"
													>
														<img
															src={require("../images/ex/th-234x234-11.jpg")}
															alt="$POST_TITLE"
														/>
													</a>
													<div className="flex-body">
														<a
															className="title-post"
															href="#"
														>
															{" "}
															Austri ventriculum
															defunctae cubiculo
															forma ait{" "}
														</a>
													</div>
												</div>
											</div>
											{/*end: .post-item */}
											<div className="clear" />
											<div className="post-item sys_p_1 active">
												<div className="flex">
													<a
														className="thumb-left"
														href="#"
													>
														<img
															src={require("../images/ex/th-234x234-6.jpg")}
															alt="$POST_TITLE"
														/>
													</a>
													<div className="flex-body">
														<a
															className="title-post"
															href="#"
														>
															Peractoque
															convocatis secessit
															civitatis civium
															takimata scias a
															patriam Dianae
														</a>
													</div>
												</div>
											</div>
											{/*end: .post-item */}
											<div className="post-item sys_p_1 active">
												<div className="flex">
													<a
														className="thumb-left"
														href="#"
													>
														<img
															src={require("../images/ex/th-234x234-12.jpg")}
															alt="$POST_TITLE"
														/>
													</a>
													<div className="flex-body">
														<a
															className="title-post"
															href="#"
														>
															Tyrum in fuerat co
															Tharsiam in rei
															civibus unde meae
															ceroma fronte comico
															hac navi quia
														</a>
													</div>
												</div>
											</div>
											{/*end: .post-item */}
											<div className="post-item sys_p_2">
												<div className="flex">
													<a
														className="thumb-left"
														href="#"
													>
														<img
															src={require("../images/ex/th-234x234-1.jpg")}
															alt="$POST_TITLE"
														/>
													</a>
													<div className="flex-body">
														<a
															className="title-post"
															href="#"
														>
															Christo tunc agitans
															diam Mucro enim
															formam cum magna{" "}
														</a>
													</div>
												</div>
											</div>
											{/*end: .post-item */}
											<div className="post-item sys_p_2">
												<div className="flex">
													<a
														className="thumb-left"
														href="#"
													>
														<img
															src={require("../images/ex/th-234x234-2.jpg")}
															alt="$POST_TITLE"
														/>
													</a>
													<div className="flex-body">
														<a
															className="title-post"
															href="#"
														>
															{" "}
															Austri ventriculum
															defunctae cubiculo
															forma ait{" "}
														</a>
													</div>
												</div>
											</div>
											{/*end: .post-item */}
											<div className="clear" />
											<div className="post-item sys_p_2">
												<div className="flex">
													<a
														className="thumb-left"
														href="#"
													>
														<img
															src={require("../images/ex/th-234x234-3.jpg")}
															alt="$POST_TITLE"
														/>
													</a>
													<div className="flex-body">
														<a
															className="title-post"
															href="#"
														>
															Peractoque
															convocatis secessit
															civitatis civium
															takimata scias a
															patriam Dianae
														</a>
													</div>
												</div>
											</div>
											{/*end: .post-item */}
											<div className="post-item sys_p_2">
												<div className="flex">
													<a
														className="thumb-left"
														href="#"
													>
														<img
															src={require("../images/ex/th-234x234-4.jpg")}
															alt="$POST_TITLE"
														/>
													</a>
													<div className="flex-body">
														<a
															className="title-post"
															href="#"
														>
															Tyrum in fuerat co
															Tharsiam in rei
															civibus unde meae
															ceroma fronte comico
															hac navi quia
														</a>
													</div>
												</div>
											</div>
											{/*end: .post-item */}
											<div className="post-item sys_p_3">
												<div className="flex">
													<a
														className="thumb-left"
														href="#"
													>
														<img
															src={require("../images/ex/th-234x234-5.jpg")}
															alt="$POST_TITLE"
														/>
													</a>
													<div className="flex-body">
														<a
															className="title-post"
															href="#"
														>
															Christo tunc agitans
															diam Mucro enim
															formam cum magna{" "}
														</a>
													</div>
												</div>
											</div>
											{/*end: .post-item */}
											<div className="post-item sys_p_3">
												<div className="flex">
													<a
														className="thumb-left"
														href="#"
													>
														<img
															src={require("../images/ex/th-234x234-7.jpg")}
															alt="$POST_TITLE"
														/>
													</a>
													<div className="flex-body">
														<a
															className="title-post"
															href="#"
														>
															{" "}
															Austri ventriculum
															defunctae cubiculo
															forma ait{" "}
														</a>
													</div>
												</div>
											</div>
											{/*end: .post-item */}
											<div className="clear" />
											<div className="post-item sys_p_3">
												<div className="flex">
													<a
														className="thumb-left"
														href="#"
													>
														<img
															src={require("../images/ex/th-234x234-8.jpg")}
															alt="$POST_TITLE"
														/>
													</a>
													<div className="flex-body">
														<a
															className="title-post"
															href="#"
														>
															Peractoque
															convocatis secessit
															civitatis civium
															takimata scias a
															patriam Dianae
														</a>
													</div>
												</div>
											</div>
											{/*end: .post-item */}
											<div className="post-item sys_p_3">
												<div className="flex">
													<a
														className="thumb-left"
														href="#"
													>
														<img
															src={require("../images/ex/th-234x234-9.jpg")}
															alt="$POST_TITLE"
														/>
													</a>
													<div className="flex-body">
														<a
															className="title-post"
															href="#"
														>
															Tyrum in fuerat co
															Tharsiam in rei
															civibus unde meae
															ceroma fronte comico
															hac navi quia
														</a>
													</div>
												</div>
											</div>
											{/*end: .post-item */}
										</div>
									</div>
								</div>
								<div className="mod-comment">
									<div className="block">
										<h3 className="title-block">
											2 Comments
										</h3>
										<div className="block-content">
											<div className="list-comment">
												<div className="comment-item">
													<div className="flex">
														<a
															className="thumb-left"
															href="#"
														>
															<img
																src={require("../images/ex/th-119x119-1.jpg")}
																alt="$NAME"
															/>
														</a>
														<div className="flex-body">
															<div className="wrap-name">
																<a
																	className="name-commenter"
																	href="#"
																>
																	David
																	Marvier
																</a>
																<span className="sep" />
																<span className="time-post">
																	33 minutes
																	ago
																</span>
															</div>
															<p className="rs comment-content">
																Drivers then
																grab what food
																and rest they
																can before
																returning to
																drive another
																stint. Today it
																is mandated that
																three drivers
																share each
																competing
																vehicle. Avatar
																image is under
																copyright ©
																David Marvier
															</p>
														</div>
													</div>
												</div>
												{/*end: .comment-item */}
												<div className="comment-item">
													<div className="flex">
														<a
															className="thumb-left"
															href="#"
														>
															<img
																src={require("../images/ex/th-119x119-2.jpg")}
																alt="$NAME"
															/>
														</a>
														<div className="flex-body">
															<div className="wrap-name">
																<a
																	className="name-commenter"
																	href="#"
																>
																	Chris Coyier
																</a>
																<span className="sep" />
																<span className="time-post">
																	20 minutes
																	ago
																</span>
															</div>
															<p className="rs comment-content">
																So what’s the
																Grunt workflow
																for “in dev,
																link up all
																these scripts
																individually”
																and “in prod,
																combine” ? You’d
																need to process
																.html right
															</p>
														</div>
													</div>
												</div>
												{/*end: .comment-item */}
												<div className="comment-item">
													<div className="flex">
														<a
															className="thumb-left"
															href="#"
														>
															<img
																src={require("../images/ex/th-119x119-3.jpg")}
																alt="$NAME"
															/>
														</a>
														<div className="flex-body">
															<div className="wrap-name">
																<a
																	className="name-commenter"
																	href="#"
																>
																	Marcy Sutton
																</a>
																<span className="sep" />
																<span className="time-post">
																	1 minute ago
																</span>
															</div>
															<p className="rs comment-content">
																I'm not sure how
																I feel about
																tweaks being
																able to access
																iOS's biometric
																security
																features...
															</p>
														</div>
													</div>
												</div>
												{/*end: .comment-item */}
											</div>
										</div>
									</div>
									{/*end: block list comment*/}
								</div>
							</div>
							<Aside />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default BlogDetail;
