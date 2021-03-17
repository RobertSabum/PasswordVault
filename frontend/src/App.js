import React, { Component } from 'react';
import Info from './Components/Info';
import Passwords from './Components/Passwords';
import samplepasswords from './BlockchainInteraction/SamplePasswordArray';
import Web3 from 'web3';
import ChainPassAbi from './BlockchainInteraction/Abis'



const userAddress = '0x31F13dF8477f9D9a35e3A4b8260a4F2698CfdFcf';
const userName = 'Robert';
   
class App extends Component{
  render(){
     return(
        <div className = 'app'>
           <h1 style = {{fontSize: '38px', letterSpacing: '15px'}}>CHAIN PASS</h1>
           <button id = 'loginbutton'>Connect Wallet</button>
           <Info name = {userName} address = {userAddress}/>
           <Passwords passarray = {samplepasswords}/>
        </div>
     );
  }
}
export default App;
