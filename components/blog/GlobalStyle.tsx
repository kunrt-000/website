/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";

const GlobalStyle = () => (
  <>
    <Global
      styles={css`
        @font-face {
          font-family: "Manrope";
          font-style: normal;
          font-weight: 100 800;
          font-display: swap;
          src: url("/fonts/ManropeGX.ttf") format("truetype"),
            url("/fonts/ManropeGX.woff") format("woff");
        }

        *:focus {
          outline: 3px solid #667ceed6 !important;
        }

        html,
        body {
          width: 100%;
          font-family: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
          background: #fff;
          margin: 0;
          padding: 0;
        }
      `}
    />
    <Global
      styles={css`
        blockquote {
          margin: 0;
          padding: 0.75rem 2rem;
          background: #e4e4e4;
          border-left: 1rem solid #d6d6d6;
        }
      `}
    />
  </>
);

export default GlobalStyle;
