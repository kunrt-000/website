/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Section from "./Section";
import HTMLIcon from "@/icons/HTML5";
import JSIcon from "@/icons/JavaScript";
import TSIcon from "@/icons/TypeScript";
import SassIcon from "@/icons/Sass";
import ReactIcon from "@/icons/React";
import VueIcon from "@/icons/Vue";

const breakpoints = [576, 1024, 1280, 1370];

const media_queries = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const StyledParagraph = ({ children, ...props }) => (
  <p
    css={css`
      font-size: 1.75vw;
      max-width: 60vw;
      margin-top: 0;
      margin-bottom: 1.75vw;

      ${media_queries[1]} {
        font-size: 1.15rem !important;
        max-width: 100%;
        margin-bottom: 0.75rem;
      }
    `}
    {...props}
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
      user-select: none;

      ${media_queries[1]} {
        font-size: 1rem;
        padding: 0.5rem;
        min-width: 5rem;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
      }
    `}
  >
    <div
      css={css`
        font-size: 3.75vw;
        margin-bottom: 0.5vw;

        ${media_queries[1]} {
          font-size: 2rem;
        }
      `}
    >
      {icon}
    </div>
    <div className="label">{label}</div>
  </div>
);

const AboutSection = () => (
  <Section
    id="about-section"
    css={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
    `}
  >
    <h1>About</h1>
    <StyledParagraph
      css={css`
        margin-top: 1vw;
      `}
    >
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
        flex-wrap: wrap;
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
