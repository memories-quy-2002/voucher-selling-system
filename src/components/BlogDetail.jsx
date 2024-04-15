import React from "react";
import Layout from "./Layout";
import Aside from "./Aside";

const BlogDetail = () => {
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
								<div className="mod-breadcrumb no-pt clearfix">
									<a href="#">Home</a>
									<span>&gt;</span>
									<a href="#">Coupons</a>
									<span>&gt;</span>
									<a href="#">Lindt - Save 10% off</a>
								</div>
								{/*end: .mod-breadcrumb*/}
								<div className="mod-blog-detail">
									<img
										className="feature-img"
										src={require("../images/ex/12-05.jpg")}
										alt="$ARTICLE_TITLE"
									/>
									<div className="top-detail clearfix">
										<div className="left-title">
											<a className="blog-title" href="#">
												Lorem ipsum dolor sit amet
												consectetuer{" "}
											</a>
											<div className="post-by">
												by{" "}
												<a
													className="user-post"
													href="#"
												>
													Admin
												</a>{" "}
												in{" "}
												<a
													className="category"
													href="#"
												>
													Coupon Category
												</a>
											</div>
										</div>
										<div className="right-date">
											<span className="day">12</span>
											<span className="my">
												May / 2013
											</span>
										</div>
									</div>
									<div className="blog-full-content">
										<p>
											Deum voluntati etiam rhoncus
											maecenas tempus, tellus eget
											condimentum rhoncus, sem quam semper
											libero, sit amet adipiscing sem
											neque sed ipsum. Nam. V signa in
											lucem exempli. Ingens ad quia ad
											nomine. Quadragesimae tunc Stet
											consequat eiusdem ea commotio gaude
											valde hinc Agimus nolo accipies si.
											Stet consequat eiusdem ea docentur
											Hellenicus ut libertatem non
											solutionem invenerunt.
										</p>
										<p>
											Longa figura haec vidit ad quia ei
											Taliarchum in modo ad nomine
											Stranguillio sit aliquip ipsa
											codicellos pedes Dianae. Casus tui
											clericis regnat se in modo compungi.
											Neque revertisset meam celaveritis
											ac ea complacuit. Palladio in fuerat
											construeret in fuerat eum filiam vel
											per te ad per accipere filia dedit
											est amet coram me. Lycoridem
											Apollonio dares ipsum rebum accusam
											amici se sed esse more defuncta ait.
											Apollonii illi desiderat dolor
											exposuisset mucrone geminus filium
											suum in modo ad nomine. Habet anulum
											in fuerat accidens inquit merui,
											dolores in lucem exempli paupers
											coniunx. Statimque assueta cum
											obiectum dixit eos cui. Carissimi
											deo adiuves finem imponunt hoc ait
											mea Christianis aedificatur ergo
											quod non coepit contingere vasculo
											ab Archistratis continuo. Jesu
											Dionysiadem tuos sed eu fugiens
											laudo misera Tharsia, zurziaca in
											modo invenit quasi nomen accidentia
											iuvenis eum. Credo puella sed eu
											fugiens laudo in. A lenoni
											incommunicabile in lucem exempli
											paupers coniunx minus huius. Auri
											est in deinde plectrum anni ipsa
											quod una. Flebili Miserere puellam
											flentem sub dixi die, tharsos
											princeps coniungitur vestra
											nutriendam veni. Jesu Dionysiadem
											patrem dolor invenerit habetur ad
											per.
										</p>
										<p>
											Christo tunc agitans diam ‘ Mucro
											enim formam cum magna aliter diligo
											alii paupertas quantitas non
											solutionem ascendens sed. Suos
											faciam atque bona dei. Ipsa mihi cum
											suam vidit Dionysiadi, toro frumento
											manu fueris navigare non coepit.
											Valde agam eam sed haec vidit pater,
											aliqua abstrahit orare ecce prima
											inrumpit dic. Ephesiorum illius ergo
											adseris de his, peractoque
											convocatis ad suis alteri formam.
											Invitamus me vero diam ille Tharsos
											determinatio debitis torporis quin.
											Peractoque convocatis secessit
											civitatis civium takimata scias a
											patriam Dianae. Inde valuit argentum
											in rei exultant deo hanc si quod
											una. Austri ventriculum defunctae
											cubiculo forma ait est se sed quod
											ait! Epheso Tyrum in fuerat
											construeret cena reges undis
											Tharsiam in rei civibus unde meae
											ceroma fronte comico hac navi quia.
											Diana praesentatis ne videret
											quaeritur, cur meae sit Mariae Bone.
											Plenus vado est in lucem genero
											coruscus eum in deinde cupis auras
											sed haec sed quod non dum autem
											Apolloni figitur acquievit. Multa
											famis libet regio hinc ad nomine
											Maria non coepit.
										</p>
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
									<div className="about-author">
										<div className="flex">
											<a
												className="author-avatar thumb-left"
												href="#"
											>
												<img
													src={require("../images/ex/13-02.jpg")}
													alt="$NAME"
												/>
											</a>
											<div className="flex-body">
												<a
													className="author-name"
													href="#"
												>
													JUSTIN ROCKWELL
												</a>
												<p className="rs author-desc">
													Drivers then grab what food
													and rest they can before
													returning to drive another
													stint. Today it is mandated
													that three drivers share
													each competing vehicle.
													Avatar image is under
													copyright © David Marvier
												</p>
												<p className="rs author-social">
													<a href="#">
														<i className="fa fa-facebook-square fa-2x" />
													</a>
													<a href="#">
														<i className="fa fa-twitter-square fa-2x" />
													</a>
													<a href="#">
														<i className="fa fa-pinterest-square fa-2x" />
													</a>
													<a href="#">
														<i className="fa fa-linkedin-square fa-2x" />
													</a>
												</p>
											</div>
										</div>
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
									<div className="block blk-post-cm">
										<h3 className="title-block">
											Leave a comment
										</h3>
										<div className="block-content">
											<div className="form-post-cm form">
												<p className="rs form-desc">
													Discuss this article. We
													reserve the right to delete
													flames, trolls, and wood
													nymphs.
												</p>
												<div className="clearfix">
													<form action="#">
														<label
															className="lbl-wrap-text"
															htmlFor="sys_txt_name"
														>
															<input
																className="txt-ct"
																id="sys_txt_name"
																type="text"
																placeholder="Name(required)"
															/>
														</label>
														<label
															className="lbl-wrap-text"
															htmlFor="sys_txt_email"
														>
															<input
																className="txt-ct"
																id="sys_txt_email"
																type="text"
																placeholder="Email(required)"
															/>
														</label>
														<label
															className="lbl-wrap-text"
															htmlFor="sys_txt_site"
														>
															<input
																className="txt-ct"
																id="sys_txt_site"
																type="text"
																placeholder="Website"
															/>
														</label>
														<label
															className="lbl-wrap-text txt-content"
															htmlFor="sys_txt_sms"
														>
															<textarea
																className="txt-ct"
																name="sys_txt_sms"
																id="sys_txt_sms"
																cols={30}
																rows={10}
																placeholder="Message(required)"
																defaultValue={
																	""
																}
															/>
														</label>
														<div className="wrap-submit">
															<button
																className="btn-submit"
																type="submit"
															>
																Post comment
															</button>
														</div>
													</form>
												</div>
											</div>
										</div>
									</div>
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
