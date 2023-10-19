import React, { Component } from 'react'

export class Register extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      userName:'Habibunnisha'
   }
}
    changeName(){
        this.setState({
            userName:'Christy'
        })
    }
 
 
    render() {
    return (
      <div>username is {this.state.userName}
      <button  onClick={()=>this.changeName()}>changeName</button>
      </div>
    )
  }

}

export default Register
