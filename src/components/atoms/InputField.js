import React from "react";
import "./InputFields.css"

const InputField = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} className="input-field" />;
};

export default InputField;
