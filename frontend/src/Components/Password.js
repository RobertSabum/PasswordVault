import React, { Component } from 'react';

class Password extends Component{
   
    render(){

       return(
          <div className = 'password'>
             <ul className = 'login-info'>
               <li className = 'userpass'>
                  <p>Username: <a style = {{color: 'white', marginLeft: '40%', position: 'absolute'}}>{this.props.username}</a></p>
                  <p>Password: <a style = {{color: 'white', marginLeft: '42%', position: 'absolute'}}>{this.props.password}</a></p>   
               </li>
             </ul>
          </div>
       );
    }
  }
  export default Password;