import React from "react";
import Lottie from "lottie-react";
import { ToastContainer } from "react-toastify";
import me from "../assets/me.json";
import FormTextboxes from "./FormTextbox";
import { Link } from "react-router-dom";
import FormButton from "./FormButton";
import { Stepper } from "react-form-stepper";
import "../Style/login.css";
const FormContainer = ({
  footerSection,
  handleSubmit,
  warning,
  setEmail,
  setPassword,
  title,
  textbox1,
  textbox2,
  textbox3,
  textbox4,
  textbox5,
  textbox6,
  textbox7,
  textbox8,
  textbox9,
  textbox10,
  heading,
  slogan,
  navigat,
  button1,
  button2,
  leftSection,
}) => {
  return (
    <>
      <ToastContainer />
      <div className="--main">
        <div className="--left">{leftSection}</div>
        <div className="--right">
          <div className="--heading">
            <span className="--headingText">{heading}</span>
            <span className="--sloganText">{slogan}</span>
            <span className="--titleText">{title}</span>
            <span className="--waring">{warning}</span>
          </div>
          <div className="Forms">
            {textbox1}
            <div className="--form">
              {textbox2}
              {textbox3}
            </div>
            <div className="--form">
              {textbox4}
              {textbox5}
            </div>
            {textbox6}
            {textbox7}
            {textbox8}
            {textbox9}
            {textbox10}
            <div className="--form">
              {button1}
              {button2}	
            </div>
            <span>{navigat}</span>
            <div className="signUpFooter">
              <Link to={"/gethelp"}>Get Help</Link>
              <Link to={"/termsAndCondition"}>Terms And Conditions </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormContainer;
