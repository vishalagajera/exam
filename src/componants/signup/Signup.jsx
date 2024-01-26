import React, { useMemo, useState } from "react";
import "../../Style/singup.css";
import NavbarBeforeLogin from "../login/NavbarBeforeLogin";
import {  useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";
import "../../Style/login.css";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";
import Step6 from "./Steps/Step6";


const Signup = () => {
  const [screen, setScreen] = useState("step1");
  
  // const handleSubmit = async () => {
  //   if (email !== "" && password !== "") {
  //     const result = await fetch("http://localhost:5500/add", {
  //       body: JSON.stringify({ email, password }),
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }).then((e) => e.json());
  //     if (result.success) {
  //       toast.success("Your journey is just a few moments away! ", {
  //         isLoading: true,
  //         position: "bottom-center",
  //         autoClose: 1000,
  //         hideProgressBar: true,
  //         theme: "light",
  //       });
  //     }
  //   } else {
  //     toast.error("Email and Passowrd are  ");
  //   }
  // };

  // const isValidateStep1 = useMemo(() =>
  //   isValidStep1(email, password, confirmPassword)
  // );

  const renderform = useMemo(() => { }, [screen]);

  const navigate = useNavigate();
  if (Cookies.get("token")) {
    navigate("/home");
  }

  return (
    <>
      <NavbarBeforeLogin
        leftSection={"Unlock Your World, One Login at a Time!"}
      />
      {screen === "step1" ? <Step1 setScreen={setScreen}  /> : ""}
      {screen === "step2" ? <Step2 setScreen={setScreen} /> : ""}
      {screen === "step3" ? <Step3 setScreen={setScreen} /> : ""}
      {screen === "step4" ? <Step4 setScreen={setScreen} /> : ""}
      {screen === "step5" ? <Step5 setScreen={setScreen} /> : ""}
      {screen === "step6" ? <Step6 setScreen={setScreen} /> : ""}

      {/* <Footer></Footer> */}
    </>
  );
};

export default Signup;
