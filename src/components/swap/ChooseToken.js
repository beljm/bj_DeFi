import styled from "styled-components";

const Img = styled.img`
    width: 20px;
    height: 20px;
`
const Div = styled.div`
    display: flex;
    align-items: center;
`

const Input = styled.input`
    text-align: right;
`

const TokenDiv = styled.div`
    margin-bottom : 10px;
    margin-top : 10px;
`

function Choosetoken({tokenData, setTokenData}){

    const tokenAmount = (e)=>{
        console.log(tokenData);
        console.log(tokenData.tokenLogo);
        setTokenData({tokenLogo: tokenData.tokenLogo, tokenSymbol: tokenData.tokenSymbol, tokenAmount: e.target.value});        
    }

    return(
        <TokenDiv>
            <Div><Img src={tokenData.tokenLogo}/>{tokenData.tokenSymbol}</Div>
            <Input onChange={tokenAmount} type='text' placeholder="0.0" value={tokenData.tokenAmount}/>   
        </TokenDiv>
    )
}

export default Choosetoken;