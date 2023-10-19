import { Component } from "react"

const HOC= (OriginalComponent)=>{
    return class ModifiedComponent extends Component{

   constructor(props) {
     super(props)
   
     this.state = {
        count:0
     }
   }
   
    incrementCounter=(event)=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <div>
                <OriginalComponent count={this.state.count}
                incrementCounter={()=>this.incrementCounter()}>     
                </OriginalComponent>
            </div>
        )
    }
}
}

export default HOC