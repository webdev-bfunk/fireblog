// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const Modal = ({ children }) => {
    return (
        <>
        <div className="bg-white/50 fixed inset-0 z-10" />
            { children }
        </>
    )
}

export default Modal
