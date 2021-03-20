import React, { Component } from 'react';
import Password from './Password';


class Passwords extends Component{

    render(){

      const _passwords = this.props.passarray.map((p ,i) => 
         p[0]&&<Password key = {i} site = {p[0]} username = {p[1]} password = {p[2]}/>
      );

      const _sites = this.props.passarray.map((p, i) => 
         <div key = {i} className = 'site'>{p[0]}</div>
      );

			const showsitesbutton = <button id = 'choosesite' onClick = {null}>Choose Site</button>;

       return(
            
            <div id = 'passwords'>
               {showsitesbutton}
               <div style = {{marginTop: '15%'}}>
                  <button className = 'modbutton'>Hide/Show</button> <button className = 'modbutton'>Add Password</button>
               </div>
               <div style = {{marginTop: '5%'}}>
               {_passwords[2]}
               </div>
               <div className = 'siteselection'>
               {_sites}
               </div>
            </div>
          
       );
    }
  }
  export default Passwords;