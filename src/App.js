import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MenuBar from './pages/MenuBar';
import Main from './pages/Main';


class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <div >
          <div>          
            <MenuBar></MenuBar>          
          </div>
          <Routes>
            <Route path='/' element={<Main></Main>}/>
            <Route path='/swap' element={<div>swap</div>}/>
            <Route path='/staking' element={<div>staking</div>}/>
            <Route path='/nft' element={<div>nft</div>}/>
            <Route path='/other' element={<div>other</div>}/>
          </Routes>
        </div>      
      </BrowserRouter>
    );
  }
}

export default App;
