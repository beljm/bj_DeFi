import React from "react";
import StockChart from "../components/swap/StockChart";
import Tokenswap from "../components/swap/Tokenswap";
import Wallet from "../Web3/Wallet";

function Swap(){

  return(
    <div>
      <div>
        <StockChart/>        
      </div>
      <div>
        <Tokenswap/>        
      </div>
        <Wallet></Wallet>
    </div>
  )
}

export default Swap;