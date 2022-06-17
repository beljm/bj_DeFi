import styled from "styled-components";
import { useState } from "react";
import {connectWallet} from './walletUtil';

const Button = styled.button`
  width: 160px;
  height: 35px;
  background-color:darkturquoise;
    
  border-radius: 17px;
  border-color: transparent;

  color: white;
  font-weight: 800;
  font-size: 1.5ch;  
`

const WalletArea = styled.div`
  margin: 15px; 
`

function Wallet(){

  const [address, setAddress] = useState(false);

  const walletconnect = async() =>{
    connectWallet()
    .then((res)=>{
      console.log('addrss:', res);
      setAddress(res);
    })
  }

  return(
    <WalletArea>
     <Button onClick={walletconnect}>{address ? address.slice(0,6)+'...'+address.slice(address.length-5, address.length) : "ConnectWallet"}</Button>
    </WalletArea>
  )
}

export default Wallet;