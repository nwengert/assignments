import React from 'react';

function Input() {
    return(
        <div class='inputDiv'>
            <div class='inputBoxes'>
                <input type="text" placeholder='First Name'/>
                <input type="text" placeholder='Last Name'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Place of Birth'/>
                <input type="text" placeholder='Phone'/>
                <input type="text" placeholder='Favorite Food'/>
            </div>
            <input id='commentBox' type="text" placeholder='Tell us aboutyourself'/>
            <button>Submit</button>
        </div>
    )
}
export default Input