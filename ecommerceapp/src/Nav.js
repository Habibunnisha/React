import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Navbar} from 'react-bootstrap'
import './Style.css'
export class Nav extends Component {
  render() {
    return (
        
      <div>
        <div className='row'>
          <div className='col-md-12'>
            <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
              <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                  <Navbar.Collapse id='basic-navbar-nav'/>
                  <nav>
                    <ul>
                      <Link to='home' className='linkStyle'>HomePage </Link>
                      <Link to='product' className='linkStyle'>ProductPage</Link>
                      <Link to='product-detail' className='linkStyle'>ProductDetail</Link>
                      <Link to='complaint' className='linkStyle'>Complaint</Link>
                      <Link to='galleryPage' className='linkStyle'>GalleryPage</Link>
                      <Link to='signIn' className='linkStyle'>SignIn</Link>
                      </ul>
                  </nav>             
             </Navbar>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav
