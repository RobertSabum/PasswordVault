import React from 'react';
import Password from './Password';

const PasswordContainer = ({passwordData}) =>{
    
        return(
            <div id = 'passwords'>
                {
                    passwordData.map((password, i) =>
                    <Password 
                    key={i} 
                    website={password[0]}
                    username={password[1]}
                    password={password[2]} />
                    )
                }
            </div>
            
        );
    }

 export default PasswordContainer;