import React, { useState, useEffect } from 'react';
import './Price.css';
import btcSymbol from '../../images/btc.png'
import ethSymbol from '../../images/eth.png'
import mySymbol from '../../images/bj.png'

let testData = [
  {
      symbol:"BTC",
      price:3600,
  },
  {
      symbol:"ETH",
      price:360,
  },
  {
      symbol:"BJ",
      price:36,
  }
]


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
    <div className='priceMain'>
      <div className='priceTextInfo'>
        <div className='priceMainTxt'>
          Used by millions.
        </div>
        <div className='priceMainTxt'>
          Trusted with billions.
        </div>
        <div className='priceSubTxt'>        
          PancakeSwap has the most users of any decentralized platform, ever.
        </div>
        <div className='priceSubTxt'>
          And those users are now entrusting the platform with over $4.5 billion in funds.
        </div>
        <div className='priceLastTxt'>
           Will you join them?
        </div>
      </div>
      <div className='priceInfo'>
        <div className='priceTokenInfo'>
          <img className='priceLogo' src={btcSymbol}></img>
          {tokens[0].symbol}        
          <div className='currentPrice'>
            price: {tokens[0].price}$
          </div>     
        </div>
        <div className='priceTokenInfo'>
        <img className='priceLogo' src={ethSymbol}></img>
          {tokens[1].symbol}
          <div className='currentPrice'>
            price: {tokens[1].price}$
          </div>
        </div>
        <div className='priceTokenInfo'>
        <img className='priceLogo' src={mySymbol}></img>
          {tokens[2].symbol}
          <div className='currentPrice'>
            price: {tokens[2].price}$
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Price;