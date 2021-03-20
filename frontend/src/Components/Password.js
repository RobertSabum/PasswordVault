import React, { Component } from 'react';

class Password extends Component{
   
    render(){

       return(
         <div className = 'password'>
            <div className = 'log-in-info'>
               <p>Username: {this.props.username}</p>
               <p>Password: {this.props.password}</p>
            </div>
            <div className = 'log-in-website'>
               <p>{this.props.website}</p>
            </div>
         </div>
       );
    }
  }
  export default Password;