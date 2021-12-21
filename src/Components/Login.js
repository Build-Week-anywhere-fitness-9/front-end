import React, { useState, useEffect } from "react";
import schema from "../validation/LoginSchema";
import * as yup from "yup";

const initialForm = {
  email: "",
  password: "",
};

const initialErrors = {
  email: "",
  password: "",
};

const initialDisabled = true;

function Login() {
  const [formState, setFormState] = useState(initialForm);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const validate = (name, value) => {};

  const handleChange = (evt) => {};

  const submitForm = (evt) => {};

  useEffect(() => {}, [formState]);

  return (
    <form className="login-container" onSubmit={"onSubmit"}>
      <div className="login-group">
        <label>
          <h3>Email:</h3>
          <input
            value={formState.email}
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
          />
        </label>
        <label>
          <h3>PassWword:</h3>
          <input
            value={formState.password}
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </label>
        <div className="login-button">
          <button disabled={disabled}>Login</button>
        </div>
      </div>
    </form>
  );
}

export default Login;
