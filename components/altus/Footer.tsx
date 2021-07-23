import styles from "@/styles/altus/Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.copyright}>© Aman Harwara</div>
      <a href="https://amanharwara.com" className={styles.link}>
        Website
      </a>
      <a
        href="https://github.com/amanharwara/altus"
        target="_blank"
        rel="noreferrer noopener"
        className={styles.link}
      >
        GitHub
      </a>
      <a
        href="https://github.com/amanharwara/altus"
        target="_blank"
        rel="noreferrer noopener"
        className={styles.link}
      >
        GitLab
      </a>
    </div>
  </footer>
);

export default Footer;
