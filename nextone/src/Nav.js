import React, { Component } from 'react'
import Link from 'react'
export class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
            <ul>
                <li>Home</li>
                <li>About us </li>
                <li>Product</li>
                <li>Contact us</li>
            </ul>
        </nav>
      </div>
    )
  }
}

export default Nav
