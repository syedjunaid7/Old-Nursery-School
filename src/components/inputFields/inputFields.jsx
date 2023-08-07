import React from "react";
import "./inputFields.scss";
import { Tooltip } from "react-tooltip";

function InputFields({ type, placeholder, requiredToolTip, stylee }) {
  return (
    <div className="input_fields">
      <form className="form">
        <div className="input_group">
          <input
            type={type}
            className="input"
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

export default InputFields;