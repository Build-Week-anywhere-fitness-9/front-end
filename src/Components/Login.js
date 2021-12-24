import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { getUser } from "../actions/UserActions";
import schema from "../Validation/loginScheme";
import * as yup from "yup";
import { withRouter } from 'react-router-dom';

import {
  Container,
  Typography,
  Box,
  Link,
  TextField,
  CssBaseline,
  Button
} from "@mui/material";

var firebase = require('firebase');
var firebaseui = require('firebaseui');
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
    }
  ],
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    }
  },
  signInSuccessUrl: '/classlist'
});


const initialForm = {
  email: "",
  password: "",
};

const initialErrors = {
  email: "",
  password: "",
};

function Login({ history, getUser }) {
  const [formState, setFormState] = useState(initialForm);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(true);

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
<<<<<<< HEAD
    console.log('click', formState.email, formState.password);
    getUser(formState.email, formState.password);
=======
    console.log('click', formState)
    getUser(formState.email, formState.password);
    history.push('/classList');
>>>>>>> 30129bfba390dbea17ee59b9bafe45781c3fd8de
  };

  useEffect(() => {
    schema.isValid(formState).then((valid) => setDisabled(!valid));
  }, [formState]);

  return (
    <div className="container">
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
            Login
          </Typography>
          <Box component="form" onSubmit={submitForm} noValidate sx={{ mt: 1 }}>
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
            <Link to="/classlist">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={disabled}
              >
                Login
              </Button>
            </Link>
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
    </div>
  );
}

export default connect(null, { getUser })(withRouter(Login));
