import React from 'react';
import Wallet from '../Web3/Wallet';

function MenuOption() {
  return (        
    <div >
      <div>
        <button>token</button>
      </div>
      <div>
        <button>languege</button>
      </div>
      <div>
        <button>option</button>
      </div>
      <div>
        <Wallet/>
      </div>
    </div>
  );
}

export default MenuOption;