import React, { useEffect } from "react";
import "./Admission.scss";
import icon1 from "../../assets/images/icon2.png";
import icon2 from "../../assets/images/icon4.png";
import icon3 from "../../assets/images/icon5.png";
import icon4 from "../../assets/images/icon3.png";
import { Tooltip } from "react-tooltip";
import bird from "../../assets/images/bird.png";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Adimission() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <>
      <div className="topper">
        <h1>Admission</h1>
      </div>
      <div className="admission-container">
        <section className="sec1-Admission">
          <h1>Welcoming Our Children, Back To Their Favorite Preschool.</h1>
          <p>
            We all want to select the best preschool for our kid's primitive
            educational years and bulid a strong foundation for child's future.
          </p>
          <p>
            Little Millennium Preschool is one of the best preschool in India to
            lay first step into the educational journey of your child with:
          </p>

          <div className="icons-box">
            <img data-aos="fade-right" src={icon1} alt="logo" />
            <p>Sceintifically developed curriculum</p>
          </div>
          <div className="icons-box">
            <img data-aos="fade-right" src={icon2} alt="logo" />
            <span>Well Trained Teachers</span>
          </div>
          <div className="icons-box">
            <img data-aos="fade-right" src={icon3} alt="logo" />
            <span>Excellent Infrastructure</span>
          </div>
          <div className="icons-box">
            <img data-aos="fade-right" src={icon4} />
            <span>Blended Learning Approach</span>
          </div>
        </section>

        <section className="sec2-Admission" data-aos="zoom-in">
          <img src={bird} />
          <h1>Preschool Admission Form</h1>
          <form>
            <input
              type="input"
              className="input1"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="name is required*"
              placeholder="Full Name"
            />
            <label className="placeholder"></label>
            <Tooltip
              id="my-tooltip"
              style={{ backgroundColor: "red" }}
              place="bottom"
            />
            <input
              type="number"
              className="input2"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="number is required*"
              placeholder="Phone Number"
            />
            <label className="placeholder"></label>
            <Tooltip
              id="my-tooltip"
              style={{ backgroundColor: "red" }}
              place="bottom"
            />
            <input
              type="email"
              className="input2"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="email is required*"
              placeholder="Email"
            />
            <label className="placeholder"></label>
            <Tooltip
              id="my-tooltip"
              style={{ backgroundColor: "red" }}
              place="bottom"
            />
            <input
              type="text"
              className="input2"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="child name is required*"
              placeholder="Child Name"
            />
            <label className="placeholder"></label>
            <Tooltip
              id="my-tooltip"
              style={{ backgroundColor: "red" }}
              place="bottom"
            />
            <input
              type="date"
              className="input2"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="DOB is required*"
              placeholder="D . O . B"
            />
            <label className="placeholder"></label>
            <Tooltip
              id="my-tooltip"
              style={{ backgroundColor: "red" }}
              place="bottom"
            />
            <br></br>
            <div>
              <input
                type="text"
                className="mssgBox"
                placeholder="Enter Your Message"
              />
            </div>
            <button>Submit</button>
          </form>
        </section>
      </div>
      
      <section className="sec3-Admission">
          <h1>Admission Process at Little Millennium</h1>
          <p>
            The Admission process at Little Millennium is simple and
            straightforward
          </p>
          <div className="process-card" data-aos="zoom-in">
            <div >
              <h1>1</h1>
              <p>Visit our website and fill up the Preschool Admission Form</p>
            </div>
            <div>
              <h1>2</h1>
              <p>
                Our admission counsellors will get in touch to understand the
                requirement
              </p>
            </div>
            <div>
              <h1>3</h1>
              <p>
                Visit the nearest Little Millennium Preschool for a guided tour
              </p>
            </div>
            <div>
              <h1>4</h1>
              <p>
                Complete the enrolment process with assitance from our admission
                counsellors
              </p>
            </div>
          </div>
        </section>
    </>
  );
}
