/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const breakpoints = [576, 750, 1280, 1370, 2000];
const min_media_queries = breakpoints.map(
  (bp) => `@media (min-width: ${bp}px)`
);
const max_media_queries = breakpoints.map(
  (bp) => `@media (max-width: ${bp}px)`
);

const ListHeaderEllipse = ({ ...props }) => (
  <div
    css={css`
      background: #12df95;
      border-radius: 50%;
      position: absolute;
      z-index: -1;
    `}
    {...props}
  ></div>
);

const Header = ({ title }) => (
  <header
    className="header"
    css={css`
      background: #45bf93;
      padding: 3%;
      position: relative;
      min-height: 13vw;
      z-index: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      ${max_media_queries[1]} {
        padding: 1.5rem 1.45rem;
        align-items: start;
      }
    `}
  >
    <div
      className="subheading"
      css={css`
        background: #fff;
        font-weight: 200;
        font-size: 1.45vw;
        padding: 0.5vw 1vw;
        margin-bottom: 1vw;

        ${max_media_queries[1]} {
          padding: 0.5rem 1rem;
          font-size: 1.2rem;
          font-weight: 400;
          margin-bottom: 1rem;
        }
      `}
    >
      List / Ranking
    </div>
    <div
      className="title"
      css={css`
        background: #fff;
        font-weight: 800;
        font-size: 3vw;
        padding: 0.75vw 1vw;
        overflow: hidden;
        white-space: normal;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        max-width: 50%;
        text-align: center;
        box-sizing: border-box;

        ${max_media_queries[1]} {
          padding: 0.5rem 1rem;
          font-size: 2.5rem;
          max-width: 100%;
          -webkit-line-clamp: 3;
          text-align: left;
        }
      `}
    >
      {title}
    </div>
    <div
      className="circle-container"
      css={css`
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      `}
    >
      <ListHeaderEllipse
        css={css`
          width: 16vw;
          height: 16vw;
          top: -30%;
          left: -5%;
          background: linear-gradient(
            315.56deg,
            #12df95 17.1%,
            rgba(18, 223, 149, 0) 84.18%
          );

          ${max_media_queries[1]} {
            width: 10rem;
            height: 10rem;
            bottom: auto;
            left: auto;
            top: -10%;
            right: -5%;
          }
        `}
      />
      <ListHeaderEllipse
        css={css`
          width: 14vw;
          height: 14vw;
          bottom: -30%;
          left: 20%;
          background: linear-gradient(
            139.9deg,
            #12df95 15.69%,
            rgba(18, 223, 149, 0) 78.54%
          );

          ${max_media_queries[1]} {
            width: 10rem;
            height: 10rem;
            bottom: auto;
            left: auto;
            top: -10%;
            right: -5%;
          }
        `}
      />
      <ListHeaderEllipse
        css={css`
          width: 16vw;
          height: 16vw;
          bottom: -30%;
          right: -5%;
          background: linear-gradient(
            139.9deg,
            #12df95 15.69%,
            rgba(18, 223, 149, 0) 78.54%
          );

          ${max_media_queries[1]} {
            width: 11rem;
            height: 11rem;
            left: -10%;
            top: 45%;
          }
        `}
      />
      <ListHeaderEllipse
        css={css`
          width: 15vw;
          height: 15vw;
          top: -50%;
          right: 20%;
          background: linear-gradient(
            315.56deg,
            #12df95 17.1%,
            rgba(18, 223, 149, 0) 84.18%
          );

          ${max_media_queries[1]} {
            width: 10rem;
            height: 10rem;
            left: auto;
            bottom: -10%;
            right: -15%;
          }
        `}
      />
    </div>
  </header>
);

export default Header;
