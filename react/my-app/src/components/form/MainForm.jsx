import React, { useEffect, useState } from "react";
import "./styles.css";
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import SignUpForm1 from "./SignUp1";
import SignUpForm2 from "./SignUp2";
import Profile from './Profile'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from "../../redux/reducers/usersReducers";

export default function MainForm() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [num, setNum] = useState(-1);
  const myUser = useSelector((state) => state.user.myUser);
  const [user, setUser] = useState({
    "id": 0,
    "mail": "",
    "passward": "",
    "firstName": "ssdcs",
    "lastName": "dcc",
    "literaryName": "xcd",
    "phoneNumber": "sss",
    "dateOfBirth": "2020-09-09",
    "status": 1,
    "isAuthor": 0
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


// Handling situations in the login process: 
// 0 - not in the list
// 1 - not the password
//2 - loged in
  const handleLogInSubmit = async (state) => {
    try {
      const response = await axios.post(`http://localhost:8585/api/users/signIn/${state.email}/${state.password}`);
      console.log('updatedUser sign in:', response.data);
      console.log("statusssss", response.status)
      switch (response.status) {

        case 206: { setNum(1) }
        case 200: {
          setNum(2);
          const day = new Date().getDay();
          day === 1 && alert("hi today is update day")
          setIsLoggedIn(true); dispatch(updateUser(response.data))
          window.localStorage.setItem("user_id", response.data.id)
        }
      }
    } catch (error) {
      setStatus(1)
      alert(`You don't have any user`);
      setNum(0);
      return response;
      console.error('Error sign in:', error);
    }
  }

// Completing the user's data
  const handleUserProperties = (e) => {
    const updatedUser = {
      ...user,
      [e.target.name]: e.target.value,
    }
    setUser(updatedUser);
    console.log("userProp", user);
  }

// Handling situations in the login process: 
//status
//0 -have a user
//1 -sign up
  const handleSignUpSubmit = async (e) => {
    const updatedUser = {
      ...user
    };
    const formData = new FormData();
    formData.append("profile", profile);
    formData.append("user", new Blob([JSON.stringify(updatedUser)], {
      type: "application/json"
    }))
    try {
      const response = await axios.post('http://localhost:8585/api/users/signUp', formData);
      dispatch(updateUser(response.data))
      if (response.status === 201) {
        alert("You have successfully registered");
        handleClose();
        setIsSignUp(true);
        return;
      }
    }
    catch (error) {
      alert("You are already logged in");
      setStatus(0);
    }
  }

  const handleStatus = (num) => {
    setStatus(status + num)
  };


  useEffect(() => {
    handleClickOpen()

  }, [])


  const containerClass =
    "form-container " + (status > 0 ? "form-right-panel-active" : "");
  return (

    <React.Fragment>


      {myUser.id === -1 ? (
        <button
          style={{ background: "none", color: "#FAAE3E", marginTop: "20px", boxShadow: 'none' }}
          className="form-nav"
          variant="contained"
          onClick={handleClickOpen}
          color="info"
        >
          sign in | sign up
        </button>
      ) : (
        (isLoggedIn && <Profile isConnected={isLoggedIn} setIsConnected={setIsLoggedIn} />) ||
        (isSignUp && <Profile isConnected={isSignUp} setIsConnected={setIsSignUp} />)
      )}

      <Dialog

        maxWidth="sm"
        fullWidth
        className="form-dialog"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="form-alert-dialog-title">
          {"Sign in/up Form"}
        </DialogTitle>
        <DialogContent>
          <div className="form-App">
            <div className={containerClass} id="form-container">
              {status == 1 && (
                <SignUpForm handleStatus={handleStatus} handleUserProperties={handleUserProperties} handleSignUpSubmit={handleSignUpSubmit} />
              )}
              {status == 2 && (
                <SignUpForm1 handleStatus={handleStatus} handleUserProperties={handleUserProperties} />
              )}
              {status == 3 && (
                <SignUpForm2 handleClose={handleClose} handleStatus={handleStatus} handleSignUpSubmit={handleSignUpSubmit} handleProfile={(p) => (setProfile(p))} handleUserProperties={handleUserProperties}  />
              )}
              {status == 0 && <SignInForm num={num} handleNum={() => setNum(-1)} handleStatus={handleStatus} handleSignUpSubmit={handleSignUpSubmit} handleClose={handleClose} handleLogInSubmit={handleLogInSubmit} />}
              <div className="form-overlay-container">
                <div className="form-overlay">
                  {status > 0 && <div className="form-overlay-panel form-overlay-left">
                    <h1 className="form-h1">Welcome Back!</h1>
                    <p className="form-p">
                      To keep connected with us please login with your personal info
                    </p>
                    <button
                      className="form-button form-ghost"
                      id="form-signIn"
                      onClick={() => { setStatus(0) }}
                    >
                      Sign In
                    </button>
                  </div>}
                  {status == 0 && <div className="form-overlay-panel form-overlay-right">
                    <h1 className="form-h1">Hello, Friend!</h1>
                    <p className="form-p">Enter your personal details and start journey with us</p>
                    <button
                      className="form-button form-ghost "

                      onClick={() => { setStatus(1) }}
                    >
                      Sign Up
                    </button>
                  </div>}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>

      </Dialog>
    </React.Fragment>

  );
}










