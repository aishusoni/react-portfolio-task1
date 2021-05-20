import React, { Component } from 'react';
class Brief2 extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <div data-spy="scroll" data-target="#nav_scroll" data-offset="0" className="brief" id="Brief">
         <div class="bg-image"></div>
         <div class="bg-text">
         <h1 style={{
            color:"rgb(10, 0, 99",
            fontSize:"80px",
            marginTop:"-1rem"
         }}>NOT A ROBOT!</h1>
         
         <div>
            {
               resumeData.skills && 
               resumeData.robot.map((item) => 
               {
               return(
                  <p>
                  <span className="hover">{item.robo}
                  </span>
                  </p>
                  );
               })
            }
         </div>
         </div>
      </div>
   );
  }
}

export default Brief2;