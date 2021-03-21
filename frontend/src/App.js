import React, { Component } from 'react';
import Info from './Components/Info';
import Passwords from './Components/Passwords';
import AddPassword from './Components/AddPassword'
import samplepasswords from './BlockchainInteraction/SamplePasswordArray';
import Web3 from 'web3';
import ChainPassAbi from './BlockchainInteraction/Abis'


const userAddress = '0x31F13dF8477f9D9a35e3A4b8260a4F2698CfdFcf';
const userName = 'Robert';
   
class App extends Component{
   
  render(){
     return(
        <div className = 'app'>
           <h1 id = 'appt-title'>CHAIN PASS</h1>
           <button id = 'login-button'>Connect Wallet</button>
           <Info name = {userName} address = {userAddress}/>
           <Passwords storedpasswords = {samplepasswords}/>
           <AddPassword />
        </div>
     );
  }
}
export default App;
