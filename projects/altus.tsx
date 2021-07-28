import styles from "@/styles/project/Content.module.scss";
import Img from "react-optimized-image";

const Altus = () => (
  <section className={styles.contentSection}>
    <section className={styles.splitFlexContainer}>
      <div className={styles.left}>
        <h1>About Altus</h1>
        <p>
          Altus is a free, open-source desktop client for WhatsApp with built-in
          themes and multiple account support, available for Windows, Mac &amp;
          Linux.
        </p>
        <p>
          It uses the Electron framework along Svelte for the frontend and
          Typescript to create a wrapper around WhatsApp Web which allows for
          features like custom themes and a utility bar for quick message
          formatting.
        </p>
        <p>
          Altus is still regularly maintained, with over 39,000 downloads as of
          writing.
        </p>
      </div>
      <div className={styles.right}>
        <Img
          webp
          src={require(`../public/img/altus/default.png`)}
          alt="Altus with default theme"
        />
      </div>
    </section>
    <div className={styles.margin}>
      <Img
        webp
        src={require(`../public/img/altus/dark.png`)}
        alt="Altus with dark theme"
      />
    </div>
  </section>
);

export default Altus;
