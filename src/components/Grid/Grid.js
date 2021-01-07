//Grid component for drum pads.

import React from 'react';
import './Grid.css';
import DrumPad from '../DrumPad/DrumPad.js';
import Kick from '../../assets/samples/demo_kit_kick.wav';
import Snare from '../../assets/samples/demo_kit_snare.wav';

//Tailwind grid for layout.
function Grid() {
    return (
        <div>
            <div className="flex flex-wrap -mx-2 overflow-hidden x1:-mx-1">
                <div className="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/2 xl:my-1 xl:px-1 xl:w-1/4">
                    <DrumPad audio={Kick} name={"Kick"}/>
                </div>

                <div className="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/2 xl:my-1 xl:px-1 xl:w-1/4">
                    <DrumPad audio={Snare} name={"Snare"}/>
                </div>

                <div className="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/2 xl:my-1 xl:px-1 xl:w-1/4">
                    <DrumPad audio={Kick} name={"Kick"}/>
                </div>

                <div className="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/2 xl:my-1 xl:px-1 xl:w-1/4">
                    <DrumPad audio={Snare} name={"Snare"}/>
                </div>

            </div>
        </div>
        // <div>
        //     <table>
        //         <thead>
        //             <tr>
        //                 {/* Header Table Row. */}
        //                 <th className="headerTitle" colSpan="4"><h1>Drum Pads</h1></th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             <tr className="padRow">
        //                 {/* Add drum pads here. */}
        //                 <td><DrumPad audio={Kick} name={"Kick"}/></td>
        //                 <td><DrumPad audio={Snare} name={"Snare"}/></td>
        //                 <td><DrumPad /></td>
        //                 <td><DrumPad /></td>
        //             </tr>
        //         </tbody>
        //     </table>
        // </div>
    )
}

export default Grid;