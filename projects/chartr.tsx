import styles from "@/styles/project/Content.module.scss";
import Img from "react-optimized-image";

const Chartr = () => (
  <section className={styles.contentSection}>
    <section className={styles.splitFlexContainer}>
      <div className={styles.left}>
        <h1>About Chartr</h1>
        <p>
          Chartr is a web-app that allows users to create their own music charts
          and collages, with support for using Spotify &amp; Last.fm statistics.
        </p>
        <p>
          It was inspired by Topsters 2 and started off as an open-source
          alternative for it. And over time, I&apos;ve added extra features like
          the ability to use Spotify &amp; Last.fm stats to create charts.
        </p>
        <p>
          Chartr uses Svelte along with Typescript as the frontend framework of
          choice. It can easily be deployed on Vercel using a simple one-click
          deploy button on the repository.
        </p>
      </div>
      <div className={styles.right}>
        <Img
          webp
          src={require(`../public/img/chartr/spotify.png`)}
          alt="Spotify chart on Chartr"
        />
      </div>
    </section>
    <div className={styles.margin}>
      <Img
        webp
        src={require(`../public/img/chartr/collage.png`)}
        alt="Album collage on Chartr"
      />
    </div>
  </section>
);

export default Chartr;
