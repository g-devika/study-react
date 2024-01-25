import React from "react";
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import About from "./Component/About"; 
import Contact from "./Component/Contact";
import Work from "./Component/Work";
import Footer from "./Component/Footer";
import Food from "./Component/Food";
import Cart from "./Component/Cart"



function App(){

return(
    <div className="App">
     <Navbar />
   <Routes>
    <Route path='home' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
    <Route path='work' element={<Work />} />
    <Route path='food' element={<Food />}/>
    <Route path='cart' element={<Cart />}/>
   </Routes>
  <Footer />
       
    </div>
  )
}
export default App