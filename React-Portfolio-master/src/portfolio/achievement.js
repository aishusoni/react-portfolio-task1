import React, { Component } from 'react';
export default class Achieve extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
        <div className="achi" data-spy="scroll" data-target="#nav_scroll" data-offset="0" id="Achi">
        <div id="carouselExampleControls2" className="carousel slide" data-ride="carousel" >
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="jumbotron jumbotron-fluid a">
                <div className="container">
                    <h1 className="display-4">MY ACHIEVEMENTS</h1>
                    <p className="lead">(NOT VERY PROUD OF)</p>
                </div>
                </div>
            </div>
            
                {
                    resumeData.achievements && 
                    resumeData.achievements.map((item) => 
                    {
                    return(
                        <div className="carousel-item">
                        <div className="jumbotron jumbotron-fluid a">
                        <div className="container" >
                            <h1 className="display-4">{item.name}</h1>
                            <p className="lead">{item.description}</p>
                        </div>
                        </div>
                        </div>
                    );
                    }
                )
                }
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
   );
  }
}