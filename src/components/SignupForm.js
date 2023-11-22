import React from "react";
import FormField from "./FormField";
import "./SignupForm.css";

function SignupForm() {
  return (
    <div>
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
