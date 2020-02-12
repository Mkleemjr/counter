import React, {Component} from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      increment: 'Double Increments',
      decrement: 'Double Decrements'
    }
  }

  // this is where we are going to put our methods
  increment = () => {
    if (this.state.count < 20) {
      this.setState({
        count: this.state.count + 1
      })
    } else {
      this.setState({
        count: 20
      })
    }
  }

  incrementByTwo = () => {
    if ((this.state.count < 20) && (this.state.count !== 19)) {
      this.setState({
        count: this.state.count + 2
      })
    } else {
      this.setState({
        count: 20
      })
    }
  }

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      })
    } else {
      this.setState({
        count: 0
      })
    }
  }

  decrementByTwo = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 2
      })
    } else {
      this.setState({
        count: 0
      })
    }
  }

  toggleIncDisp = () => {
    if (this.state.increment === 'Double Increments') {
      this.setState({
        increment: 'Single Increments',

      })
    } else {
      this.setState({
        increment: 'Double Increments'
      })
    }
  }

  toggleDecDisp = () => {
    if (this.state.decrement === 'Double Decrements') {
      this.setState({
        decrement: 'Single Decrements',

      })
    } else {
      this.setState({
        decrement: 'Double Decrements'
      })
    }
  }

  toggleInc = () => {
    if (this.state.increment === 'Double Increments') {
      this.setState({
        counter: this.incrementByTwo()
      })
    } else if (this.state.increment === 'Single Increments') {
      this.setState({
        counter: this.increment()
      })
    }
  }

  toggleDec = () => {
    if (this.state.decrement === 'Double Decrements') {
      this.setState({
        counter: this.decrementByTwo() 
      })
    } else if (this.state.decrement === 'Single Decrements') {
      this.setState({
        counter: this.decrement()
      })
    }
  }

  clear = () => {
    this.setState({
      count: 0,
    })
  }

  render() {
    return(
      <div className="container">
          <div className="navbar">Counter</div>
          <div className="counter">
            <h1>{this.state.count}</h1>
            <button type="button" onClick={this.clear}>Clear</button>
            <button type="button" onClick={this.increment}>Increment</button>
            <button type="button" onClick={this.decrement}>Decrement</button>
            <div className="double"> 
              <button type="button" onClick={this.toggleInc} onMouseEnter={this.toggleIncDisp}>{this.state.increment}</button>
              <button type="button" onClick={this.toggleDec} onMouseEnter={this.toggleDecDisp}>{this.state.decrement}</button>
            </div> 
          </div>
        </div>
    )
  }
}

export default Counter;