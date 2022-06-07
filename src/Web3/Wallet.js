import "./Wallet.css";
import React from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./connectors";


function Wallet(){
  const {chainId, account, active, activate, deactivate} = useWeb3React();
  const accountLen = 0;

  const handleConnect = () => {     
    if(active){
      deactivate();
      return;
    }
    
    activate(injected, (error) => {
      alert(error);
      if('/No Ethereum provider was found on window.ethereum/' === error){
        alert('extention을 설치해주세요');
        window.open('https://metamask.io/download.html');    
      }        
    })
    accountLen = account.slice(0);
  }

  return(
    <div>
      <div>
        <button className='connectBtn' onClick={handleConnect}>{active ? account.slice(0,7)+"..."+account.slice(accountLen-5, accountLen-1) : 'Connect Wallet'}</button>
      </div>      
    </div>
  )
}

export default Wallet;