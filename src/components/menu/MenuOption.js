import React from 'react';
import Wallet from '../../Web3/Wallet';
import styled from "styled-components";
import {RiGlobalLine} from 'react-icons/ri'
import {BsFillGearFill} from 'react-icons/bs'

const OptionArea = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`

const OtionButton = styled.button`
  display: flex;
  align-items:center;

  margin: 5px;
     
  background-color: transparent;
  border: 0;
  border-radius: 14px;
     
  color: rgb(194, 139, 194) ;
  font-size: 2.5ch;
  text-decoration: none;
`

function MenuOption() {
  return (        
    <OptionArea>
      {/* <button className="oBtn">token</button> */}
      <OtionButton><RiGlobalLine/></OtionButton>
      <OtionButton><BsFillGearFill/></OtionButton>
      <Wallet/>
    </OptionArea>
  );
}

export default MenuOption;