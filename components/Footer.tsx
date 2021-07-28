import styles from "@/styles/Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.copyright}>© Aman Harwara</div>
      <div className={styles.linkGroup}>
        <a
          href="https://github.com/amanharwara"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.item}
        >
          GitHub
        </a>
        <a
          href="https://gitlab.com/amanharwara"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.item}
        >
          GitLab
        </a>
        <a
          href="https://mastodon.social/@amanharwara"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.item}
        >
          Mastodon
        </a>
      </div>
      <div className={styles.linkGroup}>
        <a
          href="https://amanharwara.bandcamp.com/"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.item}
        >
          Bandcamp
        </a>
        <a
          href="https://open.spotify.com/artist/0oS1w3XT067ttzelzj67b6"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.item}
        >
          Spotify
        </a>
        <a
          href="https://www.youtube.com/channel/UCHk6MIPQhtZf6zFS_FrDHKg"
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
