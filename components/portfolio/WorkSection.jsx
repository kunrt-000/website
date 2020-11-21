/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Section from "./Section";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectExtended from "./ProjectExtended";

const breakpoints = [576, 1024, 1280, 1370];
const media_queries = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const WorkSectionEllipse = ({ ...props }) => (
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

const WorkSectionClickHandler = (e) => {
  if (e.target.closest(".project-card")) {
    let project_card = e.target.closest(".project-card");

    // Hide project cards
    document.querySelector(".projects-grid").style.visibility = "hidden";
    document.querySelector(".selected-project-container").style.display =
      "block";

    // Display extended project info
    document.getElementById(project_card.dataset.id).classList.add("visible");
    document.getElementById("work-section").scrollIntoView();
  } else if (e.target.closest(".close-button")) {
    e.target.closest(".project-extended").classList.remove("visible");
    document.querySelector(".selected-project-container").style.display = "";
    document.querySelector(".projects-grid").style.visibility = "";
  }
};

const WorkSectionKeyDownHanlder = (e) => {
  if (e.key === "Enter") {
    if (document.activeElement.matches(".project-card")) {
      // Hide project cards
      document.querySelector(".projects-grid").style.visibility = "hidden";
      document.querySelector(".selected-project-container").style.display =
        "block";

      // Display extended project info
      document
        .getElementById(document.activeElement.dataset.id)
        .classList.add("visible");
      document.getElementById("work-section").scrollIntoView();
    }

    if (document.activeElement.matches(".close-button")) {
      document.querySelector(".visible").classList.remove("visible");
      document.querySelector(".selected-project-container").style.display = "";
      document.querySelector(".projects-grid").style.visibility = "";
    }
  }
};

const WorkSection = () => (
  <Section
    id="work-section"
    style={{ background: "#0c257e", color: "#fff" }}
    onClick={WorkSectionClickHandler}
    onKeyDown={WorkSectionKeyDownHanlder}
    css={css`
      ${media_queries[1]} {
        min-height: 100%;
      }
    `}
  >
    <h1>Work</h1>
    <div
      className="projects-grid"
      css={css`
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 78vh;

        ${media_queries[1]} {
          flex-direction: column;
          height: auto;
        }
      `}
    >
      {projects.map((project) => (
        <ProjectCard {...project} key={`card-${project.title}`} />
      ))}
    </div>
    <div
      className="selected-project-container"
      style={{ display: "none" }}
      css={css`
      width: 91.75%;
      height: 78.5vh;
        position: absolute;
        top: 55%;
        left: auto;
        transform: translateY(-50%);
        display: none;

        ${media_queries[1]} {
          height: auto;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          transform: translateY(0);
        }
      `}
    >
      {projects.map((project) => (
        <ProjectExtended {...project} key={`extended-${project.title}`} />
      ))}
    </div>
    <WorkSectionEllipse
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
      `}
    />
    <WorkSectionEllipse
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
      `}
    />
    <WorkSectionEllipse
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
      `}
    />
  </Section>
);

export default WorkSection;
