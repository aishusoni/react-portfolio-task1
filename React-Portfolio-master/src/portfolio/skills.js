import React, { Component } from 'react';
export default class Skills extends Component {
  render() {
    let resumeData = this.props.resumeData;
    
    return (
        <div   data-spy="scroll" data-target="#nav_scroll" data-offset="0" id="Skills">
        <div class="row3">
            <div class="column3">
                <h2 style={{
                    fontSize:"100px",
                    marginLeft:"-3rem",marginTop:"10rem"
                }}>SKILLS</h2>
            </div> 
            <div class="column3" >
                    { 
                        resumeData.skills && 
                        resumeData.skills.map((item) => 
                        {
                            return(
                                <div id="accordion">
                                    <div className="card">
                                        <div className="card-header" id={item.skillname+"1"}>
                                        <h5 className="mb-0">
                                            <button className="btn btn-danger" data-toggle="collapse" data-target={'#'+item.skillname} aria-expanded="True" aria-controls={item.skillname}>
                                            {item.skillname}
                                            </button>
                                        </h5>
                                        </div>

                                        <div id={item.skillname} className="collapse show" aria-labelledby={item.skillname+"1"} data-parent="#accordion">
                                        <div className="card-body">
                                            {item.description}
                                        </div>
                                        </div>
                                    </div>
                                </div>   
                            );
                        }
                        )
                    }

            </div>
        </div>
        </div>
   );
  }
}