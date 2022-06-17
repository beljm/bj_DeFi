import Wallet from '../../Web3/Wallet'
import styled from 'styled-components';

const IntroduceArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
`

const IntroduceTextArea = styled.div`
  margin-left: 300px;
`

const MainText = styled.div`
  color: rgb(137, 20, 201) ;
  font-weight: 1200;
  font-size: 7ch;
  margin-bottom: 10px;
`

const ContentText = styled.div`
  color: white;
  font-weight: 900;
  font-size: 2ch;
  margin-bottom: 5px;
`
const WalletArea = styled.div`
  margin-top: 20px;
`

const ImgArea = styled.img`
  width: 600px;
  height: 600px;
  margin-right: 200px;  
`
function Introduce(){
  return (      
    <IntroduceArea>
      <IntroduceTextArea>       
        <MainText>The moon is made of pancakes.</MainText>
        <ContentText>Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.</ContentText>
        <WalletArea>
          <Wallet></Wallet>
        </WalletArea>        
      </IntroduceTextArea>      
      <ImgArea src={'/Rabbit.webp'}/>            
    </IntroduceArea>
  );
}
export default Introduce;