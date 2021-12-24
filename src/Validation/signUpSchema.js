import * as yup from "yup";

const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Please enter your email address.")
    .email("Invalid email."),
  password: yup
    .string()
    .required("Please enter a password.")
    .min(6, "Your password must be at least 6 characters long"),
});

export default signUpSchema;
