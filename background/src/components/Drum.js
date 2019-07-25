import React,{ Component} from 'react';

class Drum extends Component {

    render(){
        const {keyData, fileName} = this.props;
        const path = './dist/sounds/'
        return(            
            <div>
                <button onKeyPress={this.keyDownEventAdd}>{this.props.clickKey}</button>
                <div>{this.props.audioName}</div>
                <audio data-key={keyData} src={path+fileName}></audio>
            </div>
        )
    }
}

export default Drum;