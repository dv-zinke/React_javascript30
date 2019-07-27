import React, {Component} from 'react';
import Drum from './Drum';
import './Container.css'

class Container extends Component{
    constructor(props){
        super(props);
        this.init();
    }
    /**
     * Container 초기화
     */
    init = () =>{
        window.addEventListener('keydown',this.keyDownEventAdd);
        
    }
    /**
     * keyDownEvent추가
     */
    keyDownEventAdd = (e) =>{
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if(!audio) return;
        const drum = audio.parentNode;
        drum.classList.add('playing')
        
        audio.currentTime = 0;
        audio.play();
    }
    state = {
      soundSrc: [
          {key:65, fileName:"clap.wav", clickKey:"A", audioName:"CLAP"},
          {key:83, fileName:"hihat.wav", clickKey:"S", audioName:"HIHAT"}, 
          {key:68, fileName:"kick.wav", clickKey:"D", audioName:"KICK"}, 
          {key:70, fileName:"openhat.wav", clickKey:"F", audioName:"OPENHAT"}, 
          {key:71, fileName:"boom.wav", clickKey:"G", audioName:"BOOM"}, 
          {key:72, fileName:"ride.wav", clickKey:"H", audioName:"RIDE"},
          {key:74, fileName:"snare.wav", clickKey:"J", audioName:"SNARE"}, 
          {key:75, fileName:"tom.wav", clickKey:"K", audioName:"TOM"}, 
          {key:76, fileName:"tink.wav", clickKey:"L", audioName:"TINK"},  
        ]
    }
    render(){
        const DrumsEvent = () => {
           return this.state.soundSrc.map((data)=>
               <Drum key={data.key}
                fileName={data.fileName}
                 clickKey={data.clickKey} 
                 keyData={data.key}
                 audioName={data.audioName}
                 />
           )
        }
        return (
            <div className="keys">
                {DrumsEvent()}
            </div>
        )
    }
}

export default Container;