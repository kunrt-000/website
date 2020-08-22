/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import AnchorButton from "./AnchorButton";
import GitHubIcon from "@/icons/GitHub";
import newTabIcon from "@/icons/openInNewTab";
import CloseIcon from "@/icons/Close";

const breakpoints = [576, 768, 992, 1370];

const media_queries = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const ProjectExtended = ({
  title,
  category,
  image,
  id,
  tech,
  website,
  repository,
  description,
}: Project) => (
  <div
    className="project-extended"
    css={css`
      display: grid;
      grid-template-columns: 26vw auto;
      grid-template-rows: 1fr;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 3;
      top: 0;
      left: 0;
      background: ${image.lqip};
      display: none;

      &.visible {
        display: grid !important;
      }
    `}
    id={id}
  >
    <div
      className="left"
      css={css`
        grid-column: 1 / 2;
        box-sizing: border-box;
        position: relative;
      `}
    >
      <div
        className="overlay"
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: background 0.15s;
          background: transparent;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.7) 100%
          );
          z-index: 0;
        `}
      ></div>
      <div
        className="image"
        css={css`
          box-sizing: border-box;
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: -1;
        `}
      >
        <img
          srcSet={image.srcSet}
          src={image.src}
          alt={image.alt}
          css={css`
            height: 100%;
          `}
        />
      </div>
    </div>
    <div
      className="right"
      css={css`
        padding: 3vw 3.5vw;
        display: flex;
        flex-direction: column;
        position: relative;
      `}
    >
      <div
        className="heading"
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: start;
        `}
      >
        <div
          className="title"
          css={css`
            font-weight: 800;
            font-size: 4vw;
            max-width: 45vw;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-bottom: 1.75vw;
          `}
        >
          {title}
        </div>
        <div
          className="close-button"
          css={css`
            font-weight: 800;
            font-size: 3.5vw;
            fill: #fff;
            cursor: pointer;
          `}
        >
          {CloseIcon}
        </div>
      </div>
      <div
        className="details"
        css={css`
          flex-grow: 1;
          display: flex;
        `}
      >
        <div
          className="desc-and-links"
          css={css`
            max-width: 35vw;
            min-width: 35vw;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-right: 4vw;
          `}
        >
          <div className="meta">
            <div
              className="category"
              css={css`
                border-radius: 0.1vw;
                background: transparent;
                border: 1px solid #fff;
                z-index: 2;
                padding: 0.45vw 0.65vw;
                text-transform: uppercase;
                font-size: 1vw;
                width: max-content;
                transition: background 0.15s;
                margin-bottom: 1.5vw;

                ${media_queries[3]} {
                  font-size: 1.25vw;
                  padding: 0.65vw 0.85vw;
                }
              `}
            >
              {category}
            </div>
            <div
              className="description"
              css={css`
                font-size: 1.65vw;

                ${media_queries[3]} {
                  font-size: 1.95vw;
                }
              `}
            >
              {description}
            </div>
          </div>
          <div
            className="links"
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <AnchorButton
              href={website}
              label="VISIT SITE"
              openInNewTab
              style={{
                fontWeight: "700",
                marginBottom: "1vw",
                fontSize: "1.65vw !important",
              }}
              icon={newTabIcon}
            />
            <AnchorButton
              href={repository}
              openInNewTab
              label="REPO"
              icon={GitHubIcon}
              outlined
              style={{
                padding: "1vw 1.5vw !important",
                fontSize: "1.5vw !important",
              }}
            />
          </div>
        </div>
        <div className="tech-used">
          <h3
            css={css`
              margin: 0;
              margin-bottom: 1vw;
              font-size: 1.55vw;
            `}
          >
            TECH USED:
          </h3>
          <div
            className="tech-list"
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            {tech.map((tech) => (
              <div
                className="project-tech"
                css={css`
                  display: flex;
                  font-size: 1.5vw;
                  color: #fff;
                  fill: #fff;
                  margin-bottom: 1.25vw;
                  align-items: center;

                  ${media_queries[3]} {
                    font-size: 1.85vw;
                  }
                `}
                key={tech.title}
              >
                <div
                  css={css`
                    font-size: 2vw;
                    margin-right: 0.75vw;
                    display: flex;
                  `}
                >
                  {tech.icon}
                </div>
                <div className="label">{tech.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectExtended;
