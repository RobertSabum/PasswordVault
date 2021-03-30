import React, { Component } from 'react';
import Info from './Components/Info';
import Passwords from './Components/Passwords';
import AddPassword from './Components/AddPassword'
import samplepasswords from './BlockchainInteraction/SamplePasswordArray';
import Web3 from 'web3';
import ChainPassAbi from './BlockchainInteraction/Abis'
var userAddress = '';
var userName = '';
const contractaddress = '0xFc3Dc277617A0C54AF3B02da3Ff617975E85C889';
   
class App extends Component{
  

   
  render(){
     return(
        <div className = 'app'>
           <h1 id = 'appt-title'>CHAIN PASS</h1>
           <button id = 'login-button' onClick = {this.loadWeb3}>Connect Wallet</button>
           <Info name = {userName} address = {userAddress}/>
           <Passwords storedpasswords = {samplepasswords}/>
           <AddPassword />
        </div>
     );
  }
}
export default App;
