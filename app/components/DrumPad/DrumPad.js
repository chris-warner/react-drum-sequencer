// Drum pad component.
import React from 'react';
import './DrumPad.css';
import { Button } from '@material-ui/core/';
import ReactAudioPlayer from 'react-audio-player';
import Snare from '../../assets/samples/demo_kit_snare.wav';

function DrumPad(props) {

    function handleClick(e) {
        e.preventDefault();
        console.log('btn clicked');
        let sample = new Audio(props.audio);
        sample.play();
    }


return (
    <div className="pad">
        <Button variant="contained" color="primary" onClick={handleClick}>Play</Button>
    </div>

)
}

export default DrumPad;