import React, { Component } from 'react';
import Password from './Components/Password';
import passarray from './BlockchainInteraction/SamplePasswordArray';
import Web3 from 'web3';
import ChainPassAbi from './BlockchainInteraction/Abis'
const contractaddress = '0xFc3Dc277617A0C54AF3B02da3Ff617975E85C889';
   
class App extends Component{
   //contains the state of the users address, username, and stored passwords
   state = {
      userName: 'username',
      userAddress: 'address',
      passwords: []
   }

  render(){

   //maps a password from the password array to an array of password components
   const _passwords = this.state.passwords.map((p, i) =>
         p[0] && <Password key={i} website={p[0]} username={p[1]} password={p[2]} />
      );

   //temporary variables to store info from multiple input fields
   var tpass, tname, tsite;

   //called when a password wants to be added
   const addpassword = (e) => {
      e.preventDefault(); //So the page does not refresh
      passarray.push([tsite, tname, tpass]);//adds the temporary variables set above to the password array
      console.log('added new password');
      updatepasswords();//updates the state of the stored passwords
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

               <div id = 'passwords'>
                  {_passwords}
               </div>
            </div>
        </div>
     );
  }
}
export default App;
