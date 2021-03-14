import React, { Component } from 'react';
import Header from './Components/Header';
import Passwords from './Components/Passwords';
import Login from './Components/Login';


class App extends Component{
  render(){
     return(
        <div>
           <Header/>
           <Login/>
           <Passwords/>
        </div>
     );
  }
}
export default App;
