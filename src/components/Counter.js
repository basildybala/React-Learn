import React, { Component } from 'react'

export default class Counter extends Component {
    state={
        count:0
    }
    onIncrement=()=>{
        this.setState({
            count:this.state.count +1
             
        })
    }
    onDecrement=()=>{
        this.setState({
            count:this.state.count -1
             
        })
    }
  render() {
    return (
      <div>
          <h1>Counter</h1> 
          <h2>{this.state.count}</h2>
          <button onClick={this.onDecrement}>-</button>
          <button onClick={this.onIncrement}>+</button>

      </div>
      
    )
  }
}



