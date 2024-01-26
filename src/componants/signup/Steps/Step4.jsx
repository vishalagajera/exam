import React, { useMemo, useState } from "react";
import "../../../Style/singup.css";
import Lottie from "lottie-react";
import "react-toastify/dist/ReactToastify.css";
import Stepper from "react-stepper-horizontal";
import FormButton from "../../FormButton";
import me from "../../../assets/Je3eTqQJrt.json";
import FormContainer from "../../FormContainer";
import "../../../Style/login.css";
import InputText from "../validateInputs";
import {isValidStep4} from "../../../Auth/isValidate";

const Step4 = ({setScreen}) => {

  const lottie = (
    <Lottie
      animationData={me}
      loop={true}
      style={{ height: "100%", width: "100%" }}
    />
  );
  
  const [defaultWarning, setDefaultWarning] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [degreeLevel, setDegreeLevel] = useState("");
  const [startDateSchool, setStartDateSchool] = useState("");
  const [endDateSchool, setEndDateSchool] = useState("");
  const [gpa, setGpa] = useState("");
  const [certifications, setCertifications] = useState("");
  const [discription, setDiscription] = useState("");
  
  const isValidateStep4 = useMemo(() => isValidStep4(institutionName, endDateSchool, startDateSchool), [institutionName, startDateSchool, endDateSchool]);
  
  return (
    <FormContainer
        heading={"Sign Up"}
        leftSection={lottie}
        title={
          "Unlock your potential by sharing your educational journey because every degree is a stepping stone to success!"
        }
        slogan={
          <Stepper
            style={{ color: "#001f3f" }}
            steps={[{}, {}, {}, {}, {}, {}]}
            activeStep={3}
          />
        }
        textbox1={
          <InputText
            onChange={(e) => setInstitutionName(e)}
            id={"School"}
            inputType={"text"}
            placeHolder="Name of the educational institution."
            require={true}
          />
        }
        textbox2={
          <InputText
            onChange={(e) => setDegreeLevel(e)}
            id={"degree_level"}
            inputType={"text"}
            placeHolder="Type of degree obtained."
            require={true}
          />
        }
        textbox4={
          <InputText
            inputType={"date"}
            onChange={(e) => setStartDateSchool(e)}
            label={"Start Date"}
            id={"start date"}
            placeHolder="start date"
          />
        }
        textbox5={
          <InputText
            onChange={(e) => setEndDateSchool(e)}
            id={"enddate"}
            inputType={"date"}
            label={"End Date"}
          />
        }
        textbox6={
          <InputText
            id={"gpa"}
            inputType={"text"}
            onChange={(e) => setGpa(e)}
            placeHolder={"Enter GPA"}
            require={false}
          />
        }
        textbox7={
          <InputText
            id={"certifications"}
            onChange={(e) => setCertifications(e)}
            inputType={"text"}
            placeHolder={"Activities and Societies"}
            require={false}
          />
        }
        textbox8={
          <InputText
            onChange={(e) => setDiscription(e)}
            inputType={"text"}
            placeHolder={"Description"}
            require={false}
          />
        }
        button1={
          <FormButton
            className={"--btn"}
            text={"back"}
            onClick={() => setScreen("step3")}
          />
        }
        button2={
          <FormButton
            className={!isValidateStep4 ? "--btnDisabled" : "--btn"}
            isDisabled={!isValidateStep4}
            text={"Next"}
            onClick={() => {
              setScreen("step5");
            }}
          />
        }
      />
  )
}

export default Step4