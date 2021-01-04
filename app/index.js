import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header.js';
import Grid from './components/Grid/Grid.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Grid />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
