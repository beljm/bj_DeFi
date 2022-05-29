import './Menu.css';
import React, { Component } from 'react';
import logoURL from '../images/logo.png';
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (        
      <div >
        <button>          
          <Link to='/'><img className='logo' src={logoURL}></img></Link>
        </button>
        <div>
          <button>
            <Link to='/swap'>Swap</Link>
          </button>
        </div>
        <div>
          <button>
            <Link to='/staking'>Staking</Link>
          </button>          
        </div>
        <div>
          <button>
            <Link to='/nft'>NFT</Link>
          </button> 
        </div>
        <div>
          <button>
            <Link to='/other'>Other</Link>
          </button> 
        </div>
      </div>
    );
  }
}

export default Menu;