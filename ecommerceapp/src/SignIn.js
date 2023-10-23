import React, { Component } from 'react'

export class SignIn extends Component {
  constructor(props) {
    super(props)
   this.handleSubmit=this.handleSubmit.bind(this)
   this.input=React.createRef();
   this.state={
    email:'',
    password:'',
    emailError:'',
    passwordError:''
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
  }
}
  handleInputChange=(event)=>{
    const {name,value}=event.target;
    this.setState({[name]:value});
  }
  
  render() {
    const {email,password,emailError,passwordError}=this.state
    
    const inputStyle={
      width:'60%',
      padding:'10px',
      margin:'5px 0',
      border:'2px solid black',
      borderRadius:'3px'
    }
    const errorStyle={
      color:'red',
      fontSize:'20px'
    }
    const Form={
      border:'2px solid black',
      width:'40vw',
      marginTop:'50px',
      textAllign:'center',
      padding:'20px',
      marginLeft:'30%',
      borderRadius:'15px 10px 20px'
    }
 
    return (
      <form onSubmit= {this.handleSubmit} style={Form}>
        <h3 style={{textAllign:'center',fontStyle:'italic'}}>Welcome to SignIn Page</h3><br/>
        <label style={{fontStyle:'italic'}}>Email-ID</label><br/>
        <input type='email' name='email' value={email} style={inputStyle} onChange={this.handleInputChange} /><br/>
        <span className='error' style={errorStyle}>{emailError}</span><br/>
  
        <label>Password</label><br/>
        <input type='text' style={inputStyle} name='password' value={password} onChange={this.handleInputChange}/><br/>
        <span className='password' style={errorStyle}>{passwordError}</span><br/>
        <input type='submit' value='Submit' className='btn btn-primary'/>
      </form>
     
    )
  }
}

export default SignIn
