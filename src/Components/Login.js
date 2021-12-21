import React, { useState, useEffect } from "react";
import schema from "../validation/signUpSchema";
import * as yup from "yup";

const initialForm = {
  email: "",
  password: "",
};

const initalErrors = {
  email: "",
  password: "",
};

function Login() {
  return <div>login</div>;
}

export default Login;
