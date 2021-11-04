const Footer = () => (
  <footer className="bg-secondary border-t border-primary">
    <div className="container mx-auto px-6 md:px-16 py-8 md:py-12 flex flex-col md:flex-row">
      <div className="mb-5 md:mb-0 md:mr-10 leading-none font-semibold text-lg">
        © Aman Harwara
      </div>
      <ul
        className="md:mt-0 mb-5 md:mb-0 md:mr-10 flex flex-row md:flex-col"
        aria-label="List of social media links"
      >
        <li className="mr-8 md:mr-0 md:mb-6 hover:underline">
          <a
            href="https://github.com/amanharwara"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
        </li>
        <li className="mr-8 md:mr-0 md:mb-6 hover:underline">
          <a
            href="https://gitlab.com/amanharwara"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitLab
          </a>
        </li>
        <li className="hover:underline">
          <a
            href="https://mastodon.social/@amanharwara"
            target="_blank"
            rel="noreferrer noopener"
          >
            Mastodon
          </a>
        </li>
      </ul>
      <ul
        className="md:mt-0 flex flex-row md:flex-col"
        aria-label="List of music-related links"
      >
        <li className="mr-8 md:mr-0 md:mb-6 hover:underline">
          <a
            href="https://amanharwara.bandcamp.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Bandcamp
          </a>
        </li>
        <li className="mr-8 md:mr-0 md:mb-6 hover:underline">
          <a
            href="https://open.spotify.com/artist/0oS1w3XT067ttzelzj67b6"
            target="_blank"
            rel="noreferrer noopener"
          >
            Spotify
          </a>
        </li>
        <li className="hover:underline">
          <a
            href="https://www.youtube.com/channel/UCHk6MIPQhtZf6zFS_FrDHKg"
            target="_blank"
            rel="noreferrer noopener"
          >
            YouTube
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
