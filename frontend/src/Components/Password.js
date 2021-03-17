import React, { Component } from 'react';

class Password extends Component{
   
    render(){

       return(
          <div className = 'password'>
             <p className = 'login-site'>{this.props.site}</p>
             <ul className = 'login-info'>
               <ul className = 'u'>
                  <p style = {{color: 'orange'}}>Username</p>
                  <p>{this.props.username}</p>
               </ul>
               <ul className = 'p'>
                  <p style = {{color: 'orange'}}>Password</p>
                  <p>{this.props.password}</p>
               </ul>
             </ul>
          </div>
       );
    }
  }
  export default Password;