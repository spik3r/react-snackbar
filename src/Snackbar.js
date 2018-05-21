import React from 'react';
import './snackbar.css';

export default class Snackbar extends React.Component {

 constructor(props) {
    super(props);
    this.state = {addClass: false}
  }

  render() {
        return ( <div className="snackbar">
                    <img src="/glyphicons-44-group.png" alt="img"/> <div className="message">Some Message</div>
                 </div>);
      }
}
