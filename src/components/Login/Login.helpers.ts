import { initialErrors } from "./Login.constants";
import { IFields } from "./Login.types";


export const validate = (fields: IFields) => {
  const { email, password } = fields;
  const errors = { ...initialErrors };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(email)) {
    errors.email = "Must be a valid email";
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 3 || password.length > 10) {
    errors.password = "Password must be between 3 and 10 characters long";
  }

  return errors;
};
