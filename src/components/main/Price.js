import React, { Component, useState } from 'react';

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


class Main extends Component {
  // const [tokens, setTokens];
  // constructor(){
  //   [tokens, setTokens] = useState(testData);

  //   setData()
    
  // }

  // setData = () =>{
  //   let temp = testData.slice(0)
  //   for(let i of temp){
  //       i.price++;
  //   }
  //   setTimeout(()=>{
  //       setTokens(temp)
  //   }, 10000)
  // }

  render() {
    return (        
      <div >
        <div className='tokenInfo'>
          {/* {tokens[0].symbol} */}
          {/* {tokens[0].price} */}
          BTC 3600
        </div>
        <div className='tokenInfo'>
          {/* {tokens[1].symbol}
          {tokens[1].price} */}
          ETH 360
        </div>
        <div className='tokenInfo'>
          {/* {tokens[2].symbol}
          {tokens[2].price} */}
          BJ 36
        </div>
      </div>
    );
  }
}

export default Main;