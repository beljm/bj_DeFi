import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MenuBar from './pages/MenuBar';
import Main from './pages/Main';
import Swap from './pages/Swap';
import Footer from './components/main/Footer';
function App(props){
  return (
    <BrowserRouter>
      <div className='app'>
        <div>          
          <MenuBar/>
        </div>
        <div className='page'>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/swap' element={<Swap/>}/>
            <Route path='/staking' element={<div>staking</div>}/>
            <Route path='/nft' element={<div>nft</div>}/>
            <Route path='/other' element={<div>other</div>}/>
          </Routes>
        </div>          
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
