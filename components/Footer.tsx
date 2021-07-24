import styles from "@/styles/Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.copyright}>© Aman Harwara</div>
      <div className={styles.linkGroup}>
        <a
          href=""
          target="_blank"
          rel="noreferrer noopener"
          className={styles.item}
        >
          GitHub
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer noopener"
          className={styles.item}
        >
          GitLab
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer noopener"
          className={styles.item}
        >
          Mastodon
        </a>
      </div>
      <div className={styles.linkGroup}>
        <a
          href=""
          target="_blank"
          rel="noreferrer noopener"
          className={styles.item}
        >
          Bandcamp
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer noopener"
          className={styles.item}
        >
          Spotify
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer noopener"
          className={styles.item}
        >
          YouTube
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
