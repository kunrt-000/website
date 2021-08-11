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
    <div className="my-4">
      <Button
        className="mb-4 md:mb-0 md:mr-4"
        href="mail:amanharwara@pm.me"
        external={true}
      >
        E-mail (amanharwara@pm.me)
      </Button>
      <Button
        className="mb-4 md:mb-0 md:mr-4"
        href="https://mastodon.social/@amanharwara"
        external={true}
        outlined
      >
        Mastodon
      </Button>
      <Button
        href="https://instagram.com/aman.harwara"
        external={true}
        outlined
      >
        Instagram
      </Button>
    </div>
  </section>
);

export default ContactSection;
