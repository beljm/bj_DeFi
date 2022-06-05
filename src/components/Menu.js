import './Menu.css';
import React from 'react';
import logoURL from '../images/panLogo.png';
import { Link } from "react-router-dom";

function Menu(){
  return (        
    <div className='lContainer'>
      <div>
        <button className='logoBtn'>          
          <Link to='/'><img className='logo' src={logoURL}></img></Link>
        </button>
      </div>      
      <div className='lItem'>
        <button className='listBtn'>
          <Link to='/swap'>Swap</Link>
        </button>
      </div>
      <div className='lItem'>
        <button className='listBtn'>
          <Link to='/staking'>Staking</Link>
        </button>          
      </div>
      <div className='lItem'>
        <button className='listBtn'>
          <Link to='/nft'>NFT</Link>
        </button> 
      </div>
      <div className='lItem'>
        <button className='listBtn'>
          <Link to='/other'>Other</Link>
        </button> 
      </div>
    </div>
  );
}

export default Menu;