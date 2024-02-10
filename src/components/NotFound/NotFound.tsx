import { Link } from "react-router-dom";
import s from "./notFound.module.scss";
import { Button } from "../Button";

export const NotFound = () => {
  return (
    <div className={s.notfound}>
      <h2 className={s.error}>Error 404!</h2>
      <p className={s.errorMessage}>Nothing was found...</p>
      <div>
        <Link to="/">
          <Button name={"Back"} />
        </Link>
      </div>
    </div>
  );
};
