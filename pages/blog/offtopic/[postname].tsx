import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { GetStaticProps, GetStaticPaths } from "next";
import getStaticPropsFunc from "util/blogGetStaticProps";
import getStaticPathsFunc from "util/blogGetStaticPaths";

const AlbumPost = ({ frontmatter, markdownBody }) => {
  if (!frontmatter) return <></>;

  return <></>;
};

export const getStaticProps: GetStaticProps = getStaticPropsFunc("offtopic");

export const getStaticPaths: GetStaticPaths = getStaticPathsFunc("offtopic");

export default AlbumPost;
