/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import AnchorButton from "./AnchorButton";
import GitHubIcon from "@/icons/GitHub";
import newTabIcon from "@/icons/openInNewTab";
import CloseIcon from "@/icons/Close";

const breakpoints = [576, 1024, 1280, 1370];

const min_media_queries = breakpoints.map(
  (bp) => `@media (min-width: ${bp}px)`
);
const max_media_queries = breakpoints.map(
  (bp) => `@media (max-width: ${bp}px)`
);

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

      .website-button {
        font-weight: 700;
        margin-bottom: 1vw;
        font-size: 1.5vw !important;
      }

      .repo-button {
        padding: 1vw 1.5vw !important;
        font-size: 1.35vw !important;
      }

      ${max_media_queries[1]} {
        display: flex;
        flex-direction: column;
        display: none;

        &.visible {
          display: flex !important;
        }

        a {
          width: 100%;
          box-sizing: border-box;
          justify-content: normal;
        }

        .project-button {
          font-size: 1.35rem !important;
          letter-spacing: 0.05rem !important;

          .icon {
            margin-right: 1rem !important;

            &,
            & svg {
              width: 1.75rem;
              height: 1.75rem;
            }
          }
        }

        .repo-button {
          margin-top: 0.65rem;
          padding: 0.7rem 1rem !important;
        }
      }
    `}
    id={id}
  >
    <div
      className="close-button"
      tabIndex={0}
      css={css`
        font-weight: 800;
        font-size: 3.5vw;
        fill: #fff;
        cursor: pointer;
        display: flex;
        position: absolute;
        top: 1rem;
        right: 1rem;
        z-index: 3;

        ${max_media_queries[1]} {
          font-size: 2.5rem;
        }
      `}
    >
      {CloseIcon}
    </div>
    <div
      className="left"
      css={css`
        grid-column: 1 / 2;
        box-sizing: border-box;
        position: relative;

        ${max_media_queries[1]} {
          width: 100%;
          min-height: 30%;
        }
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

            ${max_media_queries[1]} {
              height: auto;
              width: 100%;
            }
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

        ${max_media_queries[1]} {
          padding: 1rem;
        }
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
          margin-bottom: 1vw;

          ${max_media_queries[1]} {
            position: absolute;
            bottom: 100%;
            font-size: 3rem;
            max-width: 95%;
          }
        `}
      >
        {title}
      </div>
      <div
        className="details"
        css={css`
          flex-grow: 1;
          display: flex;
          ${max_media_queries[1]} {
            flex-direction: column-reverse;
          }
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

            ${max_media_queries[1]} {
              max-width: 100%;
              min-width: 100%;
            }
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
                margin-bottom: 1vw;

                ${min_media_queries[3]} {
                  font-size: 1.25vw;
                  padding: 0.65vw 0.85vw;
                }

                ${max_media_queries[1]} {
                  font-size: 0.85rem;
                  padding: 0.25rem 0.45rem;
                  border-radius: 2px;
                  letter-spacing: 0.05rem;
                }
              `}
            >
              {category}
            </div>
            <div
              className="description"
              css={css`
                font-size: 1.65vw;

                ${min_media_queries[3]} {
                  font-size: 1.95vw;
                }

                ${max_media_queries[1]} {
                  font-size: 1.2rem;
                  margin: 1rem 0 1.35rem 0;
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
              icon={newTabIcon}
              className="project-button website-button"
            />
            <AnchorButton
              href={repository}
              openInNewTab
              label="REPO"
              icon={GitHubIcon}
              outlined
              className="project-button repo-button"
            />
          </div>
        </div>
        <div
          className="tech-used"
          css={css`
            ${max_media_queries[1]} {
              h3 {
                font-size: 1.35rem;
                margin-bottom: 0.5rem;
              }

              .tech-list {
                flex-direction: row;
                flex-wrap: wrap;
                margin-bottom: 0.25rem;
              }

              .project-tech {
                font-size: 1.25rem;
                margin-right: 0.75rem;
                margin-bottom: 0.75rem;

                .icon {
                  font-size: 1.5rem;
                  margin-right: 0.5rem;
                }
              }
            }
          `}
        >
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

                  ${min_media_queries[3]} {
                    font-size: 1.85vw;
                  }
                `}
                key={tech.title}
              >
                <div
                  className="icon"
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
