import "./Main.css";
import React from 'react';
import Advertising from '../components/main/Advertising';
import Introduce from '../components/main/Introduce';
import Price from '../components/main/Price';

function Main() {
  return (        
    <div className='main'>
      <div className="mainBanner">
        <Advertising />
      </div>
      <div className="mainContent">        
        <div>
            <Introduce/>
        </div>
        <div>
          <Price/>
        </div>        
      </div>
      
    </div>
  );
}
export default Main;