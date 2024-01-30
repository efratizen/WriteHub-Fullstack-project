import { PropaneSharp } from "@mui/icons-material";
import React, { useState } from "react";
import DialogActions from '@mui/material/DialogActions';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';


function SignUpForm(props) {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    mail: "",
    password: ""
  });
  const [nexted, setNexted] = useState(false);
  const [valid, setValid] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  // Handle data entry
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value
    });
    props.handleUserProperties(evt)
  };


  // Checking the correctness of the password
  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;
    return regex.test(password);
  };


  // At the end of complition the step 1 of signIn and go next to the step 2 in signIn
  const handleNext = (evt) => {
    evt.preventDefault();
    const { firstName, lastName, mail, passward } = state;
    if (firstName && lastName && mail && passward && validatePassword(passward)) {
      setValid(true);
      props.handleStatus(1)
    } else {
      if (!passward) {
        setPasswordError("Please enter a password");
      } else if (passward.length < 7) {
        setPasswordError("Password must be at least 7 characters long");
      } else if (!/[A-Z]/.test(passward)) {
        setPasswordError("Password must include at least one uppercase letter");
      } else if (!/[@$!%*?&]/.test(passward)) {
        setPasswordError("Password must include at least one special character (@$!%*?&)");
      } else {
        setPasswordError("Please enter a valid password");
      }
    }
    setNexted(true);
  };


  // go back in steps of signIn
  const handleBack = () => {

    props.handleStatus(-1)

  };


  return (
    <div className="form-container form-sign-up-container">
      <form className="form-form" >
        <h1 className="form-h1">Create Account</h1>
        {!valid && (
          <div className="form-social-container">
            <a href="#" className="form-social form-a">
              <i className="form-fab fa-facebook-f form-i" />
            </a>

            <a href="#" className="form-social form-a">
              <i className="form-fab fa-linkedin-in form-i" />
            </a>
          </div>
        )}
        {!valid && (
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
            placeholder="firstName"
            className="form-input"
          />
        )}
        {nexted && state.firstName.length == 0 && (
          <span id="form-name-error" className="form-span">Please enter first name</span>
        )}
        {!valid && (
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
            placeholder="lastName"
            className="form-input"
          />
        )}
        {nexted && state.lastName.length == 0 && (
          <span id="form-name-error" className="form-span">Please enter last name</span>
        )}
        {!valid && (
          <input
            type="email"
            name="mail"
            value={state.mail}
            onChange={handleChange}
            placeholder="Email"
            className="form-input"
          />
        )}
        {nexted && state.mail.length == 0 && (
          <span id="form-email-error" className="form-span">Please enter an email</span>
        )}
        {!valid && (
          <input
            type="password"
            name="passward"
            value={state.passward}
            onChange={handleChange}
            placeholder="Password"
            className="form-input"
          />
        )}
        {nexted && !valid && (
          <div className="form-message-error">{passwordError}</div>
        )}
        <MobileStepper
          variant="dots"
          steps={3}
          position="static"
          activeStep={0}
          sx={{ maxWidth: 400, flexGrow: 1 }}
          nextButton={
            <Button size="small" onClick={handleNext} className="form-button" >
              Next
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} className="form-button" >
              Back
            </Button>
          }
        />
      </form>
    </div>
  );
}

export default SignUpForm;
