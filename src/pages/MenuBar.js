import React, { Component } from 'react';
import Menu from '../components/Menu';
import MenuOption from '../components/MenuOption';

class MenuBar extends Component {
  render() {
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
}

export default MenuBar;