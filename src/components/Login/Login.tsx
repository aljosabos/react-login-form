import { useState } from "react";
import { validate } from "./Login.helpers";
import styles from "./Login.module.scss";
import { initialErrors } from "./Login.constants";
import { mockLogin } from "../../api/login";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const [errors, setErrors] = useState(initialErrors);

  const handleFormSubmit = async (e: React.KeyboardEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const { email, password } = Object.fromEntries(formData.entries());
    const fields = {
      email: email.toString().trim(),
      password: password.toString().trim(),
    };

    // frontend validation
    const validationErrors = validate(fields);
    const isValid = Object.values(validationErrors).every((err) => !err);
    setErrors(validationErrors);

    if (isValid) {
      const response = await mockLogin(fields);

      if (response.success) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/");
      } else {
        // show error if credentials are invalid
        setErrors((currErrors) => ({ ...currErrors, email: response.message }));
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2>Login</h2>
      <div className={styles.container}>
        <form id={styles.form} onSubmit={handleFormSubmit}>
          <div className={styles.inputWrapper}>
            <label htmlFor="email">Email</label>
            <input type="string" name="email" />
            <span className={styles.errorMsg}>{errors.email}</span>
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
            <span className={styles.errorMsg}>{errors.password}</span>
          </div>

          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
