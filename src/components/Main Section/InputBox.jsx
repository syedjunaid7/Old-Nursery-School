import React from 'react';
import "./inputBox.scss";
function InputBox() {
  return (
    <div className='input-box'>
        <input type='text' placeholder='Full Name'/>
        <input type='number' placeholder='Phone Number'/>
        <button>Submit</button>
    </div>
  )
}

export default InputBox