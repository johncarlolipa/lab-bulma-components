// src/components/SignupForm.js

import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import "./SignupForm.css"; // Import the CSS file

function SignupForm() {
  return (
    <div>
      {/* <Navbar /> */}
      <h1 className="sign-up">Sign Up</h1>
      <form>
        <FormField label="Name" type="text" placeholder="Enter your name" />
        <FormField label="Email" type="email" placeholder="Enter your email" />
        <FormField
          label="Password"
          type="password"
          placeholder="Enter your password"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignupForm;
