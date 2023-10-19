import React, { Component } from 'react'

export class IncrementCounter extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      count:0
   }
 }
 incrementCounter(event){
    this.setState({
        count:this.state.count+1
    })
 }
 
    render() {
    return (
      <div>
        IncrementCounter {this.state.count}<button onClick={(event)=>this. incrementCounter(event)}>Increment</button>
      </div>
    )
  }
}

export default IncrementCounter
