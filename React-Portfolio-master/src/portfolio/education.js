import React, { Component } from 'react';
export default class Educat extends Component {
  render() {
    let resumeData = this.props.resumeData;
    
    return (
        <div  className="ed" data-spy="scroll" data-target="#nav_scroll" data-offset="0" id="Education">
        <h2 className="brief3">EDUCATION</h2>
        <div class="row">
            
            {
               resumeData.education && 
               resumeData.education.map((item) => 
               {
               return(
                <div class="column" >
                  <h2>
                  {item.UniversityName}
                  </h2>
                  <p style={
                      {
                          marginTop:"2rem",
                          marginTop:"3rem",
                          fontSize: "1.3rem",
                          letterSpacing: "0.0375rem"
                      }
                  }> {item.specialization}</p>
                  <p style={
                      {
                        fontFamily: "Roboto Condensed sans-serif",
                          marginTop:"3rem",
                          fontSize: "1.2rem",
                          letterSpacing: "0.0375rem"
                      }
                  }> {item.tenure}</p>
                  
                    <div className="cours">
                    <div id="accordion" className="coursbtn">
                    <div className="card cdh">
                        <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target={'#'+ item.idx} ariaExpanded="false" aria-controls={item.idx}>
                            COURSES
                            </button>
                        </h5>
                        </div>

                        <div id={item.idx} className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                        {
                            item.courses && 
                            item.courses.map((item2) => 
                            {
                            return(
                                <p className="hover">{item2.namee}</p>
                            );
                            }
                            )
                        }
                        </div>
                        </div>
                    </div>
                
                
                    </div>    
                    {/* <h4>Courses</h4> */}
                    </div>  
                  </div>
                  );
               })
            }
            
            
        </div>
        </div>
   );
  }
}