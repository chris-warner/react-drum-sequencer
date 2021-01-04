// Header component.
import React from 'react';
import { Navbar } from 'react-bootstrap';


function Header() {
    return (
        <div>
            <Navbar>
                <Navbar.Brand href="#home">React Drum Sequencer</Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Header;