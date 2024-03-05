import { ReactNode } from "react";
import PropTypes from "prop-types";

interface Button {
  children: ReactNode;
}

export const Button = ({ children }: Button) => {
  return <button>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node,
};
