// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Modal = ({ children, modal, setModal, hidden }) => {
  return (
    <>
      <div
        onClick={() => setModal(false)}
        className={`bg-white/50 fixed inset-0 z-10 ${hidden} transition-all duration-500`}
      />
      {children}
    </>
  );
};

export default Modal;
