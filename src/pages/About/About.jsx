import React from "react";
import "./About.scss";
import img from "../../assets/images/1.png";
import img2 from "../../assets/images/19.png";
import logos from "../../assets/images/4.png";
export default function About() {
  return (
    <>
      <section className="sec1">   
      <h1 className="head-top">About Us</h1> 
        <div>
          <h1 >Preschool Activities</h1>
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
        <div>
          <h1>Kids Marathon</h1>
          <ul>
            <li>
              🎀 Little Millennium Kids Marathon is a short distance run by
              preschool children to support the cause against child abuse and
              promote the healthy development of children.
            </li>
            <li>
              🎀 The mission is to celebrate running, promote physical fitness
              and encourage a healthier lifestyle.
            </li>
            <li>
              🎀 Kids Marathon extends the spirit of sports and physical
              education by providing young children with a platform to run and
              express themselves freely.
            </li>
            <li> 🎀 The event witnessed a footfall of 4000 people.</li>
            <li>
              🎀 Little Millennium’s entire community of children, parents and
              management actively participated in the event.
            </li>
          </ul>
        </div>
      </section>

      <section className="sec3">
        <div>
          <h1 style={{color :"white"}}>Preschool Infrastructure</h1>
          <p>
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
        <img src={logos} />
        <div>
          <h1>Kickers Club</h1>
          <p>
            ♛ Little Millennium Kickers Club- India’s First ever Unique Sports
            Curriculum for Pre-schoolers Kickers Club is the first of its kind,
            sports curriculum uniquely designed for kids in the 3-6 years age
            bracket. The curriculum is designed to inculcate –
          </p>
          <p> ♛ Inculcate love for sports at an early age.</p>
          <p>
            ♛ Provide sports training to children through a scientifically
            developed curriculum.
          </p>
          <p>
            ♛ Learn the spirit of healthy competition, cooperation, teamwork and
            sportsmanship.
          </p>
          <p>♛ Provide students with a platform to showcase their abilities.</p>
        </div>
      </section>
    </>
  );
}
