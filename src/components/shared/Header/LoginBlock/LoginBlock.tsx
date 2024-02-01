import s from "./loginBlock.module.scss";

export const LoginBlock = () => {
  return (
    <div className={s.loginWrapper}>
      <button className={s.loginSignIn}>Sign In</button>
      <button className={s.login}>Login</button>
    </div>
  );
};
