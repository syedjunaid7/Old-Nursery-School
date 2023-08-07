import React, { useEffect, useState } from "react";
import "./hero.scss";
import CountUp from "react-countup";
import leftImg from "../../../assets/images/hero-1.png";
import rightImg from "../../../assets/images/hero-2.png";
import { motion } from "framer-motion";
export default function HeroSection() {
  return (
    <section className="hero">
      <h1 class="typing-effect">Better Future For Your Kids</h1>
      <div className="banner-box">
        <motion.div
          initial={{ x: "-7rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "ease-in",
          }}
        >
          <img className="img-left" src={rightImg} />
        </motion.div>

        <div className="centre-div">
          <p>Let the Child be the director, and the actor in his own play</p>
          <p>
            <span style={{ color: "orange", marginRight: "10px" }}>▬</span>
            We just dont give our students only lecture but real life
            experiment, workshops and filled experience throught the journey !
          </p>
          <div className="count-box">
          <div className="count1">
            <span>
              <CountUp className="countUp" start={0} end={9} duration={4} />
              <span className="countUp">K+</span>
            </span>
            <p>
              Total active students taking <br /> gifted Courses
            </p>
          </div>
          <div className="count1 extra">
            <span>
              <CountUp className="countUp" start={0} end={50} duration={4} />{" "}
              <span className="countUp">+</span>
            </span>
            <p>
              Available Programs <br /> and increasing*
            </p>
          </div>
          </div>
        </div>
        <motion.div
          initial={{ x: "7rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "ease-in",
          }}
          className="image-container"
        >
          <img className="img-right" src={leftImg} />
        </motion.div>
      </div>
      <div className="hero-content">
        <h2>WELCOME TO Little Millenium</h2>
        <h6>About Little Millenium</h6>
        <p>
          ‘The name Little Millenium comes from the Latin language and means, educate,
          teach and instruct’.LITTLE MILLENIUM Early Childhood Center is Dubai’s first
          early years STEM approach nursery. We fulfill the statutory
          requirements of the Early Years Foundation Stage (EYFS) with an
          integrated STEM approach. The STEM approach in early years creates
          curiosity as the approach to children’s learning and development that
          integrates the areas of science, technology, engineering and
          mathematics.
        </p>
      </div>
    </section>
  );
}
