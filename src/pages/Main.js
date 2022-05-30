import React, { Component } from 'react';
import Advertising from '../components/main/Advertising';
import Introduce from '../components/main/Introduce';

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
        <div>정보</div>
      </div>
    );
  }
}

export default Main;