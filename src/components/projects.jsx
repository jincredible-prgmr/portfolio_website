import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Android Fitness App</a></h3>
											<span>-	 This Android app allows users to create their own workout plan, and record data from each workout which will automatically adjust the program.
                      <br/><br/>-	Uses a WAMP server and PHP script to connect to MySQL database to perform CRUD operations.
                      </span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">TinyL Language Compiler</a></h3>
											<span>-	 Utilizes recursive descent LL(1) parsing tinyL language to generate RISC machine instructions.
                      <br/><br/>-  Uses a backtracking algorithm to eliminate “dead-code” from RISC instructions.
                      </span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Photo Library Android App</a></h3>
											<span>-	 Utilizes a singleton design pattern to manage a library of photo albums </span>
										</div>
									</div>
								</div>
							</div>

						</div>

					</div>
				</section>
      </div>
    )
  }
}
