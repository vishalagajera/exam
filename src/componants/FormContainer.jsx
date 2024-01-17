import React from 'react'
import Lottie from "lottie-react";

import me from "../assets/me.json"
import FormTextboxes from './FormTextbox';
import { Link } from 'react-router-dom';
import FormButton from './FormButton';
import { Stepper } from 'react-form-stepper';
import "../Style/login.css"
const FormContainer = ({ 
	footerSection,
	handleSubmit, 
	setEmail,
	setPassword,
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
	button,
	leftSection }) => {
	return (
		<>
			<div className='--main'>
				<div className='--left'>
					{leftSection}
				</div>
				<div className='--right'>
					<div className='--heading'>
						<span className='--headingText'>{heading}</span>
						<span className='--sloganText'>{slogan}</span>
					</div>
					<div className='Forms'>
						{textbox1}
						<div className='--form'>
							{textbox2}
							{textbox3}
						</div>
						<div className='--form'>
							{textbox4}
							{textbox5}
						</div>
							{textbox6}
							{textbox7}
							{textbox8}
							{textbox9}
							{textbox10}
						{button}
						<span>{navigat}</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default FormContainer