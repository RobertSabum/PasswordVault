import React, { Component } from 'react';

class Password extends Component{
   
   state = {//prop storing visiblity of the password
      showPassword: false
   };
    
   
   render(){

      //functionality to modify the visibilty state of the component
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

     const togglevisibility = (event) => {//function that changes the visibility
         event.preventDefault();
         this.setState((oldState) => ({
         showPassword: !oldState.showPassword,
        }));
      }
        
     return(
        <div className = 'password'>
           <div className = 'log-in-info' onDoubleClick={togglevisibility}>
              <p onClick = {() => {navigator.clipboard.writeText(this.props.username)}}>Username: {this.props.username}</p>
              <p onClick = {() => {navigator.clipboard.writeText(this.props.password)}}>Password: {this.props.password}</p>
           </div>
           
           <div className = 'log-in-website' onDoubleClick ={togglevisibility} style = {visibility}>
              {this.props.website}
           </div>
        </div>
      );
   }
}
  export default Password;