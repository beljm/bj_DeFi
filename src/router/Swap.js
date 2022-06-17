import React from "react";
import StockChart from "../components/swap/StockChart";
import Tokenswap from "../components/swap/Tokenswap";
import styled from "styled-components";

const SwapMain = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
`
const SwapChar = styled.div`
  margin-right: 100px;
  padding: 40px;

  border: 1px solid black;
  border-radius: 20px;
`

const SwapToken = styled.div`
  padding: 40px;

  border: 1px solid black;
  border-radius: 20px;
`


function Swap(){

  return(
    <SwapMain>
      <SwapChar>
        <StockChart/>        
      </SwapChar>
      <SwapToken>
        <Tokenswap/> 
      </SwapToken>
    </SwapMain>    
  )
}

export default Swap;

