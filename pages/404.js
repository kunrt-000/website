/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";
import Head from "next/head";
import Section from "@/portfolio/Section";

const breakpoints = [576, 1024, 1280, 1370];
const media_queries = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const _404Ellipse = ({ ...props }) => (
  <div
    css={css`
      background: #3352c0;
      border-radius: 50%;
      position: absolute;
      z-index: -2;
    `}
    {...props}
  ></div>
);

const _404 = () => (
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
        html,
        body {
          margin: 0;
          font-family: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
        }
        .section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        a {
          font-size: 1.5vw;
          color: #fff;
          margin-top: 1.5vw;
        }
        ${media_queries[1]} {
          html,
          body,
          #__next {
            height: 100% !important;
          }
          .section {
            height: 100% !important;
          }
          a {
            font-size: 1.25rem;
          }
        }
      `}
    />
    <Head>
      <title>404: Page Not Found | Aman Harwara</title>
    </Head>
    <Section style={{ background: "#0c257e", color: "#fff" }}>
      <h1>404: Page Not Found</h1>
      <a href="/">Click here to return to the homepage.</a>
      <_404Ellipse
        css={css`
          width: 17vw;
          height: 17vw;
          top: -6.5%;
          left: -6%;
          background: linear-gradient(
            136.21deg,
            #3352c0 20.58%,
            rgba(51, 82, 192, 0) 88.57%
          );

          ${media_queries[1]} {
            width: 15rem;
            height: 15rem;
            top: auto;
            bottom: -20%;
            left: -20%;
          }
        `}
      />
      <_404Ellipse
        css={css`
          width: 16vw;
          height: 16vw;
          top: 10%;
          right: -6%;
          background: linear-gradient(
            213.99deg,
            #3352c0 18.26%,
            rgba(51, 82, 192, 0) 85.56%
          );

          ${media_queries[1]} {
            display: none;
          }
        `}
      />
      <_404Ellipse
        css={css`
          width: 16vw;
          height: 16vw;
          bottom: -15%;
          left: 15%;
          background: linear-gradient(
            55.85deg,
            #3352c0 20.35%,
            rgba(51, 82, 192, 0) 82.87%
          );

          ${media_queries[1]} {
            width: 15rem;
            height: 15rem;
            bottom: auto;
            left: auto;
            top: -20%;
            right: -20%;
          }
        `}
      />
    </Section>
  </>
);

export default _404;
