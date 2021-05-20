import React, { Component } from 'react';
export default class Navbar extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
      <nav id="nav_scroll" className="navbar navbar-expand-lg navbar-light bg-darker"  >
        {/* <div className="container"> */}
      <h1 className="navbar-brand" > </h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#Brief">About me <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Education">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Experience">Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Achi">Achievements</a>
          </li>
        </ul>
        <span className="navbar-text">
        ...Not a typical guy who's from IIM or IIT &nbsp;  
        </span>
      </div>
      {/* </div> */}
    </nav>

         <div>
           <div className="image">
           <p className="Header">
              {resumeData.name}
              </p>
              <p className="header2">{resumeData.aboutme}</p>
             <img className="pic" src="https://store.hp.com/app/assets/images/uploads/prod/misty-forest-background1595620320482968.jpg?impolicy=prdimg&imdensity=1&imwidth=600" alt="" />
             
             {/* https://img.freepik.com/free-photo/dark-blue-texture-cement-wall-background_28629-1627.jpg?size=626&ext=jpg   https://lh3.googleusercontent.com/proxy/FamMIPwNCkEiFs7yovi7nVmBwV1_ZxF4k0TJyjZYbHla0AgmKTvHP2U-QLQHVW58phNdEXS_rYoeUmjCR5fUGhVBlR-KDNloZhf5vQ6hvtBJy8ROuty5qQ*/}
            </div>
           
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}