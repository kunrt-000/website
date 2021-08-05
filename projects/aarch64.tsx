import styles from "@/styles/project/Content.module.scss";
import Img from "react-optimized-image";

const AArch64 = () => (
  <section className={styles.contentSection}>
    <section className={styles.splitFlexContainer}>
      <div className={styles.left}>
        <h1>About AArch64</h1>
        <p>
          AArch64.com is a blog run by experts at Fosshost about the challenges
          of planning, coordinating and managing 50u of Arm hardware in
          multiple, global locations.
        </p>
        <p>
          It is completely built with Next.js + Typescript using a flat-file
          approach and being mostly self-contained without using too many other
          dependencies.
        </p>
        <p>
          For the design, I went with a modern and clean look while remembering
          to maintain familiarity and good UX. A healthy amount of white space
          is used to give the design some room to breath and to keep the
          user&apos;s information overload to the minimal.
        </p>
      </div>
      <div className={styles.right}>
        <Img
          webp
          src={require(`../public/img/aarch64/thumb.png`)}
          alt="AArch64 Blog homepage"
        />
      </div>
    </section>
    <div className={styles.margin}>
      <Img
        webp
        src={require(`../public/img/aarch64/blog_post.png`)}
        alt="AArch64 Blog post"
      />
    </div>
  </section>
);

export default AArch64;
