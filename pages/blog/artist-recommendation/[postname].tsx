/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Head from "next/head";
import ReactMarkdown from "react-markdown/with-html";
import { GetStaticProps, GetStaticPaths } from "next";
import getStaticPropsFunc from "util/blogGetStaticProps";
import getStaticPathsFunc from "util/blogGetStaticPaths";
import NavBar from "@/blog/NavBar";
import GlobalStyle, { AlbumGroupStyle } from "@/blog/GlobalStyle";
import Footer from "@/blog/Footer";
import ShareModule from "@/blog/ShareModule";
import Header from "@/blog/ArtistRecHeader";

const breakpoints = [576, 750, 1280, 1370, 2000];
const min_media_queries = breakpoints.map(
  (bp) => `@media (min-width: ${bp}px)`
);
const max_media_queries = breakpoints.map(
  (bp) => `@media (max-width: ${bp}px)`
);

const ArtistRecPost = ({ frontmatter, markdownBody, postname }) => (
  <>
    <GlobalStyle />
    <AlbumGroupStyle />
    <Head>
      <title>{frontmatter.title} | Acoustic Code</title>
    </Head>
    <NavBar />
    <Header frontmatter={frontmatter} postname={postname} />
    <main
      css={css`
        padding: 1% 5% 2%;
        display: flex;
        align-items: start;
      `}
    >
      <div
        css={css`
          flex-grow: 1;

          p {
            font-size: 1.15rem;
            line-height: 1.4;
          }

          ${min_media_queries[3]} {
            p {
              font-size: 1.95rem;
            }
          }

          ${min_media_queries[4]} {
            p {
              font-size: 3.75rem;
            }
          }

          ${max_media_queries[1]} {
            font-size: 1rem;
          }
        `}
      >
        <ShareModule
          title={frontmatter.title}
          url={`https://amanharwara.xyz/blog/artist-recommendation/${postname}`}
          css={css`
            color: #131313;
            position: relative;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;

            & > * {
              margin-right: 0.5vw;
            }

            .share-title {
              margin-right: 1vw;
            }
          `}
        />
        <div
          className="article-info"
          css={css`
            display: flex;
            color: #585858;
            margin-top: 1rem;
            font-size: 1rem;
            .separator {
              margin: 0 0.35rem;
            }
            flex-wrap: wrap;

            ${min_media_queries[3]} {
              font-size: 1.75rem;
              .separator {
                margin: 0 0.75rem;
              }
            }
            ${min_media_queries[4]} {
              font-size: 3.25rem;
              .separator {
                margin: 0 1.25rem;
              }
            }
          `}
        >
          <div className="author">Written by {frontmatter.author}</div>
          <div className="separator">·</div>
          <div className="date">
            {new Date(frontmatter.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
        <ReactMarkdown escapeHtml={false}>{markdownBody}</ReactMarkdown>
      </div>
    </main>
    <Footer />
  </>
);

export const getStaticProps: GetStaticProps = getStaticPropsFunc(
  "artist-recommendation"
);

export const getStaticPaths: GetStaticPaths = getStaticPathsFunc(
  "artist-recommendation"
);

export default ArtistRecPost;
