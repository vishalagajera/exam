import React from 'react'
import "../login/login.css"
import logo from "../../logo/Logo Files/For Web/png/Color logo - no background.png"
const NavbarBeforeLogin = ({leftSection}) => {
    return (
        <>
            <div className='login--navbar'>
                <div className='logo'>
                    <img src={logo} alt="" className='img--logo' />
                </div>
                <div className='login--slogan'>{leftSection}</div>
            </div>
        </>
    )
}

export default NavbarBeforeLogin