// Header component.
import React from 'react';
import './Header.css';

function Header() {
    return (
        <div>
            <div className="flex flex-wrap overflow-hidden Navbar">
                <div className="w-full overflow-hidden">
                <h1 className="text-center mt-7 text-xl">REACT DRUM SEQUENCER</h1>
                </div>
            </div>
        </div>
    )
}

export default Header;