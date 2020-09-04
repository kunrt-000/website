/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Section from "./Section";
import NavBar from "./NavBar";
import AnchorButton from "./AnchorButton";
import ArrowRight from "@/icons/ArrowRight";

const breakpoints = [576, 1024, 1280, 1370];

const min_media_queries = breakpoints.map(
  (bp) => `@media (min-width: ${bp}px)`
);
const max_media_queries = breakpoints.map(
  (bp) => `@media (max-width: ${bp}px)`
);

const HeroSectionEllipse = ({ ...props }) => (
  <div
    css={css`
      background: #3352c0;
      background: linear-gradient(
        136.21deg,
        #3352c0 20.58%,
        rgba(51, 82, 192, 0) 88.57%
      );
      border-radius: 50%;
      position: absolute;
      z-index: -1;
    `}
    {...props}
  ></div>
);

const HeroSection = () => (
  <Section
    id="hero-section"
    css={css`
      background-color: #0c257e;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #fff;

      #contact-button {
        margin-top: 1vw;
        font-size: 1.5vw;
      }

      ${max_media_queries[1]} {
        #contact-button {
          margin-top: 0.5rem;
          font-size: 1rem;
        }
      }
    `}
  >
    <NavBar />
    <div className="hero-section">
      <h2
        css={css`
          font-size: 4.75vw !important;
          font-weight: 700;
          margin-bottom: 1.75vw;

          ${min_media_queries[3]} {
            font-size: 5.5vw;
          }

          ${max_media_queries[1]} {
            font-size: 3rem !important;
            margin-bottom: 1rem !important;
          }
        `}
      >
        Turning Bits into Beauty
      </h2>
      <p
        css={css`
          font-size: 2vw;
          font-weight: 300;
          margin: 0;
          margin-bottom: 4vw;
          max-width: 50vw;
          ${min_media_queries[3]} {
            font-size: 2.5vw;
          }
          ${max_media_queries[1]} {
            font-size: 1.25rem !important;
            max-width: 100%;
            margin-bottom: 4.5rem !important;
          }
        `}
      >
        I’m a programmer, designer and a musician with a penchant for turning
        code into art.
      </p>
      <AnchorButton
        label="MY WORK"
        href="#work-section"
        icon={<ArrowRight />}
        iconOnRight={true}
      />
      <AnchorButton
        label="CONTACT"
        href="#contact"
        outlined
        id="contact-button"
      />
    </div>
    <HeroSectionEllipse
      css={css`
        width: 15vw;
        height: 15vw;
        top: 30%;
        left: -4%;

        ${max_media_queries[1]} {
          width: 14rem;
          height: 14rem;
          top: auto;
          bottom: -15%;
          left: -10%;
        }
      `}
    />
    <HeroSectionEllipse
      css={css`
        width: 24vw;
        height: 24vw;
        bottom: -20%;
        right: -2.5%;

        ${max_media_queries[1]} {
          width: 7rem;
          height: 7rem;
          bottom: auto;
          top: -7%;
          right: -10%;
        }
      `}
    />
    <HeroSectionEllipse
      css={css`
        width: 24vw;
        height: 24vw;
        top: -28%;
        right: 10%;
        ${max_media_queries[1]} {
          display: none;
        }
      `}
    />
  </Section>
);

export default HeroSection;
