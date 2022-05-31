import React from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./connectors";

function Wallet(){
  
  const {chainId, account, active, activate, deactivate} = useWeb3React();


  const handleConnect = () => {
    if(active){
      deactivate();
      return;
    }
    console.log(injected);
    activate(injected, (error) => {
      alert(error);
      if('/No Ethereum provider was found on window.ethereum/' === error){
        alert('extention을 설치해주세요');
        window.open('https://metamask.io/download.html');    
      }        
    })
  }

  return(
    <div>
      <div>
        <button type="button" onClick={handleConnect}>{active ? account : 'Connect Wallet'}</button>
      </div>
      <div>
        <p>account: {account}</p>
        <p>chainId: {chainId}</p>
      </div>
    </div>
  )
}

export default Wallet;