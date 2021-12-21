import React, { useState, useEffect } from "react";
import schema from "../Validation/loginScheme";
import * as yup from "yup";

import {
  Container,
  Typography,
  Box,
  Link,
  TextField,
  CssBaseline,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={disabled}
          >
            Login
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

export default Login;
