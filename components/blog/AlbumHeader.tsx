/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const breakpoints = [576, 1024, 1280, 1370, 2000];
const min_media_queries = breakpoints.map(
  (bp) => `@media (min-width: ${bp}px)`
);
const max_media_queries = breakpoints.map(
  (bp) => `@media (max-width: ${bp}px)`
);

const AlbumHeaderEllipse = ({ ...props }) => (
  <div
    css={css`
      background: #3352c0;
      border-radius: 50%;
      position: absolute;
      z-index: -1;
    `}
    {...props}
  ></div>
);

const Header = ({ postname, frontmatter, ...props }) => {
  let cover = require(`../../public/posts/album/${postname}.jpg?resize&sizes[]=500&sizes[]=1000&sizes[]=2000&sizes[]=3000`);

  return (
    <div
      className="header"
      css={css`
        background: #a8005b;
        color: #fff;
        padding: 3.25vw 5vw;
        min-height: 10vw;
        position: relative;
        z-index: 0;

        .separator {
          margin: 0 0.5vw;
        }

        ${max_media_queries[1]} {
          padding: 1.75rem 1.45rem;

          .separator {
            margin: 0 0.35rem;
          }
        }
      `}
    >
      <div
        className="right"
        css={css`
          float: right;

          ${max_media_queries[1]} {
            float: none;
          }
        `}
      >
        <div
          className="cover-art"
          css={css`
            &,
            & img {
              width: 24vw;
            }

            ${max_media_queries[1]} {
              display: flex;
              width: 70% !important;
              margin: 0 auto 1.75rem auto;

              & img {
                width: 100%;
              }
            }
          `}
        >
          <img src={cover.src} alt={frontmatter.title} srcSet={cover.srcSet} />
        </div>
        <div
          className="article-info"
          css={css`
            display: flex;
            color: #131313;
            justify-content: center;
            margin-top: 1vw;
            font-size: 1.25vw;

            ${max_media_queries[1]} {
              display: none;
            }
          `}
        >
          <div className="author">{frontmatter.author}</div>
          <div className="separator">·</div>
          <div className="date">
            {new Date(frontmatter.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
      </div>
      <div className="left">
        <div
          className="artist"
          css={css`
            font-weight: 600;
            font-size: 2.25vw;
            margin: 0;

            ${max_media_queries[1]} {
              font-size: 1.3rem;
            }
          `}
        >
          {frontmatter.artist}
        </div>
        <div
          className="title"
          css={css`
            font-weight: 800;
            font-size: 4vw;
            margin: 0.35vw 0;
            overflow: hidden;
            white-space: normal;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            text-overflow: ellipsis;

            ${max_media_queries[1]} {
              font-size: 2.65rem;
              margin: 0.5rem 0;
            }
          `}
        >
          {frontmatter.title}
        </div>
        <div
          className="metadata"
          css={css`
            display: flex;
            font-size: 1.5vw;
            font-weight: 100;
            margin: 0.75vw 0 0 0;

            ${max_media_queries[1]} {
              font-size: 1.15rem;
            }
          `}
        >
          <div className="genre">{frontmatter.genre}</div>
          <div className="separator">·</div>
          <div className="year">{frontmatter.year}</div>
          <div className="separator">·</div>
          <div className="label">{frontmatter.label}</div>
        </div>
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
        <AlbumHeaderEllipse
          css={css`
            width: 12vw;
            height: 12vw;
            bottom: -20%;
            left: -4%;
            background: linear-gradient(
              356.73deg,
              #d60777 2.7%,
              rgba(214, 7, 119, 0) 90.02%
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
        <AlbumHeaderEllipse
          css={css`
            width: 12vw;
            height: 12vw;
            top: -30%;
            right: 23%;
            background: linear-gradient(
              197deg,
              #d60777 21.28%,
              rgba(214, 7, 119, 0) 93.41%
            );

            ${max_media_queries[1]} {
              width: 11rem;
              height: 11rem;
              left: -10%;
              top: 45%;
              right: auto;
            }
          `}
        />
        <AlbumHeaderEllipse
          css={css`
            width: 12vw;
            height: 12vw;
            bottom: -20%;
            right: -4%;
            background: linear-gradient(
              306.81deg,
              #d60777 25.85%,
              rgba(214, 7, 119, 0) 85.22%
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
    </div>
  );
};

export default Header;
