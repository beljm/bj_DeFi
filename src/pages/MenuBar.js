import React from 'react';
import Menu from '../components/Menu';
import MenuOption from '../components/MenuOption';

function MenuBar() {
  return (        
    <div >
      <div>
        <Menu></Menu>
      </div>
      <div>
        <MenuOption></MenuOption>
      </div>
    </div>
  );
}

export default MenuBar;