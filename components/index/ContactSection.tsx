import styles from "@/styles/index/ContactSection.module.scss";
import Button from "../Button";
import section from "@/styles/components/Section.module.scss";
import padding from "@/styles/util/Padding.module.scss";
import margin from "@/styles/util/Margin.module.scss";

const ContactSection = () => (
  <section className={`${section.section} ${padding.fullwidth}`} id="contact">
    <h1>Get In Touch</h1>
    <p>
      If you would like to collaborate with me or hire me for a project, you can
      get in touch with me using any of the following:
    </p>
    <div className={`${styles.links} ${margin.my_100}`}>
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
