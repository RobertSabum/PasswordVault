import React, { Component } from 'react';


class Info extends Component{
    render(){
       return(
          <div className = 'info'>
             <h5>{this.props.name}</h5>
             <h5>{this.props.address}</h5>
          </div>
       );
    }
  }
  export default Info;