import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer >
          <div >
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <div>
                  <p style={{
                    textAlign:"center",
                    color:"white",
                  }}>
                    &nbsp;&nbsp;
                    <b>E-Mail: </b>&nbsp;
                    {resumeData.email}
                    &nbsp;&nbsp;
                    <b>Phone No.</b> : &nbsp;
                    {resumeData.phone}
                    &nbsp;&nbsp;
                    <b>Address</b> : &nbsp;
                    {resumeData.address}
                  </p>
                  <p style={{
                    textAlign:"center"
                  }}>
                    <a href={item.url}>linkedin</a>
                  </p>
                  </div>
                )
              })
            }
          </div>
          

    </footer>
    );
  }
}