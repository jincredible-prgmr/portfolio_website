import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Parallax from './components/parallax'
import Skills from './components/skills'
import Projects from './components/projects'



class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<Timeline></Timeline>
          <Parallax></Parallax>
          <Projects></Projects>
          <Skills></Skills>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
