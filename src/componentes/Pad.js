import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import Controls from './Controls';

let data = [
    {id:"Heater-1", letra:"Q", src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
    {id:"Heater-2", letra:"W", src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
    {id:"Heater-3", letra:"E", src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
    {id:"Heater-4", letra:"A", src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
    {id:"Clap", letra:"S", src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
    {id:"Open-HH", letra:"D", src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
    {id:"Kick_n_Hat", letra:"Z", src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
    {id:"Kick", letra:"X", src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},
    {id:"Closed-HH", letra:"C", src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}
]


class Pad extends Component {
    constructor(props){
        super(props);
        this.state={
            id: ""
        }
        this.handleClick = this.handleClick.bind(this);
        }

    handleClick(event){
        let url = event.target.children[0].currentSrc;
        let audio = new Audio(url);
        audio.play()
        this.setState({
            id:event.target.id            
        })
        
    }
    _handleKeyDown = (event) => {
        let lengthData = data.length;
        for( let i = 0; i< lengthData; i++){
            switch( event.code) {
                case "Key"+ data[i].letra:
                    let url = data[i].src;
                    let audio = new Audio(url);
                    audio.play()
                    document.getElementById('display').innerHTML = data[i].id
                    break;
                default: 
                    break;
            }
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this._handleKeyDown);
    }

    render(){
        return(
            <>
                <div className="col-md-8 ">
                    {data.map(element =>{
                        return <Button
                        key = {element.id} 
                        className="drum-pad col-4" 
                        id={element.id}
                        onClick={this.handleClick}
                        >  
                                <audio
                                ref= {ref => this.audio =ref}                 
                                className="clip" 
                                id={element.letra} 
                                src={element.src}>
                            </audio>{element.letra}</Button>
                    })
                    }                                                      
                </div>
                <Controls id= {this.state.id}/>
            </>
        );
    }
}

export default Pad; 