import React, { Component } from 'react'

export default class Parallax extends Component{
  render(){
    return (
      <div id="colorlib-counter" className="colorlib-counters" style={{backgroundImage: 'url(images/mount_fuji_3.jpg)'}} data-stellar-background-ratio="0.5">
        <div className="overlay" />
        <div className="colorlib-narrow-content">
          <div className="row">
          </div>
          <div className="row">
            <div className="col-md-3 text-center animate-box">
              <span className="colorlib-counter js-counter" data-from={0} data-to={100} data-speed={5000} data-refresh-interval={50} />
              <span className="colorlib-counter-label">% Awesome</span>
            </div>
            <div className="col-md-3 text-center animate-box">
              <span className="colorlib-counter js-counter" data-from={0} data-to={4} data-speed={5000} data-refresh-interval={50} />
              <span className="colorlib-counter-label">Independent<br/>Projects</span>
            </div>
            <div className="col-md-3 text-center animate-box">
              <span className="colorlib-counter js-counter" data-from={0} data-to={12} data-speed={5000} data-refresh-interval={50} />
              <span className="colorlib-counter-label">School<br/>Projects</span>
            </div>
            <div className="col-md-3 text-center animate-box">
              <span className="colorlib-counter js-counter" data-from={0} data-to={10} data-speed={5000} data-refresh-interval={50} />
              <span className="colorlib-counter-label">Partners</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
