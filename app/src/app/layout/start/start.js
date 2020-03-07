import React, { Component } from 'react';
import './start.scss';
class Start extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div id="start-container">
                <div id="start-left">
                    <img src="assets/imgs/start.jpg" />
                </div>
                <div id="start-right"></div>
            </div>
        );
    }
}
 
export default Start;