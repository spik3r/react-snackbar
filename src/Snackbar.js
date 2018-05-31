import React from 'react';
import './snackbar.css';

export default class Snackbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {addClass: false};

    }
    toggle() {
        this.setState({addClass: true});
    }
    render() {
        let snackbarClass = ['snackbar'];
        if(this.state.addClass) {
            snackbarClass.push('snackbar_gone');
        }
            return (<div className="snackbar-positioner">
                        <div className={snackbarClass.join(' ')} >
                         <img className="snackbar_img" alt="img" src="/group.png"/>
                            <span className="snackbar_message">123 People booked this Foo Bar  in the last hour</span>
                            <img className="snackbar_close" alt="close icon" src="/close_white.png" onClick={this.toggle.bind(this)}/>
                        </div>
                    </div>);
    }
}
