import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Greeting from './Greeting';
import ButtonClick from './ButtonClick';
import Conditional from './Conditional';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home'
import Product from './Product'
import Nav from './Nav'
import ContactUs from './ConatactUs'
import HocComponent from './HocComponent';
import LabelHover from './LabelHover';
import Hook from './Hook'

function App() {
  return (

      <div>
        <Welcome name='habi' id='Aspire10487'>this field is a children</Welcome>
         <Greeting name='rohini'></Greeting>
         {/* <ButtonClick></ButtonClick> */}
         <HocComponent></HocComponent>
         <Conditional></Conditional>
         <Hook/>
       <BrowserRouter >
           <Nav/>
              <Routes>
                <Route path='Home' element={<Home/>}></Route>
                <Route path='Products' element={<LabelHover/>}></Route>
                <Route path='ContactUs' element={<ButtonClick/>}></Route>
              </Routes>
       </BrowserRouter>
      </div>
  );
}


export default App;
