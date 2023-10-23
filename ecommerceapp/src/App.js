import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Product from './Product'
import SignIn from './SignIn'
import Complaint from './Complaint'
import GalleryPage from './GalleryPage'
import ProductDetail from './ProductDetail'
import Nav from './Nav'

import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import ControlledSignin from './ControlledSignin';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Nav/>
            <Routes>

              <Route path='home' element={<Home/>}></Route>
              <Route path='product' element={<Product/>}></Route>
              <Route path='product-detail' element={<ProductDetail/>}></Route>
              <Route path='complaint' element={<Complaint/>}></Route>
              <Route path='galleryPage' element={<GalleryPage/>}></Route>
              <Route path='signIn' element={<SignIn/>}></Route>
             
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
