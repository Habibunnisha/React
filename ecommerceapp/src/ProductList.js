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
    axios.get("http://localhost:3000/products").then((response)=>
    this.setState({
        products:response.data
    })
    ).catch((error)=>{
        console.log('unable to fetch data',error)
    })
  }
  deleteAllProduct(productId){
    axios.delete(`http://localhost:3000/products/${productId}`).then((response)=>{
      this.setState((prevState)=>({
        products:prevState.products.filter((product)=>product.id !==productId)
      }));
  }).catch((error)=>{
    console.log('unable to delete product',error)
  })
}
  
  
    render() {
        const product=this.state.products.map((product)=>{
            return(
              <tr >
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
              </tr>
            )
        })
    return (
      <div>
      <h3>Product</h3>
      <table>
        <thead>
          <td>Product Id</td>
          <td>Product Title</td>
          <td>Product Price</td>
        </thead>
        <tbody>
          {product}
        </tbody>
      </table>
      <button onClick={()=>this.getAllProduct()}>Dispaly Products</button>
      <button onClick={()=>this.deleteAllProduct(product.id)}>Delete Product</button>
     </div>
    )
  }
}

export default ProductList
