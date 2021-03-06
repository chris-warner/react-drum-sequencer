// Drum pad component.
import React, {Component} from 'react';
import gsap from 'gsap';
import './Cover.css';

//This class based component will animate open when "Begin" is clicked.

class Cover extends Component {
    constructor(props) {
        super(props);
        // reference to the DOM node
        this.myElement = null;
        // reference to the animation
        this.myTween = null;
    }

    handleClick = (e) => {
        e.preventDefault();
        this.footer = document.getElementById("anchor1");
        this.posTop = this.footer.offsetTop - 40;
        this.myTween = gsap.to(this.myElement, 1, {y: this.posTop});
    }
    
     IsPlayingg = (props) => {
        return <h1>Is playing</h1>;
    }
    
    IsNotPlaying = (props) => {
        return <h1>Is not playing</h1>
    }
    
    PlayState = (props) => {
        const isPlaying = props.isPlaying;
        if (isPlaying) {
            console.log("is playing");
            return this.isPlaying;
        }
        else {
            console.log("is not playing");
            return this.IsNotPlaying;
        }
    }

    componentDidMount() {
        // use the node ref to create the animation
        
    }

    render() {
        return (
            <div className="panel w-full" ref={div => this.myElement = div } >
                <button className="coverButton" onClick={this.handleClick}>New Project</button>
        </div >
        );
    }
}
export default Cover;