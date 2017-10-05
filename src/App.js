import React, { Component } from 'react';
import './App.css';

import Incrementer from './components/incrementer.js'
import Counter from './components/counter.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      otherCount: 0
    }

    this.incremented = () => {
      this.setState({
        ...this.state,
        count: ++this.state.count
      })
    }

   this.otherIncremented = () => {
      this.setState({
        ...this.state,
        otherCount: ++this.state.otherCount
      })
    }
  }

  render() {
    return (
      <div>
        <Incrementer onIncrement={this.incremented}/>
        <Incrementer onIncrement={this.otherIncremented}/>
        <Counter count={this.state.count} otherCount={this.state.otherCount}/>
      </div>
    );
  }
}

export default App;
