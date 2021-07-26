import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import work from "@/data/work";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/project/ProjectPage.module.scss";
import InfoSection from "@/components/projectPage/InfoSection";

const ProjectPage = ({ project }: { project: WorkProject }) => (
  <div id="project-page" className={styles.page}>
    <Head>
      <title>{project.title} | Aman Harwara</title>
      <meta name="title" content={`${project.title} | Aman Harwara`} />
      <meta name="description" content={`${project.summary}`} />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://amanharwara.com/work/${project.id}`}
      />
      <meta property="og:title" content={`${project.title} | Aman Harwara`} />
      <meta property="og:description" content={`${project.summary}`} />
      <meta property="og:image" content="" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`https://amanharwara.com/work/${project.id}`}
      />
      <meta
        property="twitter:title"
        content={`${project.title} | Aman Harwara`}
      />
      <meta property="twitter:description" content={`${project.summary}`} />
      <meta property="twitter:image" content="" />
    </Head>
    <Header />
    <InfoSection project={project} />
    <Footer />
  </div>
);

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  let project = work.find((project) => project.id === context?.params?.id);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = work.map((project) => `/work/${project.id}`);

  return {
    paths,
    fallback: false,
  };
};

export default ProjectPage;
