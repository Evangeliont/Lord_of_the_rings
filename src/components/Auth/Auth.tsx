import { Link } from "react-router-dom";
import s from "./auth.module.scss";

export const Auth = () => {
  return (
    <div className={s.auth}>
      <Link className={s.authBtnLink} to="/signUp">
        Sign Up
      </Link>
      <Link className={s.authBtnLink} to="/signIn">
        Sign In
      </Link>

      <Link className={s.authBtnLink} to="/favorites">
        Favorites
      </Link>
      <Link className={s.authBtnLink} to="/history">
        History
      </Link>
      <Link className={s.authBtnLink} to="/history">
        Log Out
      </Link>
    </div>
  );
};
