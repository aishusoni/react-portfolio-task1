import React, { Component } from 'react';
export default class Skills2 extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
        <div className="skills2" data-spy="scroll" data-target="#nav_scroll" data-offset="0" id="Skills">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-spy="scroll" data-target="#nav_scroll" data-offset="0">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="jumbotron jumbotron-fluid ski">
                <div className="container">
                    <h1 className="display-4">MY SKILL-SET</h1>
                    <p className="lead">BECAUSE WHY ELSE WOULD YOU HIRE ME?</p>
                </div>
                </div>
            </div>
            
                {
                    resumeData.skills && 
                    resumeData.skills.map((item) => 
                    {
                    return(
                        <div className="carousel-item">
                            <div className="jumbotron jumbotron-fluid ski">
                            <div className="container" >
                                <h1 className="display-4">{item.skillname}</h1>
                                <p className="lead">{item.description}</p>
                            </div>
                            </div>
                        </div>
                    );
                    }
                )
                }
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
   );
  }
}