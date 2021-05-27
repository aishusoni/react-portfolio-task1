import React, { Component } from 'react';
// import ErrorBoundary from '../ErrorBoundary';
class Brief extends Component {
    constructor(props){
        super(props);
        this.state={
            bgn:false,
            bgy:false
        }
    }
  render() {
    let resumeData =this.props.resumeData;
    // let btn_class= this.state.bgn ? "coloumn3n" : "coloumn3";
    let btn_class="coloumn3";
    if(!this.state.bgn && this.state.bgy) {btn_class="coloumn3";}
    if(this.state.bgn)
    {
        btn_class="coloumn3n";
    }
    if(this.state.bgy)
    {
        btn_class="coloumn3y";
    }
    return (
        <div data-spy="scroll" data-target="#nav_scroll" data-offset="0" className="brief" id="Brief">
            <div className="row3">
                <div className="coloumn32" style={{
                       backgroundColor:"#1C2341",
                    }}>
                    <h3 style={{
                        color:"white"}
                    }>ONLY THING I WANT YOU TO FOCUS ON</h3>
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

                <div className={btn_class}>
                    <h1 className="inters">INTERESTING RIGHT?</h1>
                    <p style={{
                        marginTop:"5rem"
                    }}>
                    <button type="button" class="btn btn-secondary btn-lg" 
                    onClick={()=>{alert("THANKYOU!")}}
                    onMouseOver={()=>{this.setState({bgn:true})}} 
                    onMouseLeave={()=>{this.setState({bgn:false})}} style={{
                        marginLeft:"-1rem"
                    }}>YES</button>
                    
                    <button type="button" class="btn btn-secondary btn-lg" 
                    onClick={()=>{throw new Error('..hmmm')}}
                    onMouseOver={()=>{this.setState({bgy:true})}} 
                    onMouseLeave={()=>{this.setState({bgy:false})}}
                    style={{
                        marginLeft:"10rem"
                    }}>NO</button>
                    </p>
                </div>
            
                
            </div>
        </div>
   );
}
}


export default Brief;