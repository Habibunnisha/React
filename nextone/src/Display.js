import React, { Component } from 'react'

export class Display extends Component {
    constructor(props) {
      super(props)
    
   
    }
    
 
//     render() {
//     return (
//       <div>
//         <h2>DISPLAY {this.props.name}</h2>
//       </div>
//     )
//   }

render(){
    return(
        React.createElement('div',null,React.createElement('h1',null,'Hello world from react createElement'))
    )
}
}

export default Display
