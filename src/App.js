import React, {useState} from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import { Route, Switch } from "react-router-dom"
import UserProfilePage from "./pages/UserProfilePage"
import NavbarDisplay from "./components/Navbar"
import SignInModal from "./modals/SignInModal"
import { ToastContainer } from 'react-toastify';
import MyProfilePage from './pages/MyProfilePage'

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))

  return (
    <>
    <ToastContainer />
    <div>
      <NavbarDisplay token={token} setToken={setToken}/>
      <SignInModal/>

    <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>

            <Route path="/users/:id/:username">
              <UserProfilePage/>
            </Route>

            <Route path="/profile" >
              <MyProfilePage/>
              {/* { 
              token
              ? <MyProfilePage/>
              : <SignInForm/> 
              } */}
            </Route>

    </Switch>
  </div>
  </>
  )
}

export default App;
