import React from 'react';
import './snackbar.css';
import Snackbar from './Snackbar';
const results = <Snackbar/>

export default class ShowSnackbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          shown: false,
        };
        this.toggleBox = this.toggleBox.bind(this);

    }

           toggleBox() {
            const { shown } = this.state;
            this.setState({
              shown: !shown,
            });
          }

  state = { showResults: false};

  onClickHandler = ()=>{
    this.setState(prev => ({showResults: !prev.showResults}));
  };

      render() {
        return <div className={this.state.active ? 'snackbar': null} >

            <input type='submit' value = 'Show or Hide' onClick={this.onClickHandler} />
                                          {this.state.showResults ? results : null}
         </div>;
      }
}
