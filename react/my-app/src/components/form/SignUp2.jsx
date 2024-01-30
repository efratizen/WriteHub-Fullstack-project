import React, { useState } from "react";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";

function SignUpForm2({ handleClose, handleStatus, handleSignUpSubmit, handleProfile, handleUserProperties }) {
  const [state, setState] = useState({
    literaryName: "",
    profile: null,
  });
  const [nexted, setNexted] = useState(false);
  const [valid, setValid] = useState(false);
  const [profileError, setProfileError] = useState("");
  const [literaryNameError, setLiteraryNameError] = useState("");


  // Handle data entry
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    handleUserProperties(evt);
  };
// Hundle upload image-profile
  const handleFileUpload = (e) => {
    const { name } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: e.target.files[0],
    }));
    console.log(e.target.files[0]);
    handleProfile(e.target.files[0]);
  };

// At the end of complition the step 3 
  const handleNext = (evt) => {
    evt.preventDefault();
    const { literaryName, profile } = state;

    if (profile && literaryName) {
      setValid(true);
      handleSignUpSubmit();
    } else {
      if (!profile) {
        setProfileError("Please upload a profile");
      } else {
        setProfileError("");
      }
      if (!literaryName) {
        setLiteraryNameError("Please enter a Literary Name");
      } else {
        setLiteraryNameError("");
      }
      setNexted(true);
    }
  };

// go back in steps of signIn
  const handleBack = () => {
    handleStatus(-1);
  };

  return (
    <div className="form-container form-sign-up-container">
      <form className="form-form">
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
            name="literaryName"
            value={state.literaryName}
            onChange={handleChange}
            placeholder="Literary Name"
            className="form-input"
          />
        )}
        {nexted && !valid && (
          <div className="form-message-error">{literaryNameError}</div>
        )}

        {!valid && (
          <input
            type="file"
            id="profile-image"
            name="profile"
            onChange={handleFileUpload}
            className="form-input"
          />
        )}
        {nexted && !valid && (
          <div className="form-message-error">{profileError}</div>
        )}

        <MobileStepper
          variant="dots"
          steps={3}
          position="static"
          activeStep={2}
          sx={{ maxWidth: 400, flexGrow: 1 }}
          nextButton={
            <Button size="small" onClick={handleNext} className="form-button">
              Sign Up
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} className="form-button">
              Back
            </Button>
          }
        />
      </form>
    </div>
  );
}

export default SignUpForm2;
