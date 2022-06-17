import React from 'react';
import Wallet from '../../Web3/Wallet';
import styled from "styled-components";

const OptionArea = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`

const OtionButton = styled.button`
  width: auto;
  height: 50px;
  margin: 2px;
     
  background-color: transparent;
  border: 0;
  border-radius: 14px;
     
  color: rgb(194, 139, 194) ;
  font-weight: 600;
  font-size: 1.8ch;
  text-decoration: none;
`

function MenuOption() {
  return (        
    <OptionArea>
      {/* <button className="oBtn">token</button> */}
      <OtionButton><i className="fa-solid fa-globe"></i></OtionButton>
      <OtionButton><i className="fa-solid fa-gear"></i></OtionButton>
      <Wallet/>
    </OptionArea>
  );
}

export default MenuOption;