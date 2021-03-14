import React, { Component } from 'react';
import Password from './Password';

class Passwords extends Component{
    render(){
       return(
          <div>
             <Password/>
             <Password/>
             <Password/>
             <Password/>
          </div>
       );
    }
  }
  export default Passwords;