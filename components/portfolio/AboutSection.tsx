/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Section from "./Section";
import HTMLIcon from "@/icons/HTML5";
import JSIcon from "@/icons/JavaScript";
import TSIcon from "@/icons/TypeScript";
import SassIcon from "@/icons/Sass";
import ReactIcon from "@/icons/React";
import VueIcon from "@/icons/Vue";

const StyledParagraph = ({ children }) => (
  <p
    css={css`
      font-size: 1.75vw;
      max-width: 60vw;
      margin-top: 0;
      margin-bottom: 1.75vw;
    `}
  >
    {children}
  </p>
);

const TechCard = ({ icon, label }) => (
  <div
    css={css`
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 0.1vw;
      display: flex;
      flex-direction: column;
      font-size: 1.25vw;
      padding: 1vw;
      align-items: center;
      margin-right: 1vw;
      min-width: 7vw;
    `}
  >
    <div
      css={css`
        font-size: 3.75vw;
        margin-bottom: 0.5vw;
      `}
    >
      {icon}
    </div>
    <div className="label">{label}</div>
  </div>
);

const AboutSection = () => (
  <Section id="about-section" css={css``}>
    <h1
      css={css`
        margin-top: 0;
        font-size: 3.25vw;
        font-weight: 800;
        margin-bottom: 1.65vw;
      `}
    >
      About
    </h1>
    <StyledParagraph>
      I’m <b>Aman Harwara</b>, a front-end web developer, graphic designer,
      software developer and a musician.
    </StyledParagraph>
    <StyledParagraph>
      I’ve been intrigued by computers ever since I was a small child and hence
      I’ve been programming since a young age. In the recent years, I’ve been
      doing a lot of web development and designing, along with some Rust
      programming.
    </StyledParagraph>
    <StyledParagraph>
      <b>Tech I'm Proficient In:</b>
    </StyledParagraph>
    <div
      css={css`
        display: flex;
        margin-bottom: 1vw;
      `}
    >
      <TechCard icon={HTMLIcon} label="HTML/CSS" />
      <TechCard icon={JSIcon} label="JavaScript" />
      <TechCard icon={TSIcon} label="TypeScript" />
      <TechCard icon={SassIcon} label="Sass" />
      <TechCard icon={ReactIcon} label="React" />
      <TechCard icon={VueIcon} label="Vue.js" />
    </div>
  </Section>
);

export default AboutSection;
