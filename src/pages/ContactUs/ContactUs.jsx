import React, { useEffect } from "react";
import "./Contact.scss";
import InputFieldSmall from "../../components/inputFieldSmall/inputFieldSmall";
import watsappLogo from "../../assets/images/watsapp-logo.png";
import whatsappLink from "../../assets/Links/whatsappLink";
import PhoneLink from "../../assets/Links/PhoneLink";
import EmailLink from "../../assets/Links/EmailLink";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";
import bird from "../../assets/images/bird.png";
import mobileImg from "../../assets/images/mobile-contact.webp";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function ContactUs() {
  useEffect(() => {
    AOS.init({duration : 2000})
  },[])
  return (
    <div>
      <div className="topper">
      <h1>Contact Us</h1>
      </div>
      <div className="contactUs-div">
        <section className="left" data-aos="fade-right">
          <h1>Get In touch with us !</h1>
          <img src={mobileImg} />
        </section>
        <section className="right" data-aos="fade-up">
          <img src={bird} />
          <InputFieldSmall />
        </section>
      </div>
      <img className="watsapp" src={watsappLogo} onClick={whatsappLink} />

      <div className="cards-box" data-aos="fade-right">
        <div className="location-box">
          <div className="cards">
            <div className="icon-mod">
              <h2>
                <MdLocationPin />
              </h2>
            </div>
            <div>
              <h3>Address</h3>
              <p className="para">A640 Gtb Nagar, Labour Chauraha, Prayagraj, Kareli</p>
            </div>
          </div>
          <div className="cards">
            <div className="icon-mod">
              <h2>
                <AiFillMail />
              </h2>
            </div>
            <div>
              <h3>Email</h3>
              <EmailLink />
            </div>
          </div>
          <div className="cards">
            <div className="icon-mod">
              <h2>
                <BsFillTelephonePlusFill />
              </h2>
            </div>
            <div>
              <h3>Phone</h3>
              <PhoneLink />
            </div>
          </div>
        </div>
        <iframe
        data-aos="fade-down"
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28827.273087925554!2d81.78483586091998!3d25.4245817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398535cc6eccc05d%3A0xfa385626af6ec935!2sLittle%20Millennium%20Convent%20School!5e0!3m2!1sen!2sin!4v1691494301376!5m2!1sen!2sin"
          width="700"
          height="350"
          style={{ border: "0",borderRadius : "1rem" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
