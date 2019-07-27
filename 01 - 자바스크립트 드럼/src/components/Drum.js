import React,{ Component} from 'react';
import './Drum.css'
class Drum extends Component {

    constructor(props){
        super(props);
        this.init();
        this.drum = React.createRef();
    }
    /**
     * 렌더링이 완료되는시점
     */
    componentDidMount() {
        this.drumaddEvent();
    }
    /**
     * drum 초기화
     */
    init = () =>{
        
    }
    /**
     * 드럼한테 이벤트추가
     */
    drumaddEvent = ()=>{
        const drum = this.drum.current;
        drum.addEventListener('transitionend', this.removeTransitionEvent);
       
    }
    /**
     * TransitionEnd 이벤트가 왔을때 propertyName이 transform 이면 현재타겟에 클래스 playing 지운다
     */
    removeTransitionEvent = (e) =>{
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