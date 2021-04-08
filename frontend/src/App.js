import React, { Component } from 'react';
import passarray from './Testing/SamplePasswordArray';
import ChainPassAbi from './abis/Abis'
import PasswordContainer from './Components/PasswordContainer';


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
            '0x2dCff58453Eda36f9fBe371d566c8c449c901813'
         );       
     }

     init();

   //temporary variables to store info from multiple input fields
   var tpass, tname, tsite;

   //called when a password wants to be added
   const addpassword = (e) => {
      e.preventDefault(); //So the page does not refresh
      if(tsite && tname && tpass){
         passarray.push([tsite, tname, tpass]);//adds the temporary variables set above to the password array
         console.log('added new password');
         updatepasswords();//updates the state of the stored passwords
      }
      else{
         console.log('incomplete information');
         window.alert('You need to fill all fields');
      }
   }

   //functions to continuously update the above temporary variables whenever their respective input field is edited
   const updatepass = (e) =>{
      tpass = e.target.value;
   }
   const updatename = (e) =>{
      tname = e.target.value;
   }
   const updatesite = (e) =>{
      tsite = e.target.value;
   }

   //updates the state of the password state element
   const updatepasswords = (e) =>{
      this.setState(
         (oldState) => ({
            passwords: passarray
         })
      )
      console.log('passwords updated');
   }
   
   //updates the state of the users info (address and username)
   const login = (e) => {
      this.setState(
         (oldState) => ({
            userName: 'Robert',
            userAddress: '0x00',
         })
      )
      updatepasswords(e);
      console.log('logged in');
         
   };

     return(
        <div className = 'app'>

            <h1 id = 'appt-title'>CHAIN PASS</h1>

            <button id = 'login-button' onClick = {login}>Connect Wallet</button>

            <div id = 'info'>
               <p>{this.state.userName}</p>
               <p>{this.state.userAddress}</p>
            </div>

            <div id='password-accessor'>
               <div id = 'addpasswordbox'>
                  <form onSubmit = {null}>
                     <input onChange = {updatename} type="text" placeholder = "Username" className = 'infoinput'/>
               
                     <input onChange = {updatepass} type="text" placeholder = "Password" className = 'infoinput'/>
               
                     <input onChange = {updatesite} type="text" placeholder = "Website" className = 'infoinput'/>
                  </form>

                  <button onClick = {addpassword} id='add-password-button'>Add Password</button>
               </div>

               <PasswordContainer passwordData = {this.state.passwords}/>
            </div>
        </div>
     );
  }
}
export default App;
