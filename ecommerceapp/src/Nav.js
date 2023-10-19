import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Nav extends Component {
  render() {
    const linkStyle = {
        marginRight: '10px',
        textDecoration: 'none', 
        color: 'blue', 
      };

    return (
        
      <div>
        <nav>
            <Link to='home' style={linkStyle}>HomePage </Link>
            <Link to='product' style={linkStyle}>ProductPage</Link>
            <Link to='product-detail' style={linkStyle}>ProductDetail</Link>
            <Link to='complaint' style={linkStyle}>Complaint</Link>
            <Link to='galleryPage' style={linkStyle}>GalleryPage</Link>
            <Link to='signIn' style={linkStyle}>SignIn</Link>
        </nav>
      </div>
    )
  }
}

export default Nav
