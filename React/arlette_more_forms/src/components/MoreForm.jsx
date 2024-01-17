import React, { useState } from 'react';

const HookForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 2) {
      setFirstNameError("First Name must be at least 2 characters");
    } else {
      setFirstNameError("");
    }
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 2) {
      setLastNameError("Last Name must be at least 2 characters");
    } else {
      setLastNameError("");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 5) {
      setEmailError("Email must be at least 5 characters");
    } else {
      setEmailError("");
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" value={firstName} onChange={handleFirstName} />
        {firstNameError && <p className="error">{firstNameError}</p>}
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" value={lastName} onChange={handleLastName} />
        {lastNameError && <p className="error">{lastNameError}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmail} />
        {emailError && <p className="error">{emailError}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePassword} />
        {passwordError && <p className="error">{passwordError}</p>}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPassword} />
        {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
      </div>
    </form>
  );
};

export default HookForm;