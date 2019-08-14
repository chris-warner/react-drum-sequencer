import React from 'react';

class DrumPadComponent extends React.Component {
    constructor (props){
        super (props);
        this.state = {
            
        }
    }
    render() {
        return (
        <div>
            <button>{this.props.padType}</button>
        </div>
        );
    }
}

export default DrumPadComponent;