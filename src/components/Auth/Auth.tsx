import { Link } from "react-router-dom";
import s from "./auth.module.scss";

export const Auth = () => {
  return (
    <div className={s.auth}>
      <Link className={s.authBtnLink} to="/signUp">
        Sing Up
      </Link>
      <Link className={s.authBtnLink} to="/signIn">
        Sing In
      </Link>
    </div>
  );
};
