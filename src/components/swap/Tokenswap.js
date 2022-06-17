import {useState} from "react";
import ChooseToken from "./ChooseToken";
import styled from "styled-components";
import {swapConstract} from '../../Web3/walletUtil';

const E18 = 100000000000000;

const Div = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 30px;
`

const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: 0px;
  align-self: center;
`

const Img = styled.img`
  width: 40px;
  height: 30px;

  align-self: center;
`

function Tokenswap(){

  const [token1Data, setToken1Data] = useState({tokenLogo: '/TS.png', tokenSymbol: 'TS', tokenAmount: 0});
  const [token2Data, setToken2Data] = useState({tokenLogo: '/BJ.png', tokenSymbol: 'BJ', tokenAmount: 0});

  

  const tokenChange = () =>{
    const temp = token1Data;
    setToken1Data(token2Data);
    setToken2Data(temp);
  }

  const swapToken = () =>{
    swapConstract(1*E18, 1*E18);
  }

  // const swapToken = () =>{
  //   swapConstract(token1Data.tokenSymbol, token1Data.tokenAmount, token2Data.tokenSymbol, token2Data.tokenAmount);
  // }

  return(
    <Div>
      <ChooseToken tokenData={token1Data} setTokenData={setToken1Data}/>
      <Button onClick={tokenChange}><Img src='/arrow.png'/></Button>
      <ChooseToken tokenData={token2Data} setTokenData={setToken2Data}/>
      slippage ?%
      <button onClick={swapToken}>swap</button>
    </Div>
  )
}

export default Tokenswap;