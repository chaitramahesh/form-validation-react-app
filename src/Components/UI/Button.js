import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button
        className={`button ${props.className}`}
        type={props.type}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
