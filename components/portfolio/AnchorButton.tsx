/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const breakpoints = [576, 768, 992, 1370];

const media_queries = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

type AnchorButtonProps = {
  icon?: JSX.Element;
  iconOnRight?: boolean;
  label: string;
  href: string;
  outlined?: boolean;
  style?: object;
};

const Button = ({
  href,
  label,
  icon,
  iconOnRight,
  outlined,
  style,
}: AnchorButtonProps) => (
  <a
    href={href}
    style={style}
    className={`${outlined ? "outlined" : ""}${
      iconOnRight ? "icon-right" : ""
    }`}
    css={css`
      background: #f6f6f6;
      color: #000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.15vw 2vw;
      border-radius: 0.15vw;
      font-weight: 800;
      text-decoration: none;
      font-size: 1.85vw;
      width: max-content;
      letter-spacing: 0.075vw;
      transition: background 0.15s border 0.15s;

      ${media_queries[3]} {
        font-size: 2.25vw;
      }

      &:hover {
        background: #080b0d;
        color: #f6f6f6;
        fill: #f6f6f6;
      }

      &.outlined {
        background: transparent;
        border: 1px solid #f6f6f6;
        color: #f6f6f6;
        font-weight: 300;
        letter-spacing: 0.2vw;

        &:hover {
          background: #080b0d;
          border: 1px solid #080b0d;
          color: #f6f6f6;
        }
      }

      &.icon-right {
        flex-direction: row-reverse;

        & .icon {
          margin-left: 1.25vw;
          margin-right: 0;
        }
      }
    `}
  >
    {icon && (
      <div
        className="icon"
        css={css`
          width: 1.95vw;
          height: 1.95vw;
          display: flex;
          align-items: center;
          margin-right: 1.25vw;

          & svg {
            width: 1.95vw;
            height: 1.95vw;
          }

          ${media_queries[3]} {
            width: 2.25vw;
            height: 2.25vw;

            & svg {
              width: 2.25vw !important;
              height: 2.25vw !important;
            }
          }
        `}
      >
        {icon}
      </div>
    )}
    <div className="label">{label}</div>
  </a>
);

export default Button;
