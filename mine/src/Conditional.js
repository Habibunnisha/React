import React, { Component } from 'react'

export class Conditional extends Component {
  render() {
    let value=2
    let layout=null
    if(value==1){
     layout=<div style={{color:'blue',background:'cyan'}}>
     <h1>layout1: value=1</h1>
     </div>
     
    }else{
        layout=<div style={{color:'red',backgroundColor:'black'}}>
        <h1>layout2: value=2</h1>
        </div>
    }
    
    return layout
  }
}

export default Conditional
