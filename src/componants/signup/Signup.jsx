import React, { useMemo, useState } from "react";
import "../../Style/singup.css";
import NavbarBeforeLogin from "../login/NavbarBeforeLogin";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import ProfessionBox from "../ProfessionBox";
import Lottie from "lottie-react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Stepper from "react-stepper-horizontal";
import FormButton from "../FormButton";
import FormSelectBox from "../FormSelectBox";
import me from "../../assets/Je3eTqQJrt.json";
import FormContainer from "../FormContainer";
import "../../Style/login.css";
import InputText from "./validateInputs";
import { useEffect } from "react";

const Signup = () => {
  const lottie = (
    <Lottie
      animationData={me}
      loop={true}
      style={{ height: "100%", width: "100%" }}
    />
  );
  const [screen, setScreen] = useState("step1");
  // Step 1
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // Step 2
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // Step 3
  const [personalAddress, setPersonalAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  // Step 4 (optional)
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [resumeUpload, setResumeUpload] = useState(null);
  const [defaultWarning, setDefaultWarning] = useState("");
  const [profession, setProfession] = useState("");
  
  const [state, setState] = useState("");
  const handleState = (state) => {
    setState(state);
  };

  const [city, setCity] = useState("");
  const handleCity = (city) => {
    setCity(city);
  };
  useEffect(() => {
    if (password !== confirmPassword) {
      setDefaultWarning("Passwords mismatch. Please re-enter.");
    }
    if (
      password === confirmPassword &&
      password.length >= 8 &&
      confirmPassword.length >= 8
    ) {
      setDefaultWarning("Good to go...");
    } else {
      setDefaultWarning("password is required");
    }
  }, [password, confirmPassword]);

  const handleSubmit = async () => {
    if (email !== "" && password !== "") {
      const result = await fetch("http://localhost:5500/add", {
        body: JSON.stringify({ email, password }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((e) => e.json());
      console.log(result);
      if (result.success) {
        toast.success("Your journey is just a few moments away! ", {
          isLoading: true,
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: true,
          theme: "light",
        });
      }
    } else {
      toast.error("Email and Passowrd are  ");
    }
  };

  const step1 = useMemo(() => {
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
            key={Math.random()}
            inputType={"email "}
            placeHolder={"Email"}
            onChange={(e) => setEmail(e)}
          />
        }
        textbox2={
          <InputText
            key={Math.random()}
            inputType={"password"}
            password={true}
            placeHolder={"Password"}
            onChange={(e) => setPassword(e)}
            warning={"Password is required. Please enter a password"}
          />
        }
        textbox3={
          <InputText
            key={Math.random()}
            inputType={"password"}
            password={true}
            placeHolder={"Confirm Password"}
            onChange={(e) => setConfirmPassword(e)}
          />
        }
        button2={
          <FormButton
            className={"--btn"}
            text={"next"}
            onClick={() => setScreen("step2")}
          />
        }
      />
    );
  }, [password, confirmPassword, email, screen]);

  const step2 = useMemo(() => {
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
            key={Math.random()}
            inputType={"text"}
            placeHolder={"First Name"}
            onChange={(e) => setFirstName(e)}
          />
        }
        textbox2={
          <InputText
            key={Math.random()}
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
            className={"--btn"}
            text={"next"}
            onClick={() => setScreen("step3")}
          />
        }
      />
    );
  }, [lastName, firstName, screen]);

  const step3 = useMemo(() => {
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
            key={Math.random()}
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
            key={Math.random()}
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
            key={Math.random()}
            // warning="city"
            selectedState={state}
            state={handleState}
            selectedCity={city}
            city={handleCity}
          />
        }
        textbox4={
          <InputText
            key={Math.random()} 
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
            className={"--btn"}
            text={"next"}
            onClick={() => setScreen("step4")}
          />
        }
      />
    );
  }, [state , city , screen ]);

  const step4 = useMemo(() => {
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
            key={Math.random()}
            id={"School"}
            inputType={"text"}
            placeHolder="Name of the educational institution."
            require={true}
          />
        }
        textbox2={
          <InputText
            key={Math.random()}
            id={"degree_level"}
            inputType={"text"}
            placeHolder="Type of degree obtained."
            require={true}
          />
        }
        textbox4={
          <InputText
            key={Math.random()}
            inputType={"date"}
            label={"Start Date"}
            id={"start date"}
            placeHolder="start date"
          />
        }
        textbox5={
          <InputText
            key={Math.random()}
            id={"enddate"}
            inputType={"date"}
            label={"End Date"}
          />
        }
        textbox6={
          <InputText
            key={Math.random()}
            id={"gpa"}
            inputType={"text"}
            placeHolder={"Enter GPA"}
            require={false}
          />
        }
        textbox7={
          <InputText
            key={Math.random()}
            id={"certifications"}
            inputType={"text"}
            placeHolder={"Activities and Societies"}
            require={false}
          />
        }
        textbox8={
          <InputText
            key={Math.random()}
            id={"online_courses"}
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
            className={"--btn"}
            text={"Next"}
            onClick={() => setScreen("step5")}
          />
        }
      />
    );
  }, [screen]);

  const step5 = useMemo(() => {
    return (
      <FormContainer
        heading={"Sign Up"}
        leftSection={lottie}
        title={
          "Explore your work experience to discover the narrative of skills, dedication, and achievements that define my career story."
        }
        slogan={
          <Stepper
            style={{ color: "#001f3f" }}
            steps={[{}, {}, {}, {}, {}, {}]}
            activeStep={4}
          />
        }
        textbox1={
          <InputText
            key={Math.random()}
            id="JobTitle"
            inputType={"text"}
            placeHolder={"Job Title"}
            require={true}
          />
        }
        textbox2={
          <InputText
            key={Math.random()}
            id="CompanyName"
            inputType={"text"}
            placeHolder={"Company Name"}
            require={true}
          />
        }
        textbox4={
          <InputText
            key={Math.random()}
            id="StartDate"
            inputType={"date"}
            placeHolder="Start Date"
            require={true}
            label={"Start date"}
          />
        }
        textbox5={
          <InputText
            key={Math.random()}
            id="EndDate"
            inputType={"date"}
            placeHolder="End Date"
            require={true}
            label={"End date"}
          />
        }
        textbox7={
          <InputText
            key={Math.random()}
            id="Responsibilities"
            inputType={"text"}
            placeHolder="Responsibilities"
            require={false}
          />
        }
        textbox8={
          <InputText
            key={Math.random()}
            id="Achievements"
            inputType={"text"}
            placeHolder={"Achievements"}
            require={false}
          />
        }
        button1={
          <FormButton
            className={"--btn"}
            text={"back"}
            onClick={() => setScreen("step4")}
          />
        }
        button2={
          <FormButton
            className={"--btn"}
            text={"Next"}
            onClick={() => setScreen("step6")}
          />
        }
      />
    );
  }, []);

  const step6 = useMemo(() => {
    return (
      <FormContainer
        heading={"Sign Up"}
        leftSection={lottie}
        title={"Unleash your potential and let your unique abilities shine on the path to career success."}
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
            key={Math.random()}
          />
        }
        textbox2={
          <InputText
            inputType={"text"}
            placeHolder={"Enter your Skills(skill1,skill2)"}
            require={true}
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
            text={"Get Started"}
            onClick={() => setScreen("step1")}
          />
        }
      />
    );
  }, []);

  const renderform = useMemo(() => {}, [screen]);

  const navigate = useNavigate();
  if (Cookies.get("token")) {
    navigate("/home");
  }

  return (
    <>
      <NavbarBeforeLogin />
      {screen === "step1" ? step1 : ""}
      {screen === "step2" ? step2 : ""}
      {screen === "step3" ? step3 : ""}
      {screen === "step4" ? step4 : ""}
      {screen === "step5" ? step5 : ""}
      {screen === "step6" ? step6 : ""}
    </>
  );
};

export default Signup;
