import React, { Component } from 'react'

export default class Education extends Component {
  render(){
    return (


      <section className="colorlib-experience" data-section="experience">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">Timeline</span>
              <h2 className="colorlib-heading animate-box">Timeline</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-1">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2><a href="#">Rutgers University-NB</a> <span>Graduating May 2021</span></h2>
                      <p>GPA: 3.4<br/>Deans List FA2019 SP2020<br/>Relevant Coursework:<br/>▪ Software Methodology, Data Structures, Principles of Programming Languages, Principles of Information and Data Management, Design and Analysis of Computer Algorithims</p>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-2">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2><a href="#">Intern at Beam Health LLC.</a> <span>May 2018- Aug 2018</span></h2>
                      <p>▪	Created Chat component on company website.
<br/>▪	Performed QA testing on apps various functions prior to launch, documenting results, and troubleshooting errors.
<br/>▪	Headed PR outreach, reaching out to over 1000 media outlets, and corresponding with various media outlets such as TechCrunch to promote apps launch.
<br/>▪	Designed and coded application components in an Agile environment.
</p>
                    </div>
                  </div>
                </article>


                <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-none">
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>





    )
  }
}
