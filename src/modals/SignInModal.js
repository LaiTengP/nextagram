import React from 'react';
import { Modal } from 'reactstrap';
import SignInForm from '../modals/SignInForm'

const SignInModal = (props) => {
  const {
    className,
    toggleModal,
    modal,
    toggleModalUp
  } = props;

  return (
    <div>
      <Modal isOpen={modal} toggle={toggleModal} className={className}>
        <SignInForm toggleModal={toggleModal} toggleModalUp={toggleModalUp} />
      </Modal>
    </div>
  );
}

export default SignInModal;
