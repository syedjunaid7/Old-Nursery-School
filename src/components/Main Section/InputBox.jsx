import React, { useEffect } from 'react';
import "./inputBox.scss";
import AOS from "aos";
import 'aos/dist/aos.css';
function InputBox() {
  useEffect(() => {
    AOS.init({duration : 500})
  },[])
  return (
    <div className='input-box' data-aos="zoom-in">
        <input type='text' placeholder='Full Name'/>
        <input type='number' placeholder='Phone Number'/>
        <button>Submit</button>
    </div>
  )
}

export default InputBox