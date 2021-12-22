import * as yup from "yup";

const loginScheme = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Please enter your email address.")
    .email("Invalid email."),
  password: yup.string().trim().required("Please enter a password."),
});
export default loginScheme;
