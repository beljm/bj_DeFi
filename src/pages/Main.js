import React, { Component } from 'react';
import Advertising from '../components/main/Advertising';
import Introduce from '../components/main/Introduce';
import Price from '../components/main/Price';

class Main extends Component {
  render() {
    return (        
      <div >
        <div>
          <Advertising />
        </div>
        <div>
          <Introduce/>
        </div>
        <div>
          <Price/>
        </div>
      </div>
    );
  }
}

export default Main;