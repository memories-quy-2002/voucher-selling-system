import React from "react";

const Footer = () => {
	return (
		<footer className="mod-footer">
			<div className="footer-top">
				<div className="grid_frame">
					<div className="container_grid clearfix">
						<div className="grid_3">
							<div className="company-info">
								<img
									src={require("../images/logo-gray.png")}
									alt="CouponDay"
								/>
								<p className="rs">
									Lorem ipsum dolor sit amet, consectetuer
									adipiscing elit, sed diam nonummy nibh
									euismod tincidunt ut laoreet dolore magna
									aliquam erat volutpat. Ut wisi enim ad minim
									veniam, quis nostrud
								</p>
								<p className="rs">
									1200 Balh Blah Avenue <br />
									Hanoi, Vietnam 12137
								</p>
							</div>
						</div>
						<div className="grid_3">
							<div className="block social-link">
								<h3 className="title-block">Follow us</h3>
								<div className="block-content">
									<ul className="rs">
										<li>
											<i className="fa fa-facebook-square fa-2x" />
											<a href="/" target="_blank">
												Our Facebook page
											</a>
										</li>
										<li>
											<i className="fa fa-twitter-square fa-2x" />
											<a href="/" target="_blank">
												Follow our Tweets
											</a>
										</li>
										<li>
											<i className="fa fa-pinterest-square fa-2x" />
											<a href="/" target="_blank">
												Follow our Pin board
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						{/*end: Follow us */}
						<div className="grid_3">
							<div className="block intro-video">
								<h3 className="title-block">Intro Video</h3>
								<div className="block-content">
									<div
										className="wrap-video"
										id="sys_wrap_video"
									>
										<div className="lightbox-video">
											<a
												className="html5lightbox"
												href="http://player.vimeo.com/video/36932496"
												title=""
											>
												<i className="btn-play" />
												<img
													src={require("../images/video-img.png")}
													alt=""
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/*end: Intro Video */}
						<div className="grid_3">
							<div className="block blog-recent">
								<h3 className="title-block">Latest blog</h3>
								<div className="block-content">
									<div className="entry-item flex">
										<a className="thumb-left" href="/">
											<img
												src={require("../images/ex/04-15.jpg")}
												alt="$TITLE"
											/>
										</a>
										<div className="flex-body">
											<a href="/">
												Lorem ipsum dolor sit amet,
												consectetuer adipiscing eli
											</a>
										</div>
									</div>
									<div className="entry-item flex">
										<a className="thumb-left" href="/">
											<img
												src={require("../images/ex/04-16.jpg")}
												alt="$TITLE"
											/>
										</a>
										<div className="flex-body">
											<a href="/">
												Ut wisi enim ad minim veniam,
												quis nostrud
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/*end: blog-recent */}
					</div>
				</div>
			</div>
			{/*end: .foot-top*/}
			<div className="foot-copyright">
				<div className="grid_frame">
					<div className="container_grid clearfix">
						<div className="left-link">
							<a href="/">Home</a>
							<a href="/">Term of conditions</a>
							<a href="/">Privacy</a>
							<a href="/">Support</a>
							<a href="/">Contact</a>
						</div>
						<div className="copyright">
							Copyright © 2014 by www.couponday.com
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
