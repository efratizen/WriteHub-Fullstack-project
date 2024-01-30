// בקומפוננטת הדיאלוג ForgotPasswordDialog
import React, { useState } from "react";

function ForgotPasswordDialog({ open, onClose, handleResetPassword }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handleSendResetEmail = () => {
    if (email) {
      setSubmitted(true);
      setEmailError(""); // Clear previous error
      handleResetPassword(email);
    } else {
      setEmailError("Please enter your email");
    }
  };

  return (
    <div className={`forgot-password-dialog ${open ? "open" : ""}`}>
      <div className="forgot-password-content">
        <p>Forgot Your Password?</p>
        <p>Enter your email address to reset your password.</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        {submitted && !email && (
          <div className="message-error">Please enter your email</div>
        )}
        <button onClick={handleSendResetEmail}>Send Reset Email</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default ForgotPasswordDialog;
