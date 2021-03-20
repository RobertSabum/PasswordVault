import React, { Component } from 'react';

class Password extends Component{
   
    render(){
       var visible = true;

      const hideonclick = (event) => (
         event.target.style.visibility = 'hidden',
         event.target.style.color = 'rgba(255, 255, 255, 0)',
         event.target.style.backgroundColor = 'rgba(148, 148, 148, 0)',
         visible = false);
         
      
      const showonclick = (event) => (
         event.target.style.visibility = 'visible',
         event.target.style.color = 'rgba(255, 255, 255, 1)',
         event.target.style.backgroundColor = 'rgba(148, 148, 148, 1)',
         visible = true);
         

      return(
         <div className = 'password'>
            <div className = 'log-in-info'>
               <p>Username: {this.props.username}</p>
               <p>Password: {this.props.password}</p>
            </div>
            <div className = 'log-in-website' onClick = {visible? hideonclick : showonclick}>
               {this.props.website}
            </div>
         </div>
       );
    }
  }
  export default Password;