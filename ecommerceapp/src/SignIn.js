import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export class SignIn extends Component {
  constructor(props) {
    super(props)
   this.handleSubmit=this.handleSubmit.bind(this)
   this.input=React.createRef();
   this.state={
    email:'',
    password:'',
    emailError:'',
    passwordError:'',
    // redirectToProduct: false,
   };
  }
  handleSubmit=(event)=>{
    event.preventDefault();

    //validation logic
    let isValid=true;
    const {email,password}=this.state;
    if(!email){
      this.setState({emailError:'Email.is required'});
      isValid=false;
    }else{
      this.setState({emailError:''});
    }
    if(!password){
      this.setState({passwordError:'password is required'});
      isValid=false
    }else{
      this.setState({passwordError:''});
    }
    if(isValid){
    alert('you have successfully submitted')
    // this.setState({redirectToProduct:true})
  }
}
  handleInputChange=(event)=>{
    const {name,value}=event.target;
    this.setState({[name]:value});
  }
  
  render() {
    const {email,password,emailError,passwordError}=this.state
    // if(redirectToProduct){
    //   return <Redirect to='/product'/>
    // }  
    return (
      <form  action='/product' onSubmit= {this.handleSubmit} className='Form'>
        <h3 style={{textAllign:'center',fontStyle:'italic'}}>Welcome to SignIn Page</h3><br/>
        
        <label style={{fontStyle:'italic'}}>Email-ID</label><br/>
        <input type='email' name='email' value={email} className='inputStyle' onChange={this.handleInputChange} /><br/>
        <span className='errorStyle' >{emailError}</span><br/>
  
        <label>Password</label><br/>
        <input type='text' className='inputStyle' name='password' value={password} onChange={this.handleInputChange}/><br/>
        <span className='errorStyle'>{passwordError}</span><br/>
        <input type='submit' value='Submit' className='btn btn-primary'/>
      </form>
     
    )
  }
}

export default SignIn
