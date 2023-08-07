import React from "react";
import "./inputFieldSmall.scss";
import { Tooltip } from "react-tooltip";

function InputFieldSmall({ type, placeholder, requiredToolTip, stylee }) {
  return (
    <div className="input_fields">
      <form className="form">
        <div className="input_group">
          <input
            type={type}
            className="input1"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={requiredToolTip}
          />
          <label style={{ left: stylee }} className="placeholder">
            {placeholder}
          </label>
          <Tooltip
            id="my-tooltip"
            style={{ backgroundColor: "red" }}
            place="bottom"
          />
        </div>
      </form>
    </div>
  );
}

export default InputFieldSmall;