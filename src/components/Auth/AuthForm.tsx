import { ChangeEvent, FormEvent, useState } from "react";
import s from "./auth.module.scss";
import { useNavigate } from "react-router-dom";
import { addUserLS, checkAuthentication } from "../../types/ValidationAuth";

interface AuthFormProps {
  isSignUp: boolean;
}

export const AuthForm = ({ isSignUp }: AuthFormProps) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    if (isSignUp) {
      addUserLS(formData.username, formData.email, formData.password);
      alert("Регистрация прошла успешно");
    } else {
      if (
        checkAuthentication({
          email: formData.email,
          password: formData.password,
        })
      ) {
        alert("Вы успешно вошли в систему");
      } else {
        alert("Неправильный логин или пароль");
      }
    }
    navigate("/");
  };

  return (
    <form className={s.authForm} onSubmit={handleSubmit}>
      {isSignUp && (
        <label className={s.authFormLabel}>
          <p className={s.authFormLabelText}>Username</p>
          <input
            className={s.authFormInput}
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
      )}
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

      <button className={s.authFormSubmit} type="submit">
        {isSignUp ? "Register" : "Enter"}
      </button>
    </form>
  );
};
