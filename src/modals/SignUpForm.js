import React, { useState } from "react";
import {Button, ModalFooter, ModalHeader, FormFeedback, FormText,FormGroup,Label,Input, ModalBody} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify"

const SignUpForm = (props) => {
    const {toggle, toggleForm} = props
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState ("");
  const [delay, setDelay] = useState(null);
  // const [delayEmail, setDelayEmail] = useState(null);
  const [usernameValid, setUsernameValid] = useState (null)
  // const [emailValid, setEmailValid] = useState (null)
  const history = useHistory()

  const checkUsername = newUsername => {
    console.log("Making API call to check username!");
    axios
      .get(
        `https://insta.nextacademy.com/api/v1/users/check_name?username=${newUsername}`
      )
      .then(response => {
        console.log(response.data);
        if (response.data.valid) {
          setUsernameValid(true);
        } else {
          setUsernameValid(false);
        }
      });
  };

  // const checkEmail = newEmail => {
  // axios
  //   .get(
  //     `https://insta.nextacademy.com/api/v1/users/check_email?email=${newEmail}`
  //   )
  //   .then(response => {
  //     console.log(response.data);
  //     if (response.data.valid) {
  //       setEmailValid(true);
  //     } else {
  //       setEmailValid(false);
  //     }
  //   });
  // };

  const handleSignUp = (e) =>{
    e.preventDefault()
    axios({
      method: 'POST',
      url: 'https://insta.nextacademy.com/api/v1/users/',
      data: {
        username: username,
        email: email,
        password: password
      }
    })
    .then(response => {
      toast.success("Signed Up successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      let user = response.data.user
      setPassword("")
      setUsername("")
      setEmail("")
      toggle() // close modal
      history.push(`/users/${user.id}`) // redirect to profilepage
    })
    .catch(error => {
      console.error(error.response.data.message) // so that we know what went wrong if the request failed
      for (let message of error.response.data.message){
        toast.error((message), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    })
  }

  const handleInput = (e) => {
    if (e.target.name === "username"){
        clearTimeout(delay)
        let newUsername = e.target.value
        setUsername(newUsername)
        const newDelay = setTimeout(() => {
          checkUsername(newUsername)
        }, 1000);
        setDelay(newDelay)
      }
      if (e.target.name === "password"){
        // clearTimeout(delayEmail)
        // let newEmail = e.target.value
        // setEmail(newEmail)
        // const newDelayEmail = setTimeout(() => {
        //   checkEmail(newEmail)
        // }, 1000);
        // setDelayEmail(newDelayEmail)
        setPassword(e.target.value)
      }
      if (e.target.name === "email"){
        setEmail(e.target.value)
      }
  }

  const getInputProp = () => {
    if (!username.length) {
        return null;
      }
  
      if (username.length <= 6) {
        return { invalid: true };
      }
  
      if (usernameValid) {
        return { valid: true };
      } else {
        return { invalid: true };
      }
  }

  const getFormFeedback = () => {
    if (!username.length) {
      return null;
    }

    if (username.length <= 6) {
      return <FormFeedback invalid>Must be at least 6 characters</FormFeedback>;
    }

    if (usernameValid) {
      return <FormFeedback valid>Sweet! That name is available</FormFeedback>;
    } else {
      return <FormFeedback invalid>Sorry! Username is taken</FormFeedback>;
    }
  };

  // const getInputEmail = () =>{
  //     if (!email.length){
  //         return null;
  //     }
  //     if (emailValid) {
  //       return { valid: true };
  //     } else {
  //       return { invalid: true };
  //     }
          
  // }

  // const getEmailFeedback = () => {
  //           if (!email.length){
  //         return null;
  //     }
  //     if (emailValid) {
  //       return <FormFeedback valid>Sweet! Welcome to join</FormFeedback>;
  //     } else {
  //       return <FormFeedback invalid>Sorry! Your email shown you already have an account</FormFeedback>;
  //     }
  // }

  return (
    <form id="signup-form" onSubmit={handleSignUp}>
    
    <div className = "d-flex flex-column mx-5 mt-5 mb-5">
    <ModalHeader>
        <h2><strong>WELCOME</strong></h2>
        <small>- Sign Up -</small>
    </ModalHeader> 
    <ModalBody>
        <FormGroup>
            <Label for="username">Username</Label>
                <Input
                    type="text"
                    name="username"
                    onChange={handleInput}
                    value={username}
                    {...getInputProp()}
                />
                {getFormFeedback()}
                <FormText>Enter a username between 6 and 20 characters</FormText>
        </FormGroup>
        <FormGroup>
            <Label for="email">Email</Label>
                <Input
                    type="text"
                    name="email"
                    onChange={handleInput}
                    value={email}
                    // {...getInputEmail()}
                />
                {/* {getEmailFeedback()} */}
        </FormGroup>  
        <FormGroup>  
            <Label for="password">Password</Label>
                <Input
                    type="text"
                    name="password"
                    onChange={handleInput}
                    value={password}
                />
        </FormGroup>
        <Input form="signup-form" type="submit" color="info" disabled={!usernameValid } value="Sign Up"/>{' '}
      </ModalBody>
      <br/>
      <ModalFooter>
            <Button color="secondary" onClick={toggleForm}>Cancel</Button>
     </ModalFooter>
     </div>
    </form>
  );
};

export default SignUpForm