import React, { Component } from 'react';
import resumeData from './resumeData';
import Navbar from './portfolio/navbar';
import Brief from './portfolio/brief1';
import Work from './portfolio/work';
import Educat from './portfolio/education';
import Footer from './portfolio/footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './portfolio/skills';
import Skills2 from './portfolio/skills2';
import Achieve from './portfolio/achievement';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  render() {
    return (
      
      <div className="body">
        <Navbar resumeData={resumeData}/>
        <ErrorBoundary>
        <Brief resumeData={resumeData}/>
        </ErrorBoundary>
        <Educat resumeData={resumeData}/>
        <Work resumeData={resumeData}/>
        <Skills2 resumeData={resumeData}/>
        <Achieve resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
        
      </div>
    );
  }
}

export default App;