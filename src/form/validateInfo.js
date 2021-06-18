export default function validateInfo(values) {
  // setting up the Regex pattern
  const emailRegex = /\S+@\S+\.\S+/;
  const passwordRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
  );

  // object for store the error messagess
  let errors = {};

  // email validation
  if (!values.email) {
    errors.email = "Email required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  // password validation
  if (!values.password) {
    errors.password = "Password is required";
  } else if (!passwordRegex.test(values.password)) {
    errors.password =
      "Password should be more than 8 characters and it should contain one upper case, one lower case, one number and 1 special character.";
  }

  // confirm password validation
  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }
  return errors;
}
