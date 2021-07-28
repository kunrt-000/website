import common from "@/styles/Index.module.scss";
import styles from "@/styles/index/ContactSection.module.scss";
import Button from "../Button";

const ContactSection = () => (
  <section className={styles.contactSection} id="contact">
    <h1 className={common.heading}>Get In Touch</h1>
    <p>
      If you would like to collaborate with me or hire me for a project, you can
      get in touch with me using any of the following:
    </p>
    <div className={styles.links}>
      <Button href="mail:amanharwara@pm.me" external={true}>
        E-mail (amanharwara@pm.me)
      </Button>
      <Button
        href="https://mastodon.social/@amanharwara"
        external={true}
        outlined
      >
        Mastodon (@amanharwara)
      </Button>
      <Button
        href="https://instagram.com/aman.harwara"
        external={true}
        outlined
      >
        Instagram (@aman.harwara)
      </Button>
    </div>
  </section>
);

export default ContactSection;
