import React, { Component } from 'react';
import resumeData from './resumeData.js';
import Navbar from './navbar';
import Brief from './brief1';
import Work from './work';
import Educat from './education';
import Footer from './footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './skills';
import Skills2 from './skills2';
import Achieve from './achievement';
// import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  render() {
    return (
      
      <div className="body">
        <Navbar resumeData={resumeData}/>
        {/* <ErrorBoundary> */}
        <Brief resumeData={resumeData}/>
        {/* </ErrorBoundary> */}
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