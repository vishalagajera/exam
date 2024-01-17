import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Check = () => {
    const navigate = useNavigate()
    const checkPageIsValid =()=>{
        if ( Cookies.get("token")) {
            navigate("/home")
        }
        else {
            navigate("/login")
        }
    }
    useEffect((checkPageIsValid)  , [])
    return (
        <></>
    )
}

export default Check;



