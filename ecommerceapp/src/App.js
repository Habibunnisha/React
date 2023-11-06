import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Product from './Product'
import SignIn from './SignIn'
import Complaint from './Complaint'
import GalleryPage from './GalleryPage'
import ProductDetail from './ProductDetail'
import Nav from './Nav'
import Dolls from './Dolls'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ProductList from './ProductList';
import HookCounter from './HookCounter';
import PageNotFound from './PageNotFound';
// import AuthorPage from './AuthorPage';
// import ControlledSignin from './ControlledSignin';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Nav/>
            <Routes>

              <Route path='home' element={<Home/>}/>
              <Route path='product' element={<Product/>}>
                <Route path='dolls' element={<Dolls/>}/>
              </Route>
              <Route path='product-detail' element={<ProductList/>}/>
              <Route path='complaint' element={<HookCounter/>}/>
              <Route path='galleryPage' element={<GalleryPage/>}/>
              <Route path='signIn' element={<SignIn/>}/>
             <Route path='*' element={<PageNotFound/>}/>
            </Routes>
      </BrowserRouter>
      {/* <AuthorPage/> */}
    </div>
  );
}

export default App;
