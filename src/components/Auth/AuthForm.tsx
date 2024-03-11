import { ChangeEvent, FormEvent, useState } from "react";
import s from "./auth.module.scss";
import { useAuthUser } from "../../hooks/useAuthUser";

import { useAppDispatch } from "../../store/hooks";
import { UserState, addUser } from "../../store/slices/uesrSlice";

export const AuthForm = () => {
  const { username, email, password } = useAuthUser();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<UserState>({
    username: username || "",
    email: email || "",
    password: password || "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addUser(formData));
    console.log("Form submitted:", formData);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className={s.authForm} onSubmit={handleSubmit}>
      <div className={s.authFormWrapper}>
        <label className={s.authFormLabel}>
          <p className={s.authFormLabelText}>Login</p>
          <input
            className={s.authFormInput}
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label className={s.authFormLabel}>
          <p className={s.authFormLabelText}>Email</p>
          <input
            className={s.authFormInput}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label className={s.authFormLabel}>
          <p className={s.authFormLabelText}>Password</p>
          <input
            className={s.authFormInput}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
      </div>

      <button className={s.authFormSubmit} type="submit">
        Submit
      </button>
    </form>
  );
};
