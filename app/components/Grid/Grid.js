//Grid component for drum pads.

import React from 'react';
import './Grid.css';
import { Button, Container } from '@material-ui/core/';
import DrumPad from '../DrumPad/DrumPad.js';

function Grid() {
    return (
        <div>
            <Container maxWidth="sm"></Container>
            <table>
                <thead>
                    <tr>
                        {/* Header Table Row. */}
                        <th className="headerTitle" colSpan="4">Drum Pads</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="padRow">
                        {/* Add drum pads here. */}
                        <td><DrumPad /></td>
                        <td><DrumPad /></td>
                        <td><DrumPad /></td>
                        <td><DrumPad /></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Grid;