const Footer = () => (
  <footer className="bg-secondary border-t border-primary">
    <div className="container mx-auto px-6 md:px-16 py-8 md:py-12 flex flex-col md:flex-row">
      <div className="mb-5 md:mb-0 md:mr-10 leading-none font-semibold text-lg">
        © Aman Harwara
      </div>
      <div className="mb-5 md:mb-0 md:mr-10 flex flex-row md:flex-col">
        <a
          href="https://github.com/amanharwara"
          target="_blank"
          rel="noreferrer noopener"
          className="mr-8 md:mr-0 md:mb-6 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://gitlab.com/amanharwara"
          target="_blank"
          rel="noreferrer noopener"
          className="mr-8 md:mr-0 md:mb-6 hover:underline"
        >
          GitLab
        </a>
        <a
          href="https://mastodon.social/@amanharwara"
          target="_blank"
          rel="noreferrer noopener"
          className="hover:underline"
        >
          Mastodon
        </a>
      </div>
      <div className="flex flex-row md:flex-col">
        <a
          href="https://amanharwara.bandcamp.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="mr-8 md:mr-0 md:mb-6 hover:underline"
        >
          Bandcamp
        </a>
        <a
          href="https://open.spotify.com/artist/0oS1w3XT067ttzelzj67b6"
          target="_blank"
          rel="noreferrer noopener"
          className="mr-8 md:mr-0 md:mb-6 hover:underline"
        >
          Spotify
        </a>
        <a
          href="https://www.youtube.com/channel/UCHk6MIPQhtZf6zFS_FrDHKg"
          target="_blank"
          rel="noreferrer noopener"
          className="hover:underline"
        >
          YouTube
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
