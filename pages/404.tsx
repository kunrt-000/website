import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/404.module.scss";
import Button from "@/components/Button";

const custom404 = () => (
  <div id="404-page" className={styles.page}>
    <Head>
      <title>404 - Page Not Found | Aman Harwara</title>
      <style>{`html,body,#__next {height: 100%}`}</style>
    </Head>
    <Header />
    <section className={styles.section}>
      <h1>404 - Page Not Found</h1>
      <p>The page you were looking for was not found.</p>
      <Button href="/" external={false}>
        Go Back Home
      </Button>
    </section>
    <Footer />
  </div>
);

export default custom404;
