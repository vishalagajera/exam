import React, { useMemo, useState } from "react";
import "../../../Style/singup.css";
import Lottie from "lottie-react";
import "react-toastify/dist/ReactToastify.css";
import Stepper from "react-stepper-horizontal";
import FormButton from "../../FormButton";
import FormSelectBox from "../../FormSelectBox";
import me from "../../../assets/Je3eTqQJrt.json";
import FormContainer from "../../FormContainer";
import "../../../Style/login.css";
import InputText from "../validateInputs";
import {isValidStep3} from "../../../Auth/isValidate";

const Step3 = ({setScreen}) => {

  const lottie = (
    <Lottie
      animationData={me}
      loop={true}
      style={{ height: "100%", width: "100%" }}
    />
  );
  
  const [personalAddress, setPersonalAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [state, setState] = useState("");
  const handleState = (state) => {
    setState(state);
  };
  const [city, setCity] = useState("");
  const handleCity = (city) => {
    setCity(city);
  };
  const isValidateStep3 = useMemo(() => isValidStep3(state, city, personalAddress, pinCode), [state, city, personalAddress, pinCode]);

  return (
    <FormContainer
    heading={"Sign Up"}
    leftSection={lottie}
    title={
      "Rooted in City, thriving in State, and always ready to embrace the next exciting chapter wherever life takes me."
    }
    slogan={
      <Stepper
        style={{ color: "#001f3f" }}
        steps={[{}, {}, {}, {}, {}, {}]}
        activeStep={2}
      />
    }
    textbox1={
      <InputText
        inputType={"text"}
        onChange={(e) => setPersonalAddress(e)}
        placeHolder={"Personal Address"}
      />
    }
    textbox2={
      <FormSelectBox
        type="text"
        // warning="states"
        className="--input"
        arrayKey="states"
        selectedState={state}
        state={handleState}
        selectedCity={city}
        city={handleCity}
      />
    }
    textbox3={
      <FormSelectBox
        className={"--input"}
        arrayKey="cities"
        // warning="city"
        selectedState={state}
        state={handleState}
        selectedCity={city}
        city={handleCity}
      />
    }
    textbox4={
      <InputText
        id={"Pincode"}
        onChange={(e) => setPinCode(e)}
        inputType={"text"}
        placeHolder="PinCode"
      />
    }
    button1={
      <FormButton
        className={"--btn"}
        text={"back"}
        onClick={() => {
          setScreen("step2");
        }}
      />
    }
    button2={
      <FormButton
        className={!isValidateStep3 ? "--btnDisabled" : "--btn"}
        isDisabled={!isValidateStep3}
        text={"next"}
        onClick={() => {
          setScreen("step4");
        }}
      />
    }
  />
  )
}

export default Step3