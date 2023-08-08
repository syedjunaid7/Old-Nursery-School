import React from "react";

import "./Contact.scss";
import InputFieldSmall from "../../components/inputFieldSmall/inputFieldSmall";
import watsappLogo from "../../assets/images/watsapp-logo.png";
import whatsappLink from "../../assets/Links/whatsappLink";
import PhoneLink from "../../assets/Links/PhoneLink";
import EmailLink from "../../assets/Links/EmailLink";
import { BsFillTelephonePlusFill  } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { AiFillMail } from 'react-icons/ai';
export default function ContactUs() {
  return (
    <div>
      <div className="cards-box">
        <div className="cards">
        <h2><MdLocationPin /></h2>
          <span>
            A640 Gtb Nagar, Labour Chauraha, Prayagraj, Kareli
            </span>
        </div>
        <div className="cards">
        <h2><AiFillMail /></h2>
          <EmailLink />
        </div>
        <div className="cards">
        <h2><BsFillTelephonePlusFill /></h2>
          <PhoneLink />
        </div>
      </div>
      <div className="contactUs-div">
        <section className="left">
          <iframe
          className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28827.273087925554!2d81.78483586091998!3d25.4245817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398535cc6eccc05d%3A0xfa385626af6ec935!2sLittle%20Millennium%20Convent%20School!5e0!3m2!1sen!2sin!4v1691494301376!5m2!1sen!2sin"
            width="900"
            height="600"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        <section className="right">
          <h1>GET IN TOUCH!</h1>
          <InputFieldSmall />
        </section>
      </div>
      <img className="watsapp" src={watsappLogo} onClick={whatsappLink} />
    </div>
  );
}
