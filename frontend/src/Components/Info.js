import React, { Component } from 'react';


class Info extends Component{
    render(){
       return(
          <div id = 'info'>
             <p>{this.props.name}</p>
             <p>{this.props.address}</p>
          </div>
       );
    }
  }
  export default Info;