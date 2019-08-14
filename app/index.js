import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/Grid/Grid.js';
import './index.css';

class App extends React.Component{
    render() {
        return(
            <div class="titleDiv">React Drum Sequencer</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
