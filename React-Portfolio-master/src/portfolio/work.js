import React, { Component } from 'react';
export default class work extends Component {
  render() {
    let resumeData = this.props.resumeData;
    
    return (
        <div className="ed2" data-spy="scroll" data-target="#nav_scroll" data-offset="0" id="Experience">
        <h2 className="brief3">EXPERIENCE</h2>
        <div class="row">
            
            {
               resumeData.work && 
               resumeData.work.map((item) => 
               {
               return(
                <div class="column2" >
                  <h2 style={{
                    color:"#15014d"
                  }}>
                  {item.CompanyName}
                  </h2>
                  <p style={
                      {
                          marginTop:"2rem",
                          marginTop:"3rem",
                          fontSize: "1.2rem",
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
                  
                    <div className="cours2">
                    <h4 style={{
                      color:"#05668d"
                    }} >Achievements</h4>
                     <p className="hover2">{item.achievements}</p>
                     <p >{item.contact}</p>
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