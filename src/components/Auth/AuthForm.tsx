import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { checkAuthentication } from "../../types/ValidationAuth";
import { useAppDispatch } from "../../store/hooks";
import { addUser, authorizedUser } from "../../store/slices/userSlice";
import { errorMessageForm } from "../../utils/errorMessageForm";
import s from "./auth.module.scss";

interface AuthFormProps {
  isSignUp: boolean;
  pathname: "/signIn" | "/signUp";
}

export interface Form {
  username?: string;
  email: string;
  password: string;
}

export const AuthForm = ({ isSignUp, pathname }: AuthFormProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = pathname === "/signUp";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<Form> = (data) => {
    if (location) {
      dispatch(
        addUser({
          username: data.username,
          email: data.email,
          password: data.password,
        })
      );
      navigate("/");
      return;
    }
    if (checkAuthentication(data)) {
      dispatch(authorizedUser(data.email));
      navigate("/");
      return;
    }
    navigate("/signUp");
  };

  return (
    <form className={s.authForm} onSubmit={handleSubmit(onSubmit)}>
      {isSignUp && (
        <label className={s.authFormLabel}>
          <p className={s.authFormLabelText}>Username</p>
          <input
            className={s.authFormInput}
            type="text"
            {...register("username", {
              required: "Email is required",
              minLength: 2,
              maxLength: 10,
            })}
          />
          <span className={s.authFormErrorMessage}>
            {errors.username && (
              <p>{errorMessageForm("Name", errors.username.type)}</p>
            )}
          </span>
        </label>
      )}
      <label className={s.authFormLabel}>
        <p className={s.authFormLabelText}>Email</p>
        <input
          className={s.authFormInput}
          type="email"
          {...register("email", {
            required: "Email is required",
            minLength: 3,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Email is invalid",
            },
          })}
        />
        <span className={s.authFormErrorMessage}>
          {errors.email && (
            <p>
              {errors.email.message +
                errorMessageForm("Email", errors.email.type)}
            </p>
          )}
        </span>
      </label>
      <label className={s.authFormLabel}>
        <p className={s.authFormLabelText}>Password</p>
        <input
          className={s.authFormInput}
          type="password"
          autoComplete="on"
          {...register("password", {
            required: "Email is required",
            minLength: 5,
            maxLength: 15,
          })}
        />
        <span className={s.authFormErrorMessage}>
          {errors.password && (
            <p>{errorMessageForm("Password", errors.password.type)}</p>
          )}
        </span>
      </label>

      <button className={s.authFormSubmit} type="submit">
        {isSignUp ? "Register" : "Enter"}
      </button>
    </form>
  );
};
