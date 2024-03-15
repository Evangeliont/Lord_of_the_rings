import { ReactNode } from "react";
import PropTypes from "prop-types";

interface Button {
  children?: ReactNode;
  className: string;
  onClick: () => void;
}

export const Button = ({ children, className, onClick }: Button) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  button: PropTypes.node,
};
