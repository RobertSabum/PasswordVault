import React, { Component } from 'react';
import Password from './Components/Password';

class PasswordContainer extends Component{
    //contains the state of the users address, username, and stored passwords
          
    render(){
        const {passwordData} = this.props;
        const passwords = passwordData.map((password, i) =>
            <Password 
            key={i} 
            website={password[0]}
            username={password[1]}
            password={password[2]} />
        );

        return(
            <div id = 'passwords'>
                {passwords}
            </div>
            
        );
    }
}
 export default PasswordContainer;