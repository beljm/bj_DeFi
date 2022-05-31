import React from "react";
import ChooseToken from "./ChooseToken";

function Tokenswap(){

  return(
    <div>
      <div>
        <ChooseToken></ChooseToken>
      </div>
      <button>ChangeButton</button>
      <div>
        <ChooseToken></ChooseToken>
      </div>
      slippage 2%
    </div>
  )
}

export default Tokenswap;