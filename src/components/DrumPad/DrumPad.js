// Drum pad component.
import React from 'react';
import './DrumPad.css';

function DrumPad(props) {

    function handleClick(e) {
        e.preventDefault();
        console.log('btn clicked');
        let sample = new Audio(props.audio);
        sample.play();
    }


return (
    <div className="pad">
        <button onClick={handleClick}>{props.name}</button>
    </div>

)
}

export default DrumPad;