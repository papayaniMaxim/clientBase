import React, { useState } from "react";
import { useSelector } from "react-redux";
import authService from "../../services/AuthService";
import { RootState } from "../../store/store";
import styles from "../Login/Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("username");
  const [password, setPassword] = useState("password");
    const { isLoading, error } = useSelector((state: RootState) => state.auth);
    

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    authService.login(email, password);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Email:
          <input
            className={styles.input}
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label className={styles.label}>
          Password:
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button className={styles.button} type="submit">
          Log in
        </button>
      </form>
      <div>{error}</div>
    </>
  );
};

export default Login;
