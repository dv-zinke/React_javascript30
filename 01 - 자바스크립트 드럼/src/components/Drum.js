import React,{ Component} from 'react';
import './Drum.css'
class Drum extends Component {

    constructor(props){
        super(props);
        this.init();
        this.drum = React.createRef();
    }
    componentDidMount() {
        this.transitionEndEvent();
    }
    /**
     * drum 초기화
     */
    init = () =>{
        
    }
    /**
     * transitionEndEvent
     */
    transitionEndEvent = ()=>{
        const drum = this.drum.current;
        console.log(drum)
        drum.addEventListener('transitionend', this.removeTransition);
       //drum.addEventListener('transitionend', removeTransition);
    }
    removeTransition = (e) =>{
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
    }
    render(){
        const {keyData, fileName} = this.props;
        const path = './dist/sounds/'
        return(            
            <div className="drum" ref={this.drum}>
                <div className="soundKey" onKeyPress={this.keyDownEventAdd}>{this.props.clickKey}</div>
                <div className="sound">{this.props.audioName}</div>
                <audio data-key={keyData} src={path+fileName}></audio>
            </div>
        )
    }
}

export default Drum;