import './GSAPTest.css';
import {React, Component} from 'react';
import gsap from 'gsap';

class GSAPTest extends Component {
    constructor(props){
      super(props);
      // reference to the DOM node
      this.myElement = null;
      // reference to the animation
      this.myTween = null;
    }
  
    componentDidMount(){
      // use the node ref to create the animation
      this.myTween = gsap.to(this.myElement, 1, {x: 100, y: 100});
    }
  
    render(){
      return <div style={divStyle} ref={div => this.myElement = div} />;
    }
  }

  const divStyle = {
      width: '100px',
      height: '100px',
      backgroundColor: 'black'
  }

  export default GSAPTest;
