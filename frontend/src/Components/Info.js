import React, { Component } from 'react';


class Info extends Component{
    render(){
       return(
          <div id = 'info'>
             <h1>ChainPass</h1>
             <h6>Password Manager</h6>
             <h3>{this.props.name}</h3>
             <h5>{this.props.address}</h5>
          </div>
       );
    }
  }
  export default Info;