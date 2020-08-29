/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";

const breakpoints = [576, 750, 1280, 1370, 2000];
const min_media_queries = breakpoints.map(
  (bp) => `@media (min-width: ${bp}px)`
);
const max_media_queries = breakpoints.map(
  (bp) => `@media (max-width: ${bp}px)`
);

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

const AlbumGroupStyle = () => (
  <Global
    styles={css`
      .album-group {
        background: #f9f9f9;
        border: 1px solid rgba(0, 0, 0, 0.1);
        display: flex;
        padding: 1.25vw 1.5vw;
        align-items: center;
        text-decoration: none;
        color: #000;
        cursor: pointer;

        .album-list & {
          margin-bottom: 1vw;

          ${max_media_queries[1]} {
            margin-bottom: 0.75rem;
          }
        }

        &:hover {
          background: #e6e6e6;
          .title {
            text-decoration: underline;
          }
        }

        .cover {
          width: 25%;
          margin-right: 1.5vw;
          display: flex;
          background: #e6e6e6;

          img {
            width: 100%;
          }
        }

        .content {
          display: flex;
          flex-direction: column;
          max-width: 69%;

          .rank {
            font-weight: 600;
            font-size: 1.4vw;
            margin: 0 0 0.25vw 0;
          }

          .title {
            font-weight: 800;
            font-size: 2.75vw;
            overflow: hidden;
            white-space: normal;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            text-overflow: ellipsis;
            margin: 0 0 0.25vw 0;
            line-height: 1.2;
          }

          .artist {
            font-size: 1.5vw;
          }

          .genre {
            font-size: 1.3vw;
            font-weight: 100;
            margin: 0.25vw 0 0 0;
          }
        }

        ${max_media_queries[1]} {
          padding: 1rem;
          flex-direction: column;

          .cover {
            width: 50%;
            margin-bottom: 1rem;
          }

          .content {
            max-width: 100%;
            align-items: center;

            .rank {
              font-size: 1.25rem;
              margin: 0 0 0.25rem 0;
            }

            .title {
              font-size: 1.65rem;
              margin: 0 0 0.25rem 0;
              text-align: center;
              line-height: 1.3;
            }

            .artist {
              font-size: 1.25rem;
            }

            .genre {
              font-size: 1rem;
              font-weight: 100;
            }
          }
        }
      }
    `}
  />
);

export default GlobalStyle;

export { AlbumGroupStyle };
