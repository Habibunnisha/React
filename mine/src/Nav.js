import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
            <Link to='Home'><li>Home</li></Link>
            <Link to='Products'><li>Product</li></Link>
            <Link to='Contactus'><li>ContactUs</li></Link>
        </nav>
      </div>
    )
  }
}

export default Nav
