/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { GetStaticProps, GetStaticPaths } from "next";
import getStaticPropsFunc from "util/blogGetStaticProps";
import getStaticPathsFunc from "util/blogGetStaticPaths";
import NavBar from "@/blog/NavBar";
import Header from "@/blog/AlbumHeader";
import GlobalStyle from "@/blog/GlobalStyle";
import Footer from "@/blog/Footer";
import ShareModule from "@/blog/ShareModule";

const breakpoints = [576, 750, 1280, 1370, 2000];
const min_media_queries = breakpoints.map(
  (bp) => `@media (min-width: ${bp}px)`
);
const max_media_queries = breakpoints.map(
  (bp) => `@media (max-width: ${bp}px)`
);

const AlbumPost = ({ frontmatter, markdownBody, postname }) => {
  if (!frontmatter) return <></>;

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>
          {frontmatter.artist} - {frontmatter.title} | Acoustic Code
        </title>
      </Head>
      <NavBar />
      <Header postname={postname} frontmatter={frontmatter} />
      <main
        css={css`
          padding: 2vw 20% 2vw 16%;
          background: #f1f1f1;
          position: relative;
          display: flex;
          align-items: start;
          justify-content: space-between;

          ${max_media_queries[1]} {
            padding: 0.25rem 1.45rem;
            flex-direction: column;
          }
        `}
      >
        <ShareModule
          title={`${frontmatter.artist} - ${frontmatter.title}`}
          url={`https://amanharwara.xyz/blog/album/${postname}`}
        />
        <div
          css={css`
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
          <div
            className="mobile-article-info"
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
          <ReactMarkdown>{markdownBody}</ReactMarkdown>
        </div>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = getStaticPropsFunc("album");

export const getStaticPaths: GetStaticPaths = getStaticPathsFunc("album");

export default AlbumPost;
