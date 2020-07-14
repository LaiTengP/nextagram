import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import { NavLink as RouterNavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import SignInModal from '../modals/SignInModal'
// import SignUpModal from '../modals/SignUpModal'
import AuthModal from '../modals/AuthModal'

const NavbarDisplay = (props) => {
  const {token, setToken} = props
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleSignOut = () => {
    localStorage.removeItem("token")
    setToken(null)
  }

  // const [modal, setModal] = useState(false);
  // const [modalUp, setModalUp] = useState(false);
  // const toggleModal = () => setModal(!modal);
  // const toggleModalUp = () => setModalUp(!modalUp);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={RouterNavLink} to="/">&#x2665; NExXxXxXxXxtaGraM &#x2665;</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={RouterNavLink} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterNavLink} to="/profile">My Profile</NavLink>
            </NavItem>
          </Nav>
          <NavbarText className= "mr-3">Welcome to World No1 App &#x2665;&#x2665;&#x2665;</NavbarText>
          {/* <Button outline color="secondary mr-3" onClick={toggleModal}>
            SignIn
            <SignInModal modal={modal} toggleModal={toggleModal} toggleModalUp={toggleModalUp}/>
          </Button>
          <Button outline color="secondary" onClick={toggleModalUp}>
            SignUp
            <SignUpModal modalUp={modalUp} toggleModalUp={toggleModalUp} />
          </Button>    */}
          <NavLink style={{color:"lavender"}}>
              {
                token
                  ? <NavLink style={{color:"lavender"}} onClick={handleSignOut}>Sign Out</NavLink> 
                  : <AuthModal setToken={setToken}/>
              }
          </NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarDisplay;