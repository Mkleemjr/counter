import React, {Component} from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
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

  clear = () => {
    this.setState ({
      count: 0
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
          </div>
        </div>
    )
  }
}

export default Counter;