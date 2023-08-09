import React, { useEffect } from "react";
import "./About.scss";
import img from "../../assets/images/1.png";
import img2 from "../../assets/images/19.png";
import logos from "../../assets/images/4.png";
import vision from "../../assets/images/vision.png";
import mission from "../../assets/images/mission.png";
import philosphy from "../../assets/images/philosophy.png";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="topper">
        <h1 className="head-top">About Us</h1>
      </div>
      <section className="sec-top-main">
        <div className="content" data-aos="fade-right">
          <h1>
            Little Millennium® <br />
            Preschool
          </h1>
          <p>
            The fastest-growing <br />pres <span style={{'color':"white"}}>- chool
             ch</span><span>ain in India.</span>
          </p>
        </div>
        <div className="stats-box-main" data-aos="fade-left">
          <div className="stat-circle">
            <h2>
              <CountUp className="countUp" start={0} end={200} duration={4} />
              <span>K</span>
            </h2>
            <h1>HAPPY CHILDREN</h1>
          </div>
          <div className="stat-circle">
            <h2>
              <CountUp className="countUp" start={0} end={5} duration={4} />
              <span>K</span>
            </h2>
            <h1>CITIES</h1>
          </div>
          <div className="stat-circle">
            <h2>
              <CountUp className="countUp" start={0} end={20} duration={4} />
            </h2>
            <h1>PRESCHOOL CENTERSS</h1>
          </div>
        </div>
      </section>

      <section className="sec1">
        <div>
          <h1>Preschool Activities</h1>
          <p>
            At Little Millennium, the emphasis is on building the right
            foundation for the child every day through play activities and
            collaborative group work. Highly trained staff, premium
            child-friendly infrastructure, an acute focus on quality control and
            evaluation ensures a high-quality experience for children and their
            parents at our preschool. We believe that each child is unique and
            we aim to help them become happy, social and confident children.
          </p>
        </div>
        <img src={img} />
      </section>

      <section className="sec2">
        <div data-aos="fade-up">
          <div>
            <img src={vision} alt="vision" />
            <h4>Vision</h4>
            <p>
              To Enable, Energise And Enhance Childhood By Fostering Growth Of
              Mind, Body And Spirit, Which Will Help Children To Become Lifelong
              Learners.
            </p>
          </div>
          <div>
            <img src={mission} alt="mission" />
            <h4>Mission</h4>
            <p>
              To Nurture Young Minds In A Culturally Appropriate Environment And
              Provide Opportunities That Will Help Them Realise Their True
              Potential.
            </p>
          </div>
          <div>
            <img src={philosphy} alt="vision" />
            <h4>Philosophy</h4>
            <p>
              To Provide Each Child With A Culturally Appropriate Environment,
              Moral Values, Love And Protection Needed For Healthy Growth Of
              Body, Mind And Spirit.
            </p>
          </div>
        </div>
      </section>

      <section className="sec3">
        <div>
          <h1 style={{ color: "white" }}>Preschool Infrastructure</h1>
          <p data-aos="zoom-in">
            At Little Millennium, we follow a thoughtfully formulated design
            language when deciding on preschool infrastructure, that provides a
            perfect blend of style, aesthetics, reliability, child friendliness
            and functionality. <br />
            Every Little Millennium centre follows a child-centric preschool
            infrastructure design methodology, which provides a safe and
            hygienic environment with a crisp colourful ambience for their
            all-around growth and development. This is backed by quality
            teaching and learning aids that work together to ensure the
            all-around holistic development of each child.
          </p>
        </div>
        <div id="container">
          <img id="movingImage" src={img2} alt="Moving Image" />
        </div>
      </section>

      <section className="sec4 sec3">
        <img src={logos} data-aos="fade-up" />
        <div>
          <h1 data-aos="fade-down">Kickers Club</h1>
          <p data-aos="fade-down">
            ♛ Little Millennium Kickers Club- India’s First ever Unique Sports
            Curriculum for Pre-schoolers Kickers Club is the first of its kind,
            sports curriculum uniquely designed for kids in the 3-6 years age
            bracket. The curriculum is designed to inculcate –
          </p>
          <p data-aos="fade-down">
            {" "}
            ♛ Inculcate love for sports at an early age.
          </p>
          <p data-aos="fade-down">
            ♛ Provide sports training to children through a scientifically
            developed curriculum.
          </p>
          <p data-aos="fade-down">
            ♛ Learn the spirit of healthy competition, cooperation, teamwork and
            sportsmanship.
          </p>
          <p data-aos="fade-down">
            ♛ Provide students with a platform to showcase their abilities.
          </p>
        </div>
      </section>
    </>
  );
}
