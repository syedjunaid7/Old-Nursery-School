import React from "react";
import "./Admission.scss";
import InputFieldSmall from "../../components/inputFieldSmall/inputFieldSmall";
import InputFields from "../../components/inputFields/inputFields";
import admissionformimg from "../../assets/images/admissionformimg.png"

export default function Adimission() {
  return (
    <div className="admission_form">
      <div className="left">
        <img src={admissionformimg} alt="admission_image" />
      </div>
      <div className="right">
        <InputFields
          type="text"
          requiredToolTip="*This field is required"
          placeholder="*Name"
        />
        <div className="small_row">
          <InputFieldSmall
            type="mobile"
            requiredToolTip="*This field is required"
            placeholder="*Mobile Number"
          />
          <InputFieldSmall
            type="email"
            requiredToolTip="*This field is required"
            placeholder="*Email"
          />
        </div>

        <div className="small_row">
          <InputFieldSmall
            type="text"
            requiredToolTip="*This field is required"
            placeholder="*Child Name"
          />
          <InputFieldSmall
            type="date"
            requiredToolTip="*This field is required"
            placeholder="*Date of birth"
            stylee="40%"
          />
        </div>
        <div className="message_box">
          <input type="text" placeholder="Message" />
        </div>
        <button className="submit_btn">SUBMIT</button>
      </div>
    </div>
  );
}
