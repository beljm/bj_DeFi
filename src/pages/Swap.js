import React from "react";
import Graph from "../components/swap/Graph";
import Tokenswap from "../components/swap/Tokenswap";

function Swap(){

  return(
    <div>
      <div>
        <Graph/>        
      </div>
      <div>
        <Tokenswap/>        
      </div>
    </div>
  )
}

export default Swap;