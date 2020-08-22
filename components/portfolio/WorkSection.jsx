/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Section from "./Section";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectExtended from "./ProjectExtended";

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
    document.querySelector(".projects-grid").style.display = "none";

    // Display extended project info
    document.getElementById(project_card.dataset.id).classList.add("visible");
  } else if (e.target.closest(".close-button")) {
    e.target.closest(".project-extended").classList.remove("visible");
    document.querySelector(".projects-grid").style.display = "";
  }
};

const WorkSection = () => (
  <Section
    id="work-section"
    css={css`
      background: #0c257e;
      color: #fff;
    `}
    onClick={WorkSectionClickHandler}
  >
    <h1
      css={css`
        margin-top: 0;
        font-size: 3.75vw;
        font-weight: 800;
        margin-bottom: 1.5vw;
      `}
    >
      Work
    </h1>
    <div
      className="projects-grid"
      css={css`
        display: grid;
        width: 100%;
        height: 78vh;
        grid-template-columns: 26vw 38vw 26vw;
        grid-template-rows: 1fr 1fr;
      `}
    >
      {projects.map((project) => (
        <ProjectCard {...project} key={`card-${project.title}`} />
      ))}
    </div>
    <div
      className="selected-project-container"
      css={css`
        width: 100%;
        height: 78vh;
        position: relative;
      `}
    >
      {projects.map((project) => (
        <ProjectExtended {...project} key={`extended-${project.title}`} />
      ))}
    </div>
    <WorkSectionEllipse
      style={{
        width: "17vw",
        height: "17vw",
        top: "-6.5%",
        left: "-6%",
        background:
          "linear-gradient(136.21deg, #3352C0 20.58%, rgba(51, 82, 192, 0) 88.57%)",
      }}
    />
    <WorkSectionEllipse
      style={{
        width: "16vw",
        height: "16vw",
        top: "10%",
        right: "-6%",
        background:
          "linear-gradient(213.99deg, #3352C0 18.26%, rgba(51, 82, 192, 0) 85.56%)",
      }}
    />
    <WorkSectionEllipse
      style={{
        width: "16vw",
        height: "16vw",
        bottom: "-15%",
        left: "15%",
        background:
          "linear-gradient(55.85deg, #3352C0 20.35%, rgba(51, 82, 192, 0) 82.87%)",
      }}
    />
  </Section>
);

export default WorkSection;
