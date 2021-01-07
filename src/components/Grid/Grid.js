//Grid component for drum pads.

import React from 'react';
import './Grid.css';
import DrumPad from '../DrumPad/DrumPad.js';
import Kick from '../../assets/samples/demo_kit_kick.wav';
import Snare from '../../assets/samples/demo_kit_snare.wav';

function Grid() {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {/* Header Table Row. */}
                        <th className="headerTitle" colSpan="4"><h1>Drum Pads</h1></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="padRow">
                        {/* Add drum pads here. */}
                        <td><DrumPad audio={Kick} name={"Kick"}/></td>
                        <td><DrumPad audio={Snare} name={"Snare"}/></td>
                        <td><DrumPad /></td>
                        <td><DrumPad /></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Grid;