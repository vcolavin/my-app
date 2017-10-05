import React, { Component } from 'react';

export default class Incrementer extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onIncrement}>hey there</button>
      </div>
    )
  }
}
