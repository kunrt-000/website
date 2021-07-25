import Head from "next/head";
import styles from "@/styles/Index.module.scss";
import Header from "@/components/Header";
import HeroSection from "@/components/index/HeroSection";
import RecentWritings from "@/components/index/RecentWritings";
import LatestMusicRelease from "@/components/index/LatestMusicRelease";
import WorkSection from "@/components/index/WorkSection";
import ContactSection from "@/components/index/ContactSection";
import Footer from "@/components/Footer";
import { GetStaticProps, GetStaticPropsContext } from "next";
import paginatedResults from "util/paginatedResults";

export default function Home({ posts }: { posts: BlogPost[] }) {
  return (
    <div id="index-page" className={styles.page}>
      <Head>
        <title>Aman Harwara</title>
        <meta name="title" content="Aman Harwara" />
        <meta
          name="description"
          content="Aman Harwara is a multi-faceted programmer, web designer, artist and writer."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amanharwara.com" />
        <meta property="og:title" content="Aman Harwara" />
        <meta
          property="og:description"
          content="Aman Harwara is a multi-faceted programmer, web designer, artist and writer."
        />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://amanharwara.com" />
        <meta property="twitter:title" content="Aman Harwara" />
        <meta
          property="twitter:description"
          content="Aman Harwara is a multi-faceted programmer, web designer, artist and writer."
        />
        <meta property="twitter:image" content="" />
      </Head>
      <Header />
      <HeroSection />
      {posts.length > 0 ? <RecentWritings posts={posts} /> : <></>}
      <LatestMusicRelease />
      <WorkSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  let { posts } = paginatedResults(1);
  //let allPosts = getAllPosts();

  //const rss = generateRSS(allPosts);

  //fs.writeFileSync("./public/feed.xml", rss);

  return {
    props: {
      posts,
    },
  };
};
