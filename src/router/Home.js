import Advertising from '../components/main/Advertising';
import Introduce from '../components/main/Introduce';
import Price from '../components/main/Price';
import styled from "styled-components";

const HomeArea = styled.div`
  padding-top: 100px;
  background-color: #2c1f3e;  
`

const HomeBennarArea = styled.div`

`

const HomeContentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


function Home() {
  return (        
    <HomeArea>
      <HomeBennarArea>
        {/* <Advertising /> */}
        <div>베너</div>
      </HomeBennarArea>
      <HomeContentArea>
        <Introduce/>
        <Price/>    
      </HomeContentArea>      
    </HomeArea>
  );
}
export default Home;