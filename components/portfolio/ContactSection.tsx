/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Section from "./Section";
import Footer from "./Footer";

const ContactSection = () => (
  <Section id="contact">
    <h1
      css={css`
        margin-top: 0;
        font-size: 3.75vw;
        font-weight: 800;
        margin-bottom: 2.5vw;
      `}
    >
      Contact
    </h1>

    <Footer />
  </Section>
);

export default ContactSection;
