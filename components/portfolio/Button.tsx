/** @jsx jsx */
import { css, jsx } from "@emotion/core";

type ButtonProps = {
  icon?: JSX.Element;
  iconOnRight?: boolean;
  label: string;
};

const Button = ({ label, icon, iconOnRight, ...props }: ButtonProps) => (
  <button type="button" {...props}>
    <div className="icon">{icon}</div>
    <div className="label">{label}</div>
  </button>
);

export default Button;
