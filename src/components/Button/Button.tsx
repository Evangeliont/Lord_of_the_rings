import PropTypes from "prop-types";
import s from "./button.module.scss";

type ButtonType = {
  name: string;
};

export const Button = ({ name }: ButtonType) => {
  return (
    <button className={s.button} type="submit">
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
