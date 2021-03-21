import React, { Component } from 'react';
import Password from './Password';
import AddPassword from './AddPassword';


class Passwords extends Component {

   render() {

      const _passwords = this.props.storedpasswords.map((p, i) =>
         p[0] && <Password key={i} website={p[0]} username={p[1]} password={p[2]} />
      );

      return (
         <>
            
            <div id='password-accessor'>
            <button id='add-password-button' onClick = {null}>Add Password</button>
               <div id = 'passwords'>
                  {_passwords}
               </div>
            </div>
            <AddPassword/>
         </>
      );
   }
}
export default Passwords;