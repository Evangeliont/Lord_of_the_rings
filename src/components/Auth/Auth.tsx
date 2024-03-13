import { Link } from "react-router-dom";

import s from "./auth.module.scss";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { getEmail, removeUser } from "../../store/slices/userSlice";

export const Auth = () => {
  const userEmail = useAppSelector(getEmail);
  const isAuth = !!userEmail;
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(removeUser());
  };

  return (
    <div className={s.auth}>
      {isAuth ? (
        <>
          <Link className={s.authBtnLink} to="/favorites">
            Favorites
          </Link>
          <Link className={s.authBtnLink} to="/history">
            History
          </Link>
          <Link className={s.authBtnLink} onClick={() => handleClick()} to="/">
            Log Out
          </Link>
        </>
      ) : (
        <>
          <Link className={s.authBtnLink} to="/signUp">
            Sign Up
          </Link>
          <Link className={s.authBtnLink} to="/signIn">
            Sign In
          </Link>
        </>
      )}
    </div>
  );
};
