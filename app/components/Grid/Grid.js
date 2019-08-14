import React from 'react';
import './Grid.css';
import DrumPad from '../DrumPad/DrumPad.js';

function Grid () {
    return (
    <div>
        <table>
    <thead>
        <tr>
            <th colspan="2">Drum Pads</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>The table body</td>
            <td>with two columns</td>
        </tr>
    </tbody>
</table>

    </div>
    )
}

export default Grid;