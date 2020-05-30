import React, {Component} from 'react';


class Controls extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="col-md-4 d-flex justify-content-center">
                <div id="display" className="border border-primary col-12 rounded-lg">{this.props.id}</div>
            </div>
        );
    }
}


export default Controls;