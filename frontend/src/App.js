import React, { Component } from 'react';
import passArray from './Testing/SamplePasswordArray';
import ChainPassAbi from './abis/Abis'
import PasswordContainer from './Components/PasswordContainer';
import AddPassword from './Components/AddPassword';



class App extends Component{
   //contains the state of the users address, username, and stored passwords
   state = {
      userName: 'username',
      userAddress: 'address',
      passwords: []
   }

   render(){
	
      //adding blockchain interaction
      const Web3 = require('web3');
      const init = async () => {
         const web3 = new Web3('http://localhost:7545');
         const contract = new web3.eth.Contract(
            ChainPassAbi, 
            '0xB7493737E79f819678119febfAd3524281f0560e'
         );     
      }

      init();

      //updates the state of the password state element
      const updatePasswords = (e) =>{
         this.setState({
               passwords: passArray
            }
         )
         console.log('passwords updated');
      }
      
      //updates the state of the users info (address and username)
      const login = (e) => {
         this.setState({
               userName: 'Robert',
               userAddress: '0x00',
            }
         )
         updatePasswords(e);
         console.log('logged in');
            
      };

      //called when a password wants to be added
      const addNewPassword = (site, name, pass) => {
         if(site && name && pass){
            passArray.push([site, name, pass]);//adds the temporary variables set above to the password array
            console.log('added new password');
            updatePasswords();//updates the state of the stored passwords
         }
      }

      return(
         <div className = 'app'>

            <h1 id = 'appt-title'>CHAIN PASS</h1>

            <button id = 'login-button' onClick = {login}>Connect Wallet</button>

            <div id = 'info'>
               <p>{this.state.userName}</p>
               <p>{this.state.userAddress}</p>
            </div>

            <div id='password-accessor'>
               <AddPassword addNewPassword = {addNewPassword}/>
               <p id = 'instructions'>Double click to view info, Click item to copy</p>
               <PasswordContainer passwordData = {this.state.passwords}/>
            </div>
         </div>
      );
   }
}
export default App;
