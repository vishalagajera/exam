import React, { useMemo, useState } from "react";
import "../../../Style/singup.css";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import "react-toastify/dist/ReactToastify.css";
import Stepper from "react-stepper-horizontal";
import FormButton from "../../FormButton";
import me from "../../../assets/Je3eTqQJrt.json";
import FormContainer from "../../FormContainer";
import "../../../Style/login.css";
import InputText from "../validateInputs";
import {isValidStep2} from "../../../Auth/isValidate";

const Step2 = ({setScreen}) => {
  const lottie = (
    <Lottie
      animationData={me}
      loop={true}
      style={{ height: "100%", width: "100%" }}
    />
  );
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  const isValidateStep2 = useMemo(
    () => isValidStep2(firstName, lastName),
    [firstName, lastName]
  );
  return (
    <FormContainer
      heading={"Sign Up"}
      title={
        "Hello there! We believe every story begins with a name. Mind sharing your first and last name with us? We're excited to get to know you better!"
      }
      leftSection={lottie}
      slogan={<Stepper steps={[{}, {}, {}, {}, {}, {}]} activeStep={1} />}
      navigat={
        <p className="--navLink">
          Already have an account : <Link to={"/login"}>Login !</Link>
        </p>
      }
      textbox1={
        <InputText
          inputType={"text"}
          placeHolder={"First Name"}
          onChange={(e) => setFirstName(e)}
        />
      }
      textbox2={
        <InputText
          inputType={"text"}
          placeHolder={"Last Name"}
          onChange={(e) => setLastName(e)}
        />
      }
      button1={
        <FormButton
          className={"--btn"}
          text={"back"}
          onClick={() => setScreen("step1")}
        />
      }
      button2={
        <FormButton
          className={isValidateStep2 ? "--btnDisabled" : "--btn"}
          text={"next"}
          isDisabled={isValidateStep2}
          onClick={() => {
            setScreen("step3");
          }}
        />
      }
    />
  )
}

export default Step2