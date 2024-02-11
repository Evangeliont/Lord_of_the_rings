import { Link } from "react-router-dom";
import s from "./loginBlock.module.scss";

export const LoginBlock = () => {
  return (
    <div className={s.loginWrapper}>
      <Link className={s.loginSignIn} to="singIn">
        Sign In
      </Link>
      <Link className={s.login} to="singUp">
        Login
      </Link>
    </div>
  );
};
