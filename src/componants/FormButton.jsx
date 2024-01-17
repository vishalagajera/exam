import React from 'react'

const FormButton = ({ className, onClick,  text}) => {
    return (
        <>
            <button
                className={className}
                onClick={onClick}
            >{text}</button>
        </>
    )
}

export default FormButton