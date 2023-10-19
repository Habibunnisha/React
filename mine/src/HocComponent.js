import React, { Component } from 'react'

export class HocComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  increment=()=>{
    this.setState({
        count:this.state.count+1
    })
  }
  
    render() {
    return (
      <div>
        HocComponent 
        <label onMouseOver={this.increment}>Count: {this.state.count}</label>
      
      </div>
    )
  }
}

export default HocComponent
