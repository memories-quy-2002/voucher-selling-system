import React from "react";
import Layout from "./Layout";
import Aside from "./Aside";
import Pagination from "./Pagination";

const Blog = () => {
	const url = new URLSearchParams(window.location.search);
	const page = parseInt(url.get("page"));
	console.log(page);

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
										<div className="article-item">
											<a href="/blog-detail">
												<img
													className="feature-img"
													src={require("../images/ex/12-01.jpg")}
													alt="$ARTICLE_TITLE"
												/>
											</a>
											<div className="flex">
												<div className="thumb-left wrap-date-post">
													<div className="date">
														<span className="day">
															12
														</span>
														<span className="my">
															May / 2013
														</span>
													</div>
													<a
														className="btn-more"
														href="/blog-detail"
													>
														Read more
													</a>
												</div>
												<div className="flex-body">
													<p className="art-title rs">
														<a href="/blog-detail">
															Lorem ipsum dolor
															sit amet
															consectetuer{" "}
														</a>
													</p>
													<p className="rs art-desc">
														Nullam magna velit,
														rhoncus at urna et,
														dapibus eu, fermentum
														eros. Integer sit amet
														purus hendrerit,
														porttitor ligula et,
														mollis est. Etiam odio
														est, pharetra non dui
														eu, blandit lacinia
														nunc. Proin vel pharetra
														lacus. Quisque at elit
														et elit elementum tempor
														quis quis mi
													</p>
												</div>
											</div>
										</div>
										{/*end: article-item */}
										<div className="article-item">
											<a href="/blog-detail">
												<img
													className="feature-img"
													src={require("../images/ex/12-02.jpg")}
													alt="$ARTICLE_TITLE"
												/>
											</a>
											<div className="flex">
												<div className="thumb-left wrap-date-post">
													<div className="date">
														<span className="day">
															31
														</span>
														<span className="my">
															Dec / 2013
														</span>
													</div>
													<a
														className="btn-more"
														href="/blog-detail"
													>
														Read more
													</a>
												</div>
												<div className="flex-body">
													<p className="art-title rs">
														<a href="/blog-detail">
															Integer ut nisl eu
															mi aliquet
														</a>
													</p>
													<p className="rs art-desc">
														Duis eleifend eu magna
														dapibus viverra. Proin
														lorem lorem, lacinia eu
														massa vel, tempus
														condimentum quam. Mauris
														nec cursus ipsum, nec
														rhoncus lectus. Sed
														velit magna, ullamcorper
														a metus quis, dictum
														sollicitudin diam. In
														sed metus sed augue
														tempor volutpat
													</p>
												</div>
											</div>
										</div>
										{/*end: article-item */}
										<div className="article-item">
											<a href="/blog-detail">
												<img
													className="feature-img"
													src={require("../images/ex/12-03.jpg")}
													alt="$ARTICLE_TITLE"
												/>
											</a>
											<div className="flex">
												<div className="thumb-left wrap-date-post">
													<div className="date">
														<span className="day">
															07
														</span>
														<span className="my">
															Jun / 2013
														</span>
													</div>
													<a
														className="btn-more"
														href="/blog-detail"
													>
														Read more
													</a>
												</div>
												<div className="flex-body">
													<p className="art-title rs">
														<a href="/blog-detail">
															Sed egestas
															condimentum massa
															nec pellentesque
														</a>
													</p>
													<p className="rs art-desc">
														Morbi commodo enim a
														ante tincidunt auctor.
														Curabitur orci est,
														tristique eget gravida
														sit amet, faucibus
														interdum ipsum. In
														vulputate varius
														placerat. Nam erat
														turpis, consectetur sed
														rutrum pharetra,
														interdum vel nibh.
													</p>
												</div>
											</div>
										</div>
										{/*end: article-item */}
										<div className="article-item">
											<a href="/blog-detail">
												<img
													className="feature-img"
													src={require("../images/ex/12-04.jpg")}
													alt="$ARTICLE_TITLE"
												/>
											</a>
											<div className="flex">
												<div className="thumb-left wrap-date-post">
													<div className="date">
														<span className="day">
															20
														</span>
														<span className="my">
															Feb / 2013
														</span>
													</div>
													<a
														className="btn-more"
														href="/blog-detail"
													>
														Read more
													</a>
												</div>
												<div className="flex-body">
													<p className="art-title rs">
														<a href="/blog-detail">
															Nam lectus elit,
															condimentum sed
															imperdie
														</a>
													</p>
													<p className="rs art-desc">
														Quisque justo magna,
														bibendum eget ante nec,
														luctus pellentesque
														libero. Duis interdum
														congue congue. Etiam
														purus lacus, tempus eu
														fringilla vehicula,
														ornare sed mauris.
													</p>
												</div>
											</div>
										</div>
										{/*end: article-item */}
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
