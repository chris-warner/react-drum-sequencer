import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
    render(){
        return(
            <div>React Drum Sequencer</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
