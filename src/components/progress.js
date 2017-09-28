import React, { Component } from 'react';

class Progress extends Component {
  render() {
    return (
      <div className="progress row">
        {this.props.progress} s
      </div>
    );
  }
}

export default Progress;
