import React, { Component } from 'react'

export class ControlledSignin extends Component {
 
    constructor(props) {
        super(props)
      
        this.state = {
           value:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
      }

      handleChange(event){
        this.setState({
            value:event.target.value
        })
      }
      
      handleSubmit(event){
        alert('you have successfully submitted:' + this.state.value)
      }
    
    render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <h1>welcome to  controlled SignIn Page</h1>
       <label>Name</label>
       <input type='text' value={this.state.value} onChange={this.handleChange} ></input>
       <input type='submit' value='submit'></input>
     </form>
    )
  }
}

export default ControlledSignin
