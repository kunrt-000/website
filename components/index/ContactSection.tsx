import Button from "../Button";

const ContactSection = () => (
  <section
    className="container mx-auto px-6 md:px-16 py-8 md:pb-12"
    id="contact"
  >
    <h1 className="font-medium">Get In Touch</h1>
    <p>
      If you would like to collaborate with me or hire me for a project, you can
      get in touch with me using any of the following:
    </p>
    <ul className="my-4" aria-label="List of ways to contact me">
      <li className="inline-flex mb-4 md:mb-0 md:mr-4">
        <Button href="mail:amanharwara@pm.me" external={true}>
          E-mail <span aria-hidden="true">(amanharwara@pm.me)</span>
        </Button>
      </li>
      <li className="inline-flex mr-4 mb-4 md:mb-0">
        <Button
          href="https://mastodon.social/@amanharwara"
          external={true}
          outlined
        >
          Mastodon
        </Button>
      </li>
      <li className="inline-flex">
        <Button
          href="https://instagram.com/aman.harwara"
          external={true}
          outlined
        >
          Instagram
        </Button>
      </li>
    </ul>
  </section>
);

export default ContactSection;
