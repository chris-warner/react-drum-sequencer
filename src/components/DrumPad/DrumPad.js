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

    function IsPlayingg(props) {
        return <h1>Is playing</h1>;
    }

    function IsNotPlaying(props) {
        return <h1>Is not playing</h1>
    }

    function PlayState(props) {
        const isPlaying = props.isPlaying;
        if (isPlaying) {
            console.log("is playing");
            return <IsPlayingg />
        }
        else {
            console.log("is not playing");
            return <IsNotPlaying />
        }
    }


    return (
        <div className="pad">
            {/* <PlayState isPlaying={true} /> */}
            <button onClick={handleClick}>{props.name}</button>
        </div>

    )
}

export default DrumPad;