import { Route, Routes } from "react-router-dom";

import MenuBar from './router/MenuBar';
import Home from './router/Home';
import Swap from './router/Swap';
import Footer from './components/main/Footer';

import styled from 'styled-components';

const All = styled.div`
  display: flex;
  flex-direction: column;

`
const Top = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: black;
`

const Mid = styled.div`

`

const Bottom = styled.div`
  width: 100%;

  background-color: black;
`


function App(props){
  return (    
    <All>
      <Top>
        <MenuBar/>
      </Top>
      <Mid>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/swap' element={<Swap/>}/>
          <Route path='/staking' element={<div>staking</div>}/>
          <Route path='/nft' element={<div>nft</div>}/>
          <Route path='/other' element={<div>other</div>}/>
        </Routes>
      </Mid>
      <Bottom>
        <Footer/>
      </Bottom>
    </All>
  );
}

export default App;
