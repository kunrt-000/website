import styles from "@/styles/index/HeroSection.module.scss";
import heading from "@/styles/typography/mwHeading.module.scss";
import Button from "../Button";
import Img from "react-optimized-image";

const HeroSection = () => (
  <section className={styles.heroSection}>
    <div className={styles.left}>
      <div className={styles.preHeading}>Hi! I&apos;m Aman Harwara,</div>
      <h1 className={heading.mwHeading}>
        A multi-faceted programmer &amp; musician
      </h1>
      <p className={styles.subHeading}>
        I create beautiful &amp; perfomant websites, make ambient music and
        write articles &amp; essays about a variety of topics.
      </p>
    </div>
    <div className={styles.right}>
      <div className={styles.rect}>
        <div className={styles.center}>
          <Img
            src={require(`../../public/icons/chartr/chartr.svg`)}
            alt="Chartr logo"
          />
        </div>
      </div>
      <div className={styles.rect}>
        <Img
          webp
          src={require(`../../public/img/music/moodbender.png`)}
          alt="Moodbender cover"
          sizes={[500, 1000, 2000]}
          breakpoints={[768, 1366]}
        />
      </div>
      <div className={styles.rect}>
        <div className={styles.center}>
          <Img
            src={require(`../../public/icons/altus/altus.svg`)}
            alt="Altus logo"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
