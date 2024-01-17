import React, { useState } from 'react'
import "../../Style/login.css"
import { Link } from 'react-router-dom';

const SignupFirstNameLastName = ({ setScreen }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        const result = fetch("http://localhost:5500/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password,
                "email": email
            })
        }).then((e) => e.json()).catch((e) => console.log(e))
        result.then(e => {
            if (e.code === 11000) {
                alert("Email is already available");
            }
            else {
                alert("data saved successfully")
            }
        }).catch(e => alert(e));

    }

    return (
        <>
           
        </>
    )
}

export default SignupFirstNameLastName