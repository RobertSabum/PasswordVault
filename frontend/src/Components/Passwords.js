import React, { Component } from 'react';
import Password from './Password';


class Passwords extends Component{

    render(){

      const _passwords = this.props.passarray.map((p ,i) => 
      p[0]&&<Password key = {i} username = {p[1]} password = {p[2]}/>
      )

       return(
            
            <div className = 'passwords'>
               <div id = 'loginsites'>
                  Sites
               </div>
               <div style = {{paddingTop: '100px', paddingBottom: '20px'}}>
                  <button className = 'modbutton'>Hide/Show</button> <button className = 'modbutton'>Add Password</button>
               </div>
               
               {_passwords[0]}
            </div>
          
       );
    }
  }
  export default Passwords;