import React from "react";
import InputField from "../../atoms/InputField";
import Button from "../../atoms/Button";
import "../../../styles/Header.css"; 

const ContactForm = () => {
  return (
    <div className="baris-2">
      <InputField type="text" placeholder="Name" className="input-field" />
      <InputField type="email" placeholder="Email" className="input-field" />
      <Button href="#">Submit</Button>
    </div>
  );
};

export default ContactForm;
