import { ethers } from "ethers";
import ABI from './abi.json'
const constract_address = '0x5f81C14a459F86062aF25697e5a40DFde3E048AC'
// const constract_address = '0xDb7A9f6d8139FdFB94c83DD50da12B699dE9f58e'
// const tokenArray = [{symbol:"BJ", contract: "0x1bC33DC909A57B1214BcA3fbc2A4b7034811d982"}, {symbol:"TS", contract: "0xf75f1932ee4e5363aec3eeee6b0f671596f32d6d"}]
// const E18 = 10000000;

const connectWallet = async () => {
    if(window.ethereum){
        try{
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'})
          alert('지갑 연결 성공!');
          return accounts[0];
        }catch(err){
          alert(err.code);
        }
    }
    else{
        alert("Please install metamask!");
        return false;
    }
  }
  const swapConstract = async (_amount1, _amount2) => {
    try{
        const provider = await new ethers.providers.Web3Provider(window.ethereum);     
        const signer = await provider.getSigner();
        let contract = await new ethers.Contract(constract_address, ABI, signer, provider);
        // let sContract = await contract.connect(signer);
        return contract.swap(_amount1, _amount2);
    }
    catch(err){
        alert(err);
    }


// const checkSymbol = (_symbol) =>{
//     for(let i of tokenArray){
//         if(_symbol === i.symbol){
//             return i.contract;
//         }
//     }
//     return null;
// }

//   const swapConstract = async (_symbol1, _amount1, _symbol2, _amount2) => {
    
//     try{        
//         let address1 = checkSymbol(_symbol1);
//         let address2 = checkSymbol(_symbol2);
//         const provider = await new ethers.providers.Web3Provider(window.ethereum);     
//         const signer = await provider.getSigner();
//         let contract = await new ethers.Contract(constract_address, ABI, signer, provider)
//         // let sContract = await contract.connect(signer);
//         console.log(_symbol1, address1, _amount1*E18)
//         console.log(_symbol2, address2, _amount2*E18)
//         return contract.swap(address1, _amount1*E18, address2, _amount2*E18);
//     }
//     catch(err){
//         alert(err);
//     }
    

}

export {connectWallet, swapConstract};