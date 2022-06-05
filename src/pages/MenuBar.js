import "./MenuBar.css";
import React from 'react';
import Menu from '../components/Menu';
import MenuOption from '../components/MenuOption';


function MenuBar() {
  return (        
    <div className='container'>
      <div className="item">
        <Menu></Menu>
      </div>
      <div className="item">
        <MenuOption></MenuOption>
      </div>
    </div>
  );
}

export default MenuBar;