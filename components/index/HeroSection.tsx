import Img from "react-optimized-image";
import styles from "@/styles/index/HeroSection.module.scss";
import section from "@/styles/components/Section.module.scss";
import flex from "@/styles/util/Flex.module.scss";
import padding from "@/styles/util/Padding.module.scss";
import margin from "@/styles/util/Margin.module.scss";
import heading from "@/styles/typography/Heading.module.scss";

const HeroSection = () => (
  <section
    className={`${section.section} ${flex.flex} ${flex.column_s} ${flex.split} ${flex.alignCenter} ${padding.fullwidth}`}
  >
    <div className={styles.left}>
      <div className={`${styles.preHeading} ${margin.mb_100}`}>
        Hi! I&apos;m Aman Harwara,
      </div>
      <h1 className={`${heading.mw} ${heading.mw_l} ${margin.my_100}`}>
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
