import styled from 'styled-components';

const TokenInfo = styled.div`
  width: 300px;
  height: 300px;    

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid rgb(82, 75, 75);
  border-radius: 14px;

  background-color: rgb(60, 49, 49);

  color: white;
  font-weight: 900;
  font-size: 3ch;
`

const TokenLogo = styled.img`
  width: 70px;
  height: 70px;
  margin-left: 0;
`

function PriceWrap({tokens}){
  return (      
    <TokenInfo>
      <TokenLogo className='priceLogo' src={'/'+tokens.symbol+'.png'}/>
      {tokens.symbol}        
      <div>
        price: {tokens.price}$
      </div>     
    </TokenInfo>
  );
}
export default PriceWrap;