/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Logo from "./Logo";

const MenuItem = ({ children, link, ...props }) => (
  <li
    {...props}
    css={css`
      color: #f6f6f6;
      font-weight: 300;
      font-size: 1.8vw;
      margin-right: 1.2vw;
      user-select: none;

      &.active {
        font-weight: 800;
      }
    `}
  >
    <a
      href={link}
      css={css`
        color: inherit;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      `}
    >
      {children}
    </a>
  </li>
);

const NavBar = () => (
  <div
    css={css`
      width: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}
  >
    <div className="logo">
      <Logo
        css={css`
          width: auto;
          height: 1.8vw;
        `}
      />
    </div>
    <ul
      className="menu"
      css={css`
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
      `}
    >
      <MenuItem link="/" className="active">
        HOME
      </MenuItem>
      <MenuItem link="/work">WORK</MenuItem>
      <MenuItem link="/music">MUSIC</MenuItem>
      <MenuItem link="/blog" style={{ marginRight: "0" }}>
        BLOG
      </MenuItem>
    </ul>
  </div>
);

export default NavBar;
