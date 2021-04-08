import React, { Component } from 'react';
import passArray from '../Testing/SamplePasswordArray';


class AddPassword extends Component{
    state = {
        site: null,
        name: null,
        pass: null
    }
          
    render(){
       //function to continuously update the above temporary variables whenever their respective input field is edited
        const updateData = (e) =>{
            this.setState({
                [e.target.id]: e.target.value
            })
        }

        const addPassword = (e) =>{
            e.preventDefault()
            this.props.addNewPassword(this.state)
        }


        return(
            <div id = 'addpasswordbox'>
                <form onSubmit = {null}>
                    <input onChange = {updateData} type="text" placeholder = "Username" className = 'infoinput' id = "name"/>
               
                    <input onChange = {updateData} type="text" placeholder = "Password" className = 'infoinput' id = "pass"/>
               
                    <input onChange = {updateData} type="text" placeholder = "Website" className = 'infoinput' id = "site"/>
                </form>

                <button onClick = {addPassword} id='add-password-button'>Add Password</button>
            </div>
            
        );
    }
}
 export default AddPassword;