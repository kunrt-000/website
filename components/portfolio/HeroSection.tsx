/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Section from "./Section";
import NavBar from "./NavBar";
import AnchorButton from "./AnchorButton";
import ArrowRight from "@/icons/ArrowRight";

const breakpoints = [576, 768, 992, 1370];

const media_queries = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const HeroSectionEllipse = ({ ...props }) => (
  <div
    css={css`
      background: #3352c0 20.58%;
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
      color: #f6f6f6;
    `}
  >
    <NavBar />
    <div className="hero-section">
      <h1
        css={css`
          font-size: 4.5vw;
          ${media_queries[3]} {
            font-size: 5.5vw;
          }
          margin-bottom: 1vw;
        `}
      >
        Turning Bits into Beauty
      </h1>
      <p
        css={css`
          font-size: 2vw;
          ${media_queries[3]} {
            font-size: 2.5vw;
          }
          font-weight: 300;
          max-width: 50vw;
          margin-bottom: 4vw;
        `}
      >
        I’m a programmer, designer and a musician with a penchant for turning
        code into art.
      </p>
      <AnchorButton
        label="MY WORK"
        href="#work"
        icon={<ArrowRight />}
        iconOnRight={true}
      />
      <AnchorButton
        label="CONTACT"
        href="#contact"
        outlined
        style={{ marginTop: "1vw", fontSize: "1.5vw" }}
      />
    </div>
    <HeroSectionEllipse
      style={{ width: "15vw", height: "15vw", top: "30%", left: "-4%" }}
    />
    <HeroSectionEllipse
      style={{ width: "24vw", height: "24vw", bottom: "-20%", right: "-2.5%" }}
    />
    <HeroSectionEllipse
      style={{ width: "24vw", height: "24vw", top: "-28%", right: "10%" }}
    />
  </Section>
);

export default HeroSection;
