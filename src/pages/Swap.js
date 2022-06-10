import React from "react";
import StockChart from "../components/swap/StockChart";
import Tokenswap from "../components/swap/Tokenswap";
import Wallet from "../Web3/Wallet";
import './Swap.css';

function Swap(){

  return(
    <div className="swapMain">
      <div className="swapChar">
        <StockChart/>        
      </div>
      <div className="swapToken">
        <div>
          <Tokenswap/>        
        </div>
        <div>
          <Wallet></Wallet>
        </div>          
      </div>      
    </div>
  )
}

export default Swap;