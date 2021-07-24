import styles from "@/styles/index/HeroSection.module.scss";
import Button from "../Button";

const HeroSection = () => (
  <section className={styles.heroSection}>
    <div className={styles.left}>
      <div className={styles.preHeading}>Hi! I&apos;m Aman Harwara,</div>
      <h1 className={styles.heading}>
        A multi-faceted programmer &amp; artist
      </h1>
      <p className={styles.subHeading}>
        I create beautiful &amp; perfomant websites, make ambient music and
        write articles &amp; essays about a variety of topics.
      </p>
      <div className={styles.callToAction}>
        <Button href="/#work" external={false}>
          View My Work
        </Button>
        <a href="#contact" className={styles.secondaryCTA}>
          Get In Touch
        </a>
      </div>
    </div>
    <div className={styles.right}></div>
  </section>
);

export default HeroSection;
