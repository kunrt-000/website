/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const breakpoints = [576, 1024, 1280, 1370];
const min_media_queries = breakpoints.map(
  (bp) => `@media (min-width: ${bp}px)`
);
const max_media_queries = breakpoints.map(
  (bp) => `@media (max-width: ${bp}px)`
);

const MenuItem = ({ children, link, ...props }) => (
  <li
    {...props}
    css={css`
      color: #fff;
      font-weight: 300;
      font-size: 1.5vw;
      margin-right: 1.2vw;
      user-select: none;

      &.active {
        font-weight: 800;
      }

      ${max_media_queries[1]} {
        font-size: 1.35rem;
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
    className="navbar"
    css={css`
      background: #131313;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.65vw 3vw;
      position: relative;

      ${max_media_queries[1]} {
        padding: 0.5rem 1rem;
      }
    `}
  >
    <div className="left">
      <div
        className="title"
        css={css`
          font-size: 1.75vw;
          font-weight: 800;
          user-select: none;
          ${max_media_queries[1]} {
            font-size: 1.25rem;
          }
        `}
      >
        &lt;Acoustic Code&gt;
      </div>
    </div>
    <nav
      css={css`
        & label,
        #hamburger {
          display: none;
        }

        ${max_media_queries[1]} {
          & label {
            display: flex;
            color: white;
            font-style: normal;
            font-size: 1.5rem;
          }

          .menu {
            display: none;
          }
          & input:checked ~ .menu {
            display: flex;
            width: 100%;
            position: absolute;
            left: 0;
            top: 100%;
            background: #131313;
            justify-content: center;
            padding: 0.75rem 0.25rem;
            box-sizing: border-box;
            z-index: 2;

            li {
              margin-right: 1rem;
            }
          }
        }
      `}
    >
      <label htmlFor="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger" />
      <ul
        className="menu"
        css={css`
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
        `}
      >
        <MenuItem link="/blog">HOME</MenuItem>
        <MenuItem link="/archive">ARCHIVE</MenuItem>
        <MenuItem link="/blog/about">ABOUT</MenuItem>
      </ul>
    </nav>
  </div>
);

export default NavBar;
