import { Component} from "react";

class ErrorBoundary extends Component{

    constructor(props){
        super(props);
        this.state={
            errorB: false,
        }
    }
    //  componentDidCatch(err)
    static getDerivedStateFromError(error){
        return {errorB:true};
    }
    render(){
        if(this.state.errorB){
            return (<p>..well...i am..</p>);
        }
        return this.props.children;
    }
}

export default ErrorBoundary;