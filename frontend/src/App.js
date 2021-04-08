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
	
      // //adding blockchain interaction
      // const Web3 = require('web3');
      // const init = async () => {
      //    const web3 = new Web3('http://localhost:7545');
      //    const contract = new web3.eth.Contract(
      //       ChainPassAbi, 
      //       '0x2dCff58453Eda36f9fBe371d566c8c449c901813'
      //    );       
      // }

      // init();

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
            passarray.push([site, name, pass]);//adds the temporary variables set above to the password array
            console.log('added new password');
            updatePasswords();//updates the state of the stored passwords
         }
         else{
            console.log('incomplete information');
            window.alert('You need to fill all fields');
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
               <AddPassword addNewPassword = {this.addNewPassword}/>
               <PasswordContainer passwordData = {this.state.passwords}/>
            </div>
         </div>
      );
   }
}
export default App;
