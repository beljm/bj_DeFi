import './Menu.css';
import React, { Component } from 'react';
import logoURL from '../images/logo.png';

class Menu extends Component {
  render() {
    return (        
      <div >
        <img className='logo' src={logoURL}></img>

        <div>
          <button>Swap</button>
        </div>
        <div>
          <button>Staking</button>
        </div>
        <div>
          <button>Staking</button>
        </div>
        <div>
          <button>Other</button>
        </div>
      </div>
    );
  }
}

export default Menu;