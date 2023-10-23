import React, { Component } from 'react'

export class ConditionalRender extends Component {
  render() {
    let val=2;
    let myLayout=null

    if(val==1){
        myLayout=<div style={{color:'red',height:'50px'}}><h1>mylayout1</h1></div>
    }else{
        myLayout=<div style={{color:'green',height:'100px'}}><h1>mylayout2</h1></div>

    }
    return (
      <div>
        CondidtionalRender
        {myLayout}
      </div>
    )
  }
}

export default ConditionalRender
