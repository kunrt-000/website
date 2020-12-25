<template>
  <footer>
    <div class="copyright">(c) Aman Harwara</div>
    <div class="social column">
      <div class="column-title">Social</div>
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
      <div class="column-title">Music</div>
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
  padding: 1.5rem;
  background: #080808;
  color: #fff;
}
.copyright {
  margin-bottom: 1rem;
}
.links {
  display: flex;
  flex-flow: column nowrap;
}
.column {
  display: inline-block;
}
.social {
  margin-right: 3rem;
}
.column-title {
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 1.25rem;
}
a {
  color: #fff;
  &:hover {
    text-decoration: none;
  }
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
}
@media screen and (min-width: 768px) {
  footer {
    padding: 3rem 5rem;
    display: flex;
    align-items: flex-start;
  }
  .column-title {
    margin-top: 0;
  }
  .social {
    margin: 0 5rem;
  }
}
</style>
