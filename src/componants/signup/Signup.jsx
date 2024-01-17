import React, { useMemo, useState } from 'react'
import "../../Style/singup.css"
import NavbarBeforeLogin from '../login/NavbarBeforeLogin'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Lottie from 'lottie-react'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, toast } from 'react-toastify';
import Stepper from "react-stepper-horizontal"
import FormButton from '../FormButton'
import FormSelectBox from '../FormSelectBox'
import me from "../../assets/Je3eTqQJrt.json"
import FormContainer from '../FormContainer'
import "../../Style/login.css"
import InputText from './validateInputs'
import { useEffect } from 'react'
const Signup = () => {
    const [screen, setScreen] = useState("step1");
    console.log(screen);
    const [country, setCountry] = useState("");
    // Step 1
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // Step 2
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    // Step 3
    const [personalAddress, setPersonalAddress] = useState('');
    const [pinCode, setPinCode] = useState('');

    // Step 4 (optional)
    const [skills, setSkills] = useState('');
    const [education, setEducation] = useState('');
    const [workExperience, setWorkExperience] = useState('');
    const [resumeUpload, setResumeUpload] = useState(null);
    const [defaultWarning, setDefaultWarning] = useState("");
    const handleCountry = (country) => {
        setCountry(country)
    }
    const [state, setState] = useState("");
    const handleState = (state) => {
        setState(state)
    }
    const [city, setCity] = useState("");
    const handleCity = (city) => {
        setCity(city)
    }

    useEffect(() => {
        if (password !== confirmPassword) {
            setDefaultWarning("Passwords mismatch. Please re-enter.")
        }
        if (password === confirmPassword && password.length >= 8 && confirmPassword.length >= 8) {
            setDefaultWarning("Good to go...")
        }
        else {
            setDefaultWarning("password is required")
        }
    }, [password, confirmPassword])
    const handleSubmit = async () => {
        if (email !== "" && password !== "") {
            const result = await fetch("http://localhost:5500/add", {
                body: JSON.stringify({ email, password }),
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((e) => e.json())
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
    }
    const step1 = useMemo(() => {
        return <FormContainer
            heading={"Sign Up"}
            leftSection={<Lottie animationData={me} loop={true} style={{ height: "100%", width: "100%" }} />}
            slogan={<Stepper
                steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }, { label: "Step 4" }]}
                activeStep={0}
            />}
            navigat={<p className='--navLink'>Already have an account : <Link to={"/login"}>Login !</Link></p>}
            textbox1={<InputText
                inputType={"email "}
                placeHolder={"Email"}
                onChange={(e) => setEmail(e)}
            />}
            textbox2={
                <InputText
                    inputType={"password"}
                    password={true}
                    placeHolder={"Password"}
                    onChange={(e) => setPassword(e)}
                    warning={"Password is required. Please enter a password"}
                />
            }
            textbox3={
                <InputText
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
    }, [password, confirmPassword, email, screen])
    const step2 = useMemo(() => {
        return <FormContainer
            heading={"Sign Up"}
            leftSection={<Lottie animationData={me} loop={true} style={{ height: "100%", width: "100%" }} />}
            slogan={<Stepper
                steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }, { label: "step 4" }]}
                activeStep={1}
            />}
            navigat={<p className='--navLink'>Already have an account : <Link to={"/login"}>Login !</Link></p>}
            textbox1={<InputText
                inputType={"text"}
                placeHolder={"First Name"}
                onChange={(e) => setFirstName(e)}
            />}
            textbox2={
                <InputText
                    inputType={"text"}
                    placeHolder={"Last Name"}
                    onChange={(e) => setLastName(e)}
                />
            }
            button1={<FormButton
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
    }, [lastName, firstName, screen])
    const step3 = useMemo(() => {
        return <FormContainer
            heading={"Sign Up"}
            leftSection={<Lottie animationData={me} loop={true} style={{ height: "100%", width: "100%" }} />}

            slogan={<Stepper
                style={{ color: "#001f3f" }}
                steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }, { label: "step 4" }]}
                activeStep={2}
            />}
            textbox1={<InputText
                inputType={"text"}
                onChange={(e) => setPersonalAddress(e)}
                placeHolder={"Personal Address"}
            />}
            textbox2={<FormSelectBox
                type="text"
                className="--input"
                onchange=""
                warning="country"
                placeholder="Street Address"
                arrayKey="country"
                country={handleCountry}
                selectedCountry={country}
                selectedState={state}
                state={handleState}
                selectedCity={city}
                city={handleCity}
            />}
            textbox3={<FormSelectBox
                type="text"
                warning="states"
                className="--input"
                arrayKey="states"
                selectedCountry={country}
                country={handleCountry}
                selectedState={state}
                state={handleState}
                selectedCity={city}
                city={handleCity}
            />}
            textbox4={<FormSelectBox
                type="text"
                className="--input"
                arrayKey="cities"
                warning="city"
                selectedCountry={country}
                country={handleCountry}
                selectedState={state}
                state={handleState}
                selectedCity={city}
                city={handleCity}
            />}
            textbox6={<InputText
                onChange={(e) => setPinCode(e)}
                inputType={"text"}
                placeHolder={"PinCode"}
            />}
            button1={
                <FormButton
                    className={"--btn"}
                    text={"back"}
                    onClick={() => setScreen("step2")}
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
    }, [personalAddress, country, state, city, pinCode])
    const step4 = useMemo(() => {
        return <FormContainer
            heading={"Sign Up"}
            leftSection={<Lottie animationData={me} loop={true} style={{ height: "100%", width: "100%" }} />}

            slogan={<Stepper
                style={{ color: "#001f3f" }}
                steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }, { label: "step 4" }]}
                activeStep={3}
            />}
            textbox1={<InputText
                id="School"
                inputType={"text"}
                placeHolder="Name of the educational institution."
                require={true}
            />}
            textbox2={<InputText
                id="degree_level"
                inputType={"text"}
                placeHolder="Type of degree obtained."
                require={true}
            />}
            textbox4={<InputText
                inputType={"date"}
                label={"Start Date"}
                require={true}
            />}
            textbox5={<InputText
                inputType={"date"}
                label={"End Date"}
            />}
            textbox6={<InputText
                id="gpa"
                inputType={"text"}
                placeHolder="Enter GPA"
                require={false}
            />}
            textbox7={<InputText
                id="certifications"
                inputType={"text"}
                placeHolder="Activities and Societies"
                require={false}
            />}
            textbox8={<InputText
                id="online_courses"
                inputType={"text"}
                placeHolder="Description"
                require={false}
            />}
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
                    text={"Get Started"}
                    onClick={() => setScreen("step1")}
                />
            }
        />
    }, [])


    const renderform = useMemo(() => {
        switch (screen) {
            case "step1":
                return step1
            case "step2":
                return step2
            case "step3":
                return step3
            case "step4":
                return step4
            default:
                return <h1>not found</h1>
        }
    }, [screen, country, state, city])

    const navigate = useNavigate();
    if (Cookies.get("token")) {
        navigate("/home");
    }

    return (
        <>
            <NavbarBeforeLogin />
            {renderform}
        </>
    )
}

export default Signup