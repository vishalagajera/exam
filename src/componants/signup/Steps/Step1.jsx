import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../../../Style/singup.css";
import Lottie from "lottie-react";
import "react-toastify/dist/ReactToastify.css";
import Stepper from "react-stepper-horizontal";
import FormButton from "../../FormButton";
import me from "../../../assets/Je3eTqQJrt.json";
import FormContainer from "../../FormContainer";
import "../../../Style/login.css";
import InputText from "../validateInputs";
import {isValidStep1} from "../../../Auth/isValidate";

const Step1 = ({setScreen}) => {
  const lottie = (
    <Lottie
      animationData={me}
      loop={true}
      style={{ height: "100%", width: "100%" }}
    />
  );
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const isValidateStep1 = useMemo(() =>
    isValidStep1(email, password, confirmPassword)
  );
  
  return (
      <FormContainer
        heading={"Sign Up"}
        leftSection={lottie}
        title={
          "Just to be sure, enter your password again. Double-check for a seamless and secure login."
        }
        slogan={<Stepper steps={[{}, {}, {}, {}, {}, {}]} activeStep={0} />}
        navigat={
          <p className="--navLink">
            Already have an account : <Link to={"/login"}>Login !</Link>
          </p>
        }
        textbox1={
          <InputText
            inputType={"email "}
            placeHolder={"Email*"}
            onChange={(e) => setEmail(e)}
          />
        }
        textbox2={
          <InputText
            inputType={"password"}
            password={true}
            placeHolder={"Password*"}
            onChange={(e) => setPassword(e)}
          />
        }
        textbox3={
          <InputText
            inputType={"password"}
            password={true}
            placeHolder={"Confirm Password*"}
            onChange={(e) => setConfirmPassword(e)}
          />
        }
        button2={
          <FormButton
            className={isValidateStep1 ? "--btnDisabled" : "--btn"}
            text={"next"}
            isDisabled={isValidateStep1}
            onClick={() => {
              setScreen("step2");
            }}
          />
        }
      />
  )
}

export default Step1