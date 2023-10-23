import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Navbar} from 'react-bootstrap'
export class Nav extends Component {
  render() {
    const linkStyle = {
        marginRight: '10px',
        textDecoration: 'none', 
        color: 'blue', 
      };
   

    return (
        
      <div>
        <div className='row'>
          <div className='col-md-12'>
            <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
              <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                  <Navbar.Collapse id='basic-navbar-nav'/>
                  <nav>
                      <Link to='home' style={linkStyle}>HomePage </Link>
                      <Link to='product' style={linkStyle}>ProductPage</Link>
                      <Link to='product-detail' style={linkStyle}>ProductDetail</Link>
                      <Link to='complaint' style={linkStyle}>Complaint</Link>
                      <Link to='galleryPage' style={linkStyle}>GalleryPage</Link>
                      <Link to='signIn' style={linkStyle}>SignIn</Link>
            
                  </nav>             
             </Navbar>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav
