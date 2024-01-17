import React, { useCallback, useState } from 'react'
import "../Style/login.css"
import { ToastContainer, toast } from 'react-toastify';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import NavbarBeforeLogin from './login/NavbarBeforeLogin';
import { City } from 'country-state-city';
import Lottie from 'lottie-react';
import FormContainer from './FormContainer'
import "react-toastify/dist/ReactToastify.css"
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom'
import InputText from './signup/validateInputs';
import me from "../assets/me.json"
import Check from '../Auth/check'
import FormTextboxes from './FormTextbox';
import FormButton from './FormButton';
const Login = () => {

	Check()
	const x = new Date()
	const navigate = useNavigate()
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = useCallback( async () => {
		if (email !== "" && password !== "") 
		{
		const response = await fetch("http://localhost:5500/login", {
			body: JSON.stringify({ email, password }),
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
		}).then(e => e.json()).catch((e) => {
			toast.error("Internal Server Error");
		})

			if (response !== undefined) {
				if (!response?.result) {
					Cookies.set("token", response.token, {
						expires: 7, path: "/"
					})
					toast.success("Your journey is just a few moments away! ", {
						isLoading: true,
						position: "bottom-center",
						autoClose: 1000,
						hideProgressBar: true,
						theme: "light",
					});
					setTimeout(() => {
						toast.success("Success! You're in.", {
							hideProgressBar: true
						})
					}, 2000)
					setTimeout(() => {
						navigate("/home")
					}, 4000)
				}
				else {
					toast.error("Invalid credentials");
				}
			}
		}
		else {
			toast.warn("Provide Email and Password");
		}
	} ,[email , password])


	return (
		<>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
			<NavbarBeforeLogin></NavbarBeforeLogin>
			<FormContainer
				leftSection={<Lottie animationData={me} loop={true} style={{ height: "100%", width: "100%" }} />}
				heading={"Sign In With us"}
				slogan={"Unlock Your Opportunities.Explore with Login !"}
				navigat={<p className='--navLink'>No account yet? Time to <Link to={"/signup"}>Sign Up !</Link></p>}
				textbox1={<InputText
					inputType={"email"}
					placeHolder={"Email"}
					onChange={(e) => setEmail(e)}
				/>}
				textbox2={
					<InputText
						inputType={"password"}
						password={true}
						placeHolder={"Password"}
						onChange={(e) =>setPassword(e)}
					/>
				}
				button1={
					<FormButton
						className={"--btn"}
						text={"Login"}
						onClick={() => handleSubmit()}
					/>
				}
			/>
			<Footer></Footer>
		</>
	)
}

export default Login

