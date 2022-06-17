import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Lbutton = styled.button`
  width: auto;
  height: 50px;
  margin: 2px;

  background-color: transparent;
  border: 0;
  border-radius: 14px;

  color: rgb(194, 139, 194) ;
  font-weight: 900;
  font-size: 1.8ch;

  :hover{
    background-color: #473939;
  }
  >a{
    text-decoration: none;
    color: inherit;
  }
`

const Img = styled.img`
  width: 180px;
  height: 38px;
  margin: 5px;
  margin-left: 0;
`

const Logo = styled.button`
  background-color: transparent;
  border: 0;
`
const Div = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  
`

function Menu(){
  return (        
    <Div>
      <Logo>          
        <Link to='/'><Img src={'/Logo.png'}/></Link>
      </Logo>    
      <Lbutton>
        <Link to='/swap'>Swap</Link>
      </Lbutton>
      <Lbutton>
        <Link to='/staking'>Staking</Link>
      </Lbutton>          
      <Lbutton>
        <Link to='/nft'>NFT</Link>
      </Lbutton> 
      <Lbutton>
        <Link to='/other'>Other</Link>
      </Lbutton> 
    </Div>
  );
}

export default Menu;