import React, { Component } from 'react'
import HOC from './HOCDemo'

export class ButtonClick extends Component {
  
    render() {
    return (
      <div>
        <h2>Button click</h2><br/>
        count:{this.props.count}<br/>
        <button onClick={this.props.incrementCounter}>click me</button>
        {/* <button onClick={(event)=>this.incrementCounter(event)}>count:{this.state.count}</button> */}
      </div>
    )
  }
}

export default HOC(ButtonClick)
