import React from "react";
import "./inputFields.scss";
import { Tooltip } from "react-tooltip";

function InputFields() {
  return (
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <input
        type="text"
        className="mssgBox"
        placeholder="Enter Your Message"
      />
      <button>Submit</button>
    </div>
  </form>
  );
}

export default InputFields;