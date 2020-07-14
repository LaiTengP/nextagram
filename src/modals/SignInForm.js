import React, { useState } from "react";
import {Button, ModalFooter, ModalHeader, FormGroup,Label,Input, ModalBody} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { toast } from "react-toastify"

const SignInForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState ("");
const {toggle, toggleForm, setToken} = props

  const handleInput = (e)=>{
    if (e.target.name === "username"){
      setUsername(e.target.value)
    }
    if (e.target.name === "password"){
      setPassword(e.target.value)
    }
  }

  const handleSignIn = event => {
    event.preventDefault();
    axios({
      method: 'post',
      url: 'https://insta.nextacademy.com/api/v1/login',
      data: {
        username: username,
        password: password
      }
    })
    .then(result => {
      toast.success("Signed In successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      })
      localStorage.setItem("token", result.data.auth_token)
      setToken(result.data.auth_token)
      toggle()
    })
    .catch(() => {
      toast.error("Please ensure that you keyed in the right username or password.")
    })
  };

  return (
    <form onSubmit={handleSignIn}>
    
    <div className = "d-flex flex-column mx-5 mt-5 mb-5">
    <ModalHeader>
         <h2><strong>WELCOME BACK</strong></h2>
         <small>- Sign In -</small>
    </ModalHeader>  
    <ModalBody>
        <FormGroup>
            <Label for="username">Username</Label>
            <Input style={{width:"100%"}}
                type="text"
                name="username"
                onChange={handleInput}
                value={username}
            />
      </FormGroup>
      <FormGroup>
            <Label for="password">Password</Label>
            <Input style={{width:"100%"}}
                type="text"
                name="password"
                onChange={handleInput}
                value={password}
            />
        </FormGroup>

        <Button outline color="secondary" size="lg" block onClick={toggleForm}>
          New member? Sign Up Here!
        </Button>
        
        </ModalBody>
        <ModalFooter>
            <Button color="info" >Sign In</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </div>
    </form>
  );
};

export default SignInForm