import React, { useState, useEffect } from "react";
import schema from "../Validation/loginScheme";
import * as yup from "yup";
import { SchemaRounded } from "@mui/icons-material";

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

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((error) =>
        setFormErrors({ ...formErrors, [name]: error.errors[0] })
      );
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    validate(name, value);
    setFormState({ ...formState, [name]: value });
  };

  const submitForm = (evt) => {
    evt.preventDefault();
  };

  useEffect(() => {
    schema.isValid(formState).then((valid) => setDisabled(!valid));
  }, [formState]);

  return (
    <form className="login-container" onSubmit={submitForm}>
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
