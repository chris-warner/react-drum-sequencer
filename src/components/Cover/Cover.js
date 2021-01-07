// Drum pad component.
import React from 'react';
import './Cover.css';

//This component will open when Begin is clicked.

function Cover(props) {

    function handleClick(e) {
        e.preventDefault();
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
        <div className="panel w-full">

        </div>

    )
}

export default Cover;