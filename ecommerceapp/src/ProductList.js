import React, { Component } from 'react'
import axios from 'axios'

export class ProductList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       products:[]
    }
  }
  getAllProduct(){
    axios.get("http://localhost:3000/employee").then((response)=>
    this.setState({
        products:response.data
    })
    ).catch((error)=>{
        console.log('unable to fetch data',error)
    })
  }
  
  
    render() {
        const product=this.state.products.map((product)=>{
            
        })
    return (
      <div>
        ProductList

      </div>
    )
  }
}

export default ProductList
