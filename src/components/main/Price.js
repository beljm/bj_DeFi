import { useState, useEffect } from 'react';
import PriceWrap from './PriceWrap';
import tokenPriceDT from './tokenPrice.json';
import styled from 'styled-components';

let testData = tokenPriceDT

const PriceArea = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  background-color: rgba(34, 33, 33, 0.067);
`

const PriceTextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const PriceMainTextArea = styled.div`
  margin-bottom: 5px;

  color: white;
  font-weight: 900;
  font-size: 5ch;  
  text-align: center;
`

const PriceSubTextArea = styled.div`
  margin-bottom: 10px;

  color: rgb(226, 174, 218);
  font-weight: 350;
  font-size: 1.7ch;
  text-align: center;  
`

const PriceLastTextArea = styled.div`
  margin-top: 10px;

  color: rgb(226, 174, 218);
  font-weight: 300;
  font-size: 1.4ch;  
`

const PriceDataArea = styled.div`
  display: flex;
  gap: 30px;

  margin-top: 50px;
`

function Price(){
  const [tokens, setTokens] = useState(testData);

  const setData = () =>{
    let temp = testData.slice(0)
    for(let i of temp){
        i.price++;
    }
    setTimeout(()=>{
        setTokens(temp)
    }, 10000)
  }

  //코인 가격 변동하는척
  // useEffect(()=>{
  //   console.log('ddd')
  //   setData()
  // },[tokens])  
  
  return (        
    <PriceArea>
      <PriceTextArea>
        <PriceMainTextArea>
          <div>Used by millions.</div>
          <div>Trusted with billions.</div>
        </PriceMainTextArea>  
        <PriceSubTextArea>        
          <div>PancakeSwap has the most users of any decentralized platform, ever.</div>
          <div>And those users are now entrusting the platform with over $4.5 billion in funds.</div>
        </PriceSubTextArea>
        <PriceLastTextArea>
          Will you join them?
        </PriceLastTextArea>
      </PriceTextArea>
      <PriceDataArea>
        <PriceWrap tokens={tokens[0]}></PriceWrap>
        <PriceWrap tokens={tokens[1]}></PriceWrap>
        <PriceWrap tokens={tokens[2]}></PriceWrap>
      </PriceDataArea>
    </PriceArea>
  );
}

export default Price;