<template>
  <footer class="section">
    <div class="copyright">(c) Aman Harwara</div>
    <div class="social column">
      <h3>Social</h3>
      <div class="links">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://mastodon.social/@amanharwara"
          >Mastodon</a
        >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/aman.harwara"
          >Instagram</a
        >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/amanharwara"
          >GitHub</a
        >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://gitlab.com/amanharwara"
          >GitLab</a
        >
      </div>
    </div>
    <div class="music column">
      <h3>Music</h3>
      <div class="links">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://amanharwara.bandcamp.com"
          >Bandcamp</a
        >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://open.spotify.com/artist/0oS1w3XT067ttzelzj67b6"
          >Spotify</a
        >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://music.apple.com/us/artist/aman-harwara/1516521816"
          >Apple Music</a
        >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCHk6MIPQhtZf6zFS_FrDHKg"
          >YouTube</a
        >
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: #080808;
  background: var(--alt-bg-2);
  color: #fff;
  display: flex;
  align-items: flex-start;

  & > :not(:last-child) {
    margin-right: 4.5vw;
  }
}

.column,
.links {
  display: flex;
  flex-direction: column;
}

a {
  color: #fff;
  text-decoration: none;
  font-size: 1.35vw;
  font-weight: 300;

  &:not(:last-child) {
    margin-bottom: 0.5vw;
  }

  &:hover {
    text-decoration: underline;
  }
}

h3,
.copyright {
  margin: 0 0 0.75vw 0;
  font-size: 1.35vw;
}

@media screen and (max-width: 800px) {
  footer {
    display: block;
    padding: 1.75rem;

    h3,
    .copyright {
      font-size: 1.25rem;
    }

    .copyright {
      margin-bottom: 1.5rem;
    }

    .column {
      display: inline-flex;

      &:last-child {
        margin-left: 2rem !important;
      }

      *:not(:last-child) {
        margin-bottom: 1rem;
      }
    }

    a {
      font-size: 1.15rem;
    }
  }
}
</style>