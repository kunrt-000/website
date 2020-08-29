/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import ShareModule from "@/blog/ShareModule";

const breakpoints = [576, 750, 1280, 1370, 2000];
const min_media_queries = breakpoints.map(
  (bp) => `@media (min-width: ${bp}px)`
);
const max_media_queries = breakpoints.map(
  (bp) => `@media (max-width: ${bp}px)`
);

const ArtistRecEllipse = ({ ...props }) => (
  <div
    css={css`
      background: #1e60e0;
      border-radius: 50%;
      position: absolute;
      z-index: -1;
    `}
    {...props}
  ></div>
);

const Header = ({ postname, frontmatter, ...props }) => {
  let artist_image = require(`../../public/posts/artist/${postname}.jpg?resize&sizes[]=500&sizes[]=1000&sizes[]=2000`);

  return (
    <header
      css={css`
        background: #14387e;
        color: #fff;
        padding: 3.25% 5% 3.75%;
        min-height: 10vw;
        position: relative;
        z-index: 0;

        ${max_media_queries[1]} {
          display: flex;
          padding: 1.75rem 1.45rem;
          flex-direction: column-reverse;

          .separator {
            margin: 0 0.35rem;
          }
        }
      `}
    >
      <div
        className="left"
        css={css`
          max-width: 65%;
          box-sizing: border-box;
          display: inline-block;

          ${max_media_queries[1]} {
            max-width: 100%;
          }
        `}
      >
        <div
          className="subtitle"
          css={css`
            font-size: 1.75vw;

            ${max_media_queries[1]} {
              font-size: 1.75rem;
            }
          `}
        >
          Artist Recommendation:
        </div>
        <div
          className="title"
          css={css`
            font-weight: 800;
            font-size: 5vw;

            ${max_media_queries[1]} {
              font-size: 3rem;
              overflow: hidden;
              white-space: normal;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              text-overflow: ellipsis;
              margin: 0.5rem 0;
            }
          `}
        >
          {frontmatter.artist}
        </div>
        <div
          className="genre"
          css={css`
            font-weight: 100;
            font-size: 1.75vw;

            ${max_media_queries[1]} {
              font-size: 1.5rem;
            }
          `}
        >
          {frontmatter.genre}
        </div>
      </div>
      <div
        className="right"
        css={css`
          float: right;
          width: 25%;

          ${max_media_queries[1]} {
            display: flex;
            float: none;
            width: 15rem;
            height: 15rem;
            overflow: hidden;
            margin: 0 auto 1.75rem;
          }
        `}
      >
        <div
          className="artist-photo"
          css={css`
            &,
            img {
              width: 100%;
            }
          `}
        >
          <img
            src={artist_image.src}
            alt={frontmatter.artist}
            srcSet={artist_image.srcSet}
          />
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
        <ArtistRecEllipse
          css={css`
            width: 15vw;
            height: 15vw;
            bottom: -40%;
            left: -5%;
            background: linear-gradient(
              197deg,
              #1e60e0 21.28%,
              rgba(30, 96, 224, 0) 93.41%
            );

            ${max_media_queries[1]} {
              width: 12rem;
              height: 12rem;
              bottom: 25%;
              left: -20%;
            }
          `}
        />
        <ArtistRecEllipse
          css={css`
            width: 12vw;
            height: 12vw;
            top: -20%;
            right: 23%;
            background: linear-gradient(
              356.73deg,
              #1e60e0 2.7%,
              rgba(30, 96, 224, 0) 90.02%
            );

            ${max_media_queries[1]} {
              width: 12rem;
              height: 12rem;
              right: -5%;
            }
          `}
        />
        <ArtistRecEllipse
          css={css`
            width: 14vw;
            height: 14vw;
            bottom: -30%;
            right: -5%;
            background: linear-gradient(
              306.81deg,
              #1e60e0 25.85%,
              rgba(30, 96, 224, 0) 85.22%
            );

            ${max_media_queries[1]} {
              width: 12rem;
              height: 12rem;
              bottom: -20%;
              right: -15%;
            }
          `}
        />
      </div>
    </header>
  );
};

export default Header;
