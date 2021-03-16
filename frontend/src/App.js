import React, { Component } from 'react';
import Info from './Components/Info';
import Passwords from './Components/Passwords';


import samplepasswords from './BlockchainInteraction/SamplePasswordArray';

import Web3 from 'web3';
import ChainPassAbi from './BlockchainInteraction/Abis'

//const web3 = new Web3(Web3.givenProvider);
const userAddress = '0x253369315988f486447be4CD4f49A51Be066A12F';
const userName = 'Robert';
   
class App extends Component{
  render(){
     return(
        <div id = 'app'>
           <Info name = {userName} address = {userAddress}/>
           <Passwords passarray = {samplepasswords}/>
        </div>
     );
  }
}
export default App;
