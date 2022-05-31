import React, { useState, useEffect } from 'react';

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

  // 코인 가격 변동하는척
  // useEffect(()=>{
  //   console.log('ddd')
  //   setData()
  // },[tokens])
  
  
  return (        
    <div >
      <div className='tokenInfo'>
        {tokens[0].symbol}        
        {tokens[0].price}        
      </div>
      <div className='tokenInfo'>
        {tokens[1].symbol}
        {tokens[1].price}
      </div>
      <div className='tokenInfo'>
        {tokens[2].symbol}
        {tokens[2].price}
      </div>
    </div>
  );
}

export default Price;