import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import schema from "../Validation/signUpSchema";
import * as yup from "yup";
import { getUser } from '../actions/UserActions';
import { useHistory } from "react-router-dom";

import {
  Container,
  Typography,
  Box,
  Link,
  TextField,
  CssBaseline,
  Button,
} from "@mui/material";

const initialFormState = {
  email: "",
  password: ""
};

const initialFormErrors = {
  email: "",
  password: "",
};

const initialDisabled = true;

function SignUp({ getUser }) {
  const [formState, setFormState] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
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

  const handleChange = (e) => {
    let value = e.target.value;

    if (e.target.name === "instructor") value = e.target.checked;

    validate(e.target.name, value);
    setFormState({ ...formState, [e.target.name]: value });
  };

  const push = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(formState.email, formState.password);
    // push('/onboarding');
    push('/classlist');
  };

  useEffect(() => {
    schema.isValid(formState).then((valid) => setDisabled(!valid));
  }, [formState]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={formState.email}
            autoComplete="email"
            autoFocus
            onChange={handleChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={formState.password}
            autoComplete="current-password"
            onChange={handleChange}
            error={!!formErrors.password}
            helperText={formErrors.password}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={disabled}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
      <Typography
        sx={{ mt: 2 }}
        variant="body2"
        color="text.secondary"
        align="center"
      >
        {"Copyright © "}
        <Link color="inherit" href="/">
          Anywhere Fitness
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
}

export default connect(null, { getUser })(SignUp);
