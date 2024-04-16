import React from "react";
import Layout from "./Layout";
import Aside from "./Aside";
import Pagination from "./Pagination";

const Blog = () => {
	const url = new URLSearchParams(window.location.search);
	const page = parseInt(url.get("page"));
	console.log(page);
	const reviews = require("./review.json").reviews;

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
								<div className="mod-list-article">
									<div className="list-article">
										{reviews.map((review) => (
											<div className="article-item">
												<a
													href={`blog-detail?id=${review.id}`}
												>
													<img
														className="feature-img"
														src={require(`../images/ex/${review.image}`)}
														alt="$ARTICLE_TITLE"
													/>
												</a>
												<div className="flex">
													<div className="thumb-left wrap-date-post">
														<div className="date">
															<span className="day">
																15
															</span>
															<span className="my">
																April / 2024
															</span>
														</div>
														<a
															className="btn-more"
															href={`blog-detail?id=${review.id}`}
														>
															Read more
														</a>
													</div>
													<div className="flex-body">
														<p className="art-title rs">
															<a
																href={`blog-detail?id=${review.id}`}
															>
																{review.title}{" "}
															</a>
														</p>
														<p className="rs art-desc">
															{review.short_desc}
														</p>
													</div>
												</div>
											</div>
										))}
									</div>
									<Pagination page={page} />
								</div>
								{/*end: .mod-list-article */}
							</div>
							<Aside />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Blog;
