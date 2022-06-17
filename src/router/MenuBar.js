import Menu from '../components/menu/Menu';
import MenuOption from '../components/menu/MenuOption';
import styled from "styled-components";

const MenuContainer = styled.div`
  display: flex;
  align-items: center;

  background-color: #232227;
  border-bottom: 1px solid #363536;
`
const MenuItem = styled.div`
  flex-grow: 1;
`

function MenuBar() {
  return (        
    <MenuContainer>
      <MenuItem>
        <Menu/>
      </MenuItem>
      <MenuItem>
        <MenuOption/>
      </MenuItem>
    </MenuContainer>
  );
}

export default MenuBar;