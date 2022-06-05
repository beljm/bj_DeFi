import "./MenuOption.css";
import React from 'react';
import Wallet from '../Web3/Wallet';


function MenuOption() {
  return (        
    <div className='oContainer' >
      <div className="oItem">
        <button className="oBtn">token</button>
      </div>
      <div className="oItem">
        <button className="oBtn">languege</button>
      </div>
      <div className="oItem">
        <button className="oBtn">option</button>
      </div>
      <div className="oItem walletBtn">
        <Wallet/>
      </div>
    </div>
  );
}

export default MenuOption;