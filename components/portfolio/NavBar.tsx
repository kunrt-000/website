/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Logo from "./Logo";

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
      font-size: 1.8vw;
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
    css={css`
      width: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      ${max_media_queries[1]} {
        margin-bottom: 2.5rem;
      }
    `}
  >
    <div
      className="logo"
      css={css`
        display: flex;
        font-weight: 800;
        font-size: 2vw;
        ${max_media_queries[1]} {
          font-size: 1.5rem;
        }
      `}
    >
      Aman Harwara
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
            background: #3352c0;
            justify-content: center;
            padding: 1rem;
            box-sizing: border-box;

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
        <MenuItem link="/" className="active">
          HOME
        </MenuItem>
        <MenuItem link="#work-section">WORK</MenuItem>
        <MenuItem link="#contact">CONTACT</MenuItem>
      </ul>
    </nav>
  </div>
);

export default NavBar;
