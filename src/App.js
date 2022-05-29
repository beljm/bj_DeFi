import './App.css';
import { Component } from 'react';

import MenuBar from './pages/MenuBar';
import Main from './pages/Main';


class App extends Component{
  render() {
    return (
      <div >
        <div>          
          <MenuBar></MenuBar>          
        </div>
        <div>
          <Main></Main>
        </div>
      </div>      
    );
  }
}

export default App;
