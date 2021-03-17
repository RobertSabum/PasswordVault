import React, { Component } from 'react';
import Password from './Password';


class Passwords extends Component{

    render(){

      const _passwords = this.props.passarray.map((p) => 
      p[0]&&<Password site = {p[0]} username = {p[1]} password = {p[2]}/>
      )

       return(
          <div className = 'passwords'>
             {_passwords}
          </div>
       );
    }
  }
  export default Passwords;