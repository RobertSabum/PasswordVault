import React, { Component } from 'react';

class Password extends Component{
   constructor(props) {
      super(props);
      this.state = {showPassword: false};
    }
   
    render(){
      let visibility;
      if (this.state.showPassword){
         visibility = {
            visibility: 'hidden',
            opacity: '0'
         };
      }
      else{
         visibility = {
            visibility: 'visible',
            opacity: '1'
         };
      }

      const togglevisibility = (event) => {
         event.preventDefault();
         this.setState((oldState) => ({
           showPassword: !oldState.showPassword,
         }));
       }
         
      return(
         <div className = 'password'>
            <div className = 'log-in-info' onClick={togglevisibility}>
               <p>Username: {this.props.username}</p>
               <p>Password: {this.props.password}</p>
            </div>
            <div className = 'log-in-website' onClick={togglevisibility} style = {visibility}>
               {this.props.website}
            </div>
         </div>
       );
    }
  }
  export default Password;