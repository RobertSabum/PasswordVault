import React, { Component } from 'react';
import Header from './Components/Header';
import Login from './Components/Login';
import Passwords from './Components/Passwords';
import ModificationBar from './Components/ModificationBar';
class App extends Component{
  render(){
     return(
        <div>
           <Header/>
           <Login/>
           <Passwords/>
           <ModificationBar/>
        </div>
     );
  }
}
export default App;
