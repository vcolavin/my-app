import React, { Component } from 'react';

export default class Counter extends Component {
  render() {
    return (
      <div>
        <p>total count: {this.props.count}</p>
        <p>total other count: {this.props.otherCount}</p>
      </div>
    )
  }
}
