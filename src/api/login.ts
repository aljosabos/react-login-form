import { IFields } from "../components/Login/Login.types";

export const mockLogin = async (fields: IFields) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { email, password } = fields;

  const validEmail = "user@user.com";
  const validPassword = "password";

  if (email === validEmail && password === validPassword) {
    return { success: true, message: "Login successful!" };
  } else {
    return { success: false, message: "Invalid email or password" };
  }
};
