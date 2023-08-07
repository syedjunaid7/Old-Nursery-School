import React from "react";
import "./Main.scss";
import Card from "./Cards/Card";
import kidPlaying from "../../assets/images/kid-playing.png";
import InputBox from "./InputBox";
import Aside from "./Aside Section/Aside";
function Main() {
  return (
    <>
      <main>
        <h2>KEEP IN TOUCH</h2>
        <button>CONTACT US</button>
      </main>
      <section className="sec-1">
        <h1>FACILITIES WE PROVIDE</h1>
        <div className="card-container">
          <Card />
        </div>
      </section>
      <section className="sec-2">
        <div className="bannerConatiner">
          <div className="img-box">
            <img src={kidPlaying} />
          </div>
          <div className="content-box">
            <h1>
              <span>Get Enrolled,</span> How to enroll your child to a class?
            </h1>
            <p>
              We are a group of teachers who really love children! We enjoy
              teaching and playing with all of our students.
            </p>
            <button>Contact Us</button>
          </div>
        </div>
        <InputBox />
      </section>
      <Aside/>
    </>
  );
}

export default Main;
