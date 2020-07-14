import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import SignInForm from './SignInForm'
import SignUpForm from "./SignUpForm"

const AuthModal = (props) => {
  const {
    className,
    setToken
  } = props;

  const [modal, setModal] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true)

  const toggle = () => setModal(!modal);
  const toggleForm = () => setShowSignIn(!showSignIn); // toggle between SignInForm and signUpForm

  return (
    <>
      <p onClick={toggle} style={{cursor:'pointer',margin:0}}>Sign In</p>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        {
          showSignIn ?
          <SignInForm toggle={toggle} toggleForm={toggleForm} setToken={setToken}/>
          :
          <SignUpForm toggle={toggle} toggleForm={toggleForm}/>
        }
      </Modal>
    </>
  );
}

export default AuthModal;