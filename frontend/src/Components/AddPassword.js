import React, { Component } from 'react';


class AddPassword extends Component{
    constructor(props) {
        super(props)
        this.state = {showaddpassword: false};
      }
     
      render(){
        let windowvisibility;
        let backgroundvisibility;
        if (this.state.showaddpassword){
           windowvisibility = {
              visibility: 'visible',
              opacity: '0'
           };
           backgroundvisibility = {
            visibility: 'visible',
            opacity: '0'
           };
        }
        else{
           windowvisibility = {
              visibility: 'hidden',
              opacity: '1'
           };
           backgroundvisibility = {
            visibility: 'hidden',
            opacity: '0.5'
           };
        }
  
        const togglevisibility = (event) => {
           event.preventDefault();
           this.setState((oldState) => ({
             showaddpassword: !oldState.showaddpassword,
           }));
         }
       return(
        <>
            <div id = 'add-password-window-background' style = {backgroundvisibility}>

            </div>
            <div id = 'add-password-window' style = {windowvisibility}>

            </div>
        </>
       );
    }
  }
  export default AddPassword;