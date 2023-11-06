import React, { Component } from 'react'
import {Link,Outlet} from 'react-router-dom'
export class Product extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       items:['dolls','dress','mobile','accesories']
    }
  }
  
  render() {
    const displayItems=this.state.items.map((data)=>
    <Link to={data} >
    <li>{data}</li>
    </Link>
    )
    return (
      <div>
        <h1>WELCOME TO OUR PRODUCT PAGE FEEL FREE TO VIEW NO CHARGES APPLICABLE</h1>
        <ul>{displayItems}</ul>
        <Outlet/>
      </div>
    )
  }
}

export default Product
