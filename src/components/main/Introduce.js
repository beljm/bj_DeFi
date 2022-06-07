import React from 'react';
import './introduce.css';
import img from '../../images/image.webp';

function Introduce(){
  return (      
    <div className='intro'>
      <div className='introTxt'>       
        <div className='mainTxt'>
          The moon is made of pancakes.
        </div>      
        <div className='contentTxt'>
          Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.
        </div>
        <div className='myTxt'>
          This page is practice Project made by jimin Lee
        </div>              
      </div>
      <div>
        <img className='introImg' src={img}></img>
      </div>         
    </div>
  );
}
export default Introduce;