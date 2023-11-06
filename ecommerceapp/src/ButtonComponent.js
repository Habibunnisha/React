import React, { Component } from 'react'

export class ButtonComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  incrementCounter(){
    this.setState({
        count:this.state.count+1
    },()=>{console.log("state value changed")})
  }
  
    render() {
    return (
      <div>
        Visitor Count For Today:{this.state.count}
        <button onClick={()=>this.incrementCounter()}>Increment</button>
      </div>
    )
  }
}

export default ButtonComponent
