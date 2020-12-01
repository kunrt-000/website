<template>
  <footer class="section">
    <div class="copyright">(c) Aman Harwara</div>
    <div class="social column">
      <h3>Social</h3>
      <div class="links">
        <a target="blank" href="https://mastodon.social/@amanharwara"
          >Mastodon</a
        >
        <a target="blank" href="https://instagram.com/aman.harwara"
          >Instagram</a
        >
        <a target="blank" href="https://github.com/amanharwara">GitHub</a>
        <a target="blank" href="https://gitlab.com/amanharwara">GitLab</a>
      </div>
    </div>
    <div class="music column">
      <h3>Music</h3>
      <div class="links">
        <a target="blank" href="https://amanharwara.bandcamp.com">Bandcamp</a>
        <a
          target="blank"
          href="https://open.spotify.com/artist/0oS1w3XT067ttzelzj67b6"
          >Spotify</a
        >
        <a
          target="blank"
          href="https://music.apple.com/us/artist/aman-harwara/1516521816"
          >Apple Music</a
        >
        <a
          target="blank"
          href="https://www.youtube.com/channel/UCHk6MIPQhtZf6zFS_FrDHKg"
          >YouTube</a
        >
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: #070707;
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

h3 {
  margin: 0 0 0.75vw 0;
}
</style>