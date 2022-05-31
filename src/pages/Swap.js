import React from "react";
import Graph from "../components/swap/Graph";
import Tokenswap from "../components/swap/Tokenswap";
import Wallet from "../Web3/Wallet";

function Swap(){

  return(
    <div>
      <div>
        <Graph/>        
      </div>
      <div>
        <Tokenswap/>        
      </div>
        <Wallet></Wallet>
    </div>
  )
}

export default Swap;