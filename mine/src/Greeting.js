import {Component} from 'react'
class Greeting  extends Component {
    
    constructor(props) {
      super(props)
    this.state={
        name:'stardust'
    }
    }
    changeName(event){
        this.setState({
            name:event.target.value
        })
    }
    resetName() {
        this.setState({
          name: '',
        });
      }
    
    render() { 
        return (
            <div>
                enter your name:<input text='text' name='username' onChange={(event)=>this.changeName(event)}/>
                <button onClick={() => this.resetName()}>Reset</button>
                 <h1>hello gd evening {this.state.name}</h1> ;
   
            </div>
        )
            }
}
 
export default Greeting ;