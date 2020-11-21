/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const breakpoints = [576, 1024, 1280, 1370];

const media_queries = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const Section = ({ children, ...props }) => (
  <div
    className="section"
    {...props}
    css={css`
      height: 100vh;
      padding: 4.5vh 8.5vh;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      z-index: 0;

      h1 {
        margin-top: 0;
        font-size: 3.75vw;
        font-weight: 800;
        margin-bottom: 0.75rem;
      }

      ${media_queries[1]} {
        height: auto;
        padding: 1rem 1.25rem;

        h1 {
          font-size: 2.25rem;
        }
      }
    `}
  >
    {children}
  </div>
);

export default Section;
