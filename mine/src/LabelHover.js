import React, { Component } from 'react'
import HOC from './HOCDemo'

export class LabelHover extends Component {
  render() {
    return (
      <div>
        labelhover Count:{this.props.count}<br/>
        <label onMouseOver={this.props.incrementCounter}></label>
      </div>
    )
  }
}

export default HOC(LabelHover)
