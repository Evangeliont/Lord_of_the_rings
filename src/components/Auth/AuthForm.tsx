import { FormEvent } from "react";
import s from "./auth.module.scss";

export const AuthForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className={s.authForm} onSubmit={handleSubmit}>
      <label className={s.authFormLabel}>
        <p className={s.authFormLabelText}>Login</p>
        <input className={s.authFormInput} type="text" />
      </label>

      <label className={s.authFormLabel}>
        <p className={s.authFormLabelText}>Password</p>
        <input className={s.authFormInput} type="password" />
      </label>

      <button className={s.authFormSubmit} type="submit">
        Submit
      </button>
    </form>
  );
};
