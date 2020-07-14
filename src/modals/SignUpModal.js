import React from 'react';
import { Modal } from 'reactstrap';
import SignUpForm from '../modals/SignUpForm'

const SignUpModal = (props) => {
  const {
    className,
    toggleModalUp,
    modalUp
  } = props;

  return (
    <div>
      <Modal isOpen={modalUp} toggleModalUp={toggleModalUp} className={className}>
        <SignUpForm toggleModalUp={toggleModalUp}/>
      </Modal>
    </div>
  );
}

export default SignUpModal;