/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Section = ({ children, ...props }) => (
  <div
    className="section"
    {...props}
    css={css`
      scroll-snap-align: start end;
      height: 100vh;
      padding: 4.5vh 8.5vh;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      z-index: 0;
    `}
  >
    {children}
  </div>
);

export default Section;
