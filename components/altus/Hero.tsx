import styles from "@/styles/altus/Hero.module.scss";
import Button from "../Button";
import Image from "next/image";
import defaultPic from "@/img/altus/default.png";
import darkPic from "@/img/altus/dark.png";

const Hero = () => (
  <section className={styles.heroSection}>
    <div className={styles.left}>
      <h1 className={styles.heading}>
        A feature-rich desktop client for WhatsApp Web
      </h1>
      <div className={styles.subheading}>
        Altus is a cross-platform desktop client for WhatsApp Web with support
        for multiple accounts and custom themes.
      </div>
      <Button href="#downloads">
        <div className="icon"></div>
        <div className="label">Download Now</div>
      </Button>
    </div>
    <div className={styles.right}>
      <div className={styles.heroImages}>
        <div className={styles.heroImageDefault}>
          <Image
            src={defaultPic}
            alt="Screenshot of Altus with the default theme"
          />
        </div>
        <div className={styles.heroImageDark}>
          <Image src={darkPic} alt="Screenshot of Altus with the dark theme" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
