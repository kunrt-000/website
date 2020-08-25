/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const breakpoints = [576, 1024, 1280, 1370];

const min_media_queries = breakpoints.map(
  (bp) => `@media (min-width: ${bp}px)`
);
const max_media_queries = breakpoints.map(
  (bp) => `@media (max-width: ${bp}px)`
);

type AnchorButtonProps = {
  icon?: JSX.Element;
  iconOnRight?: boolean;
  label: string;
  href: string;
  outlined?: boolean;
  style?: object;
  id?: string;
  openInNewTab?: boolean;
  className?: string;
};

const Button = ({
  href,
  label,
  icon,
  iconOnRight,
  outlined,
  style,
  id,
  openInNewTab,
  className,
}: AnchorButtonProps) => (
  <a
    href={href}
    style={style}
    id={id}
    {...(openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    className={`${outlined ? "outlined" : ""} ${
      iconOnRight ? "icon-right" : ""
    } ${className}`}
    css={css`
      background: #fff;
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
      transition: background 0.2s;
      user-select: none;

      ${min_media_queries[3]} {
        font-size: 2.25vw;
      }

      ${max_media_queries[1]} {
        font-size: 1.25rem;
        padding: 0.7rem 1rem;
        border-radius: 2px;
      }

      &:hover {
        background: #080b0d;
        color: #fff;
        fill: #fff;
      }

      &.outlined {
        background: transparent;
        border: 1px solid #fff;
        color: #fff;
        font-weight: 300;
        letter-spacing: 0.2vw;
        fill: #fff;

        &:hover {
          background: #080b0d;
          border: 1px solid #080b0d;
          color: #fff;
        }
      }

      &.icon-right {
        flex-direction: row-reverse;

        .icon {
          margin-left: 1.25vw;
          margin-right: 0;
          ${max_media_queries[1]} {
            margin-left: 0.75rem;
          }
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

          svg {
            width: 1.95vw;
            height: 1.95vw;
          }

          ${min_media_queries[3]} {
            width: 2.25vw;
            height: 2.25vw;

            & svg {
              width: 2.25vw !important;
              height: 2.25vw !important;
            }
          }

          ${max_media_queries[1]} {
            width: 1.35rem;
            height: 1.35rem;

            svg {
              width: 1.35rem;
              height: 1.35rem;
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
