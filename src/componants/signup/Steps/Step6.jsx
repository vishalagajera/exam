import React, {  useState } from "react";
import "../../../Style/singup.css";
import ProfessionBox from "../../ProfessionBox";
import Lottie from "lottie-react";
import "react-toastify/dist/ReactToastify.css";
import Stepper from "react-stepper-horizontal";
import FormButton from "../../FormButton";
import me from "../../../assets/Je3eTqQJrt.json";
import FormContainer from "../../FormContainer";
import "../../../Style/login.css";
import InputText from "../validateInputs";
// import {isValidStep6} from "../../../Auth/isValidate";

const Step6 = ({setScreen}) => {
  const lottie = (
    <Lottie
      animationData={me}
      loop={true}
      style={{ height: "100%", width: "100%" }}
    />
  );
  
  const [skills, setSkills] = useState("");
  const [profession, setProfession] = useState("");
  const [langauges, setLanguages] = useState("");
  
  return (
    <FormContainer
    heading={"Sign Up"}
    leftSection={lottie}
    title={
      "Unleash your potential and let your unique abilities shine on the path to career success."
    }
    slogan={
      <Stepper
        style={{ color: "#001f3f" }}
        steps={[{}, {}, {}, {}, {}, {}]}
        activeStep={5}
      />
    }
    textbox1={
      <ProfessionBox
        onChange={(e) => setProfession(e.target.value)}
        arrayKey="profession"
        multiple={false}
      />
    }
    textbox3={
      <InputText
        inputType={"text"}
        onChange={(e) => setLanguages(e)}
        placeHolder={"Langauges(lang1,lang2,...)"}
      />
    }
    textbox2={
      <InputText
        inputType={"text"}
        onChange={(e) => setSkills(e)}
        placeHolder={"Enter your Skills(skill1,skill2,...)"}
      />
    }
    button1={
      <FormButton
        className={"--btn"}
        text={"back"}
        onClick={() => setScreen("step5")}
      />
    }
    button2={
      <FormButton
        className={"--btn"}
        // isDisabled={!isValidateStep6}
        text={"Get Started"}
        onClick={() => {
          setScreen("step1");
        }}
      />
    }
  />
  )
}

export default Step6