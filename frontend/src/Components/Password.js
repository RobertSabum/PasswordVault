import React, { Component } from 'react';

class Password extends Component{
   
    render(){

       return(
          <div id = 'password'>
             <p id = 'login-site'>{this.props.site}</p>
             <ul id = 'login-info'>
               <ul>
                  <li>Username</li>
                  <li>{this.props.username}</li>
               </ul>
               <ul>
                  <li>Password</li>
                  <li>{this.props.password}</li>
               </ul>
             </ul>
          </div>
       );
    }
  }
  export default Password;