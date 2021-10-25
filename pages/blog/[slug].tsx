import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import getAllPosts from "util/getAllPosts";
import fs from "fs";
import Img from "react-optimized-image";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import rehypeSlug from "rehype-slug";
import {
  FunctionComponent,
  HTMLProps,
  createElement,
  Fragment,
  useEffect,
} from "react";
import remarkToc from "remark-toc";

type CustomMDComponent<T> = FunctionComponent<HTMLProps<T>>;

const Heading1: CustomMDComponent<HTMLHeadingElement> = ({ children, id }) => (
  <h2 className="!text-3xl md:!text-4xl md:!leading-snug" id={id}>
    {children}
  </h2>
);

const markdownProcessor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkToc)
  .use(remarkRehype)
  .use(rehypeSlug)
  .use(rehypeReact, {
    createElement: createElement,
    Fragment,
    components: {
      h1: Heading1,
    },
  });

const BlogPost = ({ post }: { post: BlogPost }) => {
  useEffect(() => {
    document.querySelector("html")?.classList.add("scroll-pt-5");
  });

  return (
    <>
      <Head>
        <title>{post.title} | Aman Harwara</title>
        <meta name="title" content={post.title} />
        <meta name="description" content={post.summary} />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://amanharwara.com/blog/${post.slug}`}
        />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta
          property="og:image"
          content={
            post.image ? `https://amanharwara.com/img/blog/${post.image}` : ""
          }
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://amanharwara.com/blog/${post.slug}`}
        />
        <meta property="twitter:title" content={post.title} />
        <meta property="twitter:description" content={post.summary} />
        <meta
          property="twitter:image"
          content={
            post.image ? `https://amanharwara.com/img/blog/${post.image}` : ""
          }
        />
      </Head>
      <section className="bg-gray-50 text-black">
        <article>
          <div className="container mx-auto px-6 md:px-16 py-8 md:py-16">
            <div className="text-gray-700 text-lg leading-none font-semibold uppercase">
              {post.tag}
            </div>
            <h1 className="inline-block my-4 text-3.5xl md:text-5.5xl leading-tight md:leading-snug font-bold">
              {post.title}
            </h1>
            <h2 className="inline-block my-2 text-xl font-medium text-gray-800 ">
              {post.summary}
            </h2>
          </div>
          {post.image && (
            <div className="w-full max-h-160 image-cover">
              <Img
                webp
                src={require(`../../public/img/blog/${post.image}`)}
                alt={`Thumbnail for the post: ${post.title}`}
              />
            </div>
          )}
          <div className="container mx-auto prose px-6 md:px-0 py-8 md:py-14">
            {markdownProcessor.processSync(post.content).result}
          </div>
        </article>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = getAllPosts();
  let slug = context?.params?.slug;

  const post = posts.find((post) => post.slug === slug);

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fs
    .readdirSync("posts")
    .map((post) => `/blog/${post.replace(".md", "")}`);

  return {
    paths,
    fallback: false,
  };
};

export default BlogPost;
