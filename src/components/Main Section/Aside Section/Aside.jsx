import React, { useEffect } from 'react';
import aside from "./aside.scss";
import AOS from "aos";
import 'aos/dist/aos.css';
export default function Aside() {
  useEffect(() => {
    AOS.init({duration : 2000})
  },[])
  return (
    <aside>
        <div className='aside-sec'  data-aos = "fade-in">
            <h1  data-aos = "fade-right">See Our Little Millenium Kids Special Features & <span>Activities!</span></h1>
            <button>JOIN NOW</button>
        </div>
    </aside>
  )
}
