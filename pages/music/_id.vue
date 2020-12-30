<template>
  <main>
    <Header invertColors />
    <section>
      <div class="left">
        <h1>{{ release.title }}</h1>
        <div class="meta">
          {{ release.date }} <span>·</span> {{ release.genre }}
        </div>
        <p>{{ release.description }}</p>
        <div class="tracklist">
          <b>Tracklist:</b>
          <ol>
            <li v-for="track in release.tracklist" :key="track">{{ track }}</li>
          </ol>
        </div>
      </div>
      <div class="right">
        <div class="cover">
          <img
            :src="require(`~/static/assets/music/${release.id}.png`)"
            :alt="`Cover art for ${release.title}`"
          />
        </div>
        <div class="links">
          <Button
            :href="release.links.bandcamp"
            label="Buy on Bandcamp"
            newTab
            hasIcon
          >
            <Bandcamp />
          </Button>
          <Button
            :href="release.links.apple"
            label="Apple Music"
            newTab
            hasIcon
          >
            <AppleMusic />
          </Button>
          <Button :href="release.links.spotify" label="Spotify" newTab hasIcon>
            <Spotify />
          </Button>
        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import releases from '@/data/music'
export default Vue.extend({
  computed: {
    release() {
      let id = this.$route.params.id
      let release = releases
        .map((release) => {
          let genre = release.genre
          return {
            ...release,
            genre: typeof genre === 'object' ? genre.join(' / ') : genre,
          }
        })
        .find((release) => release.id === id)
      return release
    },
  },
})
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-flow: column-reverse nowrap;
  padding: 0 1.5rem 1rem;
}
.cover {
  img {
    width: 100%;
  }
}
.links {
  display: flex;
  flex-flow: column nowrap;
  margin: 1rem 0 0;

  .icon,
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  & > :not(:last-child) {
    margin-bottom: 0.65rem;
  }
}
h1 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 1rem 0;
  font-size: 2rem;
}
.meta {
  font-size: 0.9rem;
}
p {
  font-size: 1.1rem;
  line-height: 1.3;
}
.tracklist {
  font-size: 1.035rem;
}
@media screen and (min-width: 768px) {
  section {
    padding: 0 5rem 3rem;
    flex-flow: row nowrap;
  }
  .left {
    width: 65%;
    padding-right: 5rem;
  }
  .right {
    width: 35%;
  }
  h1 {
    font-size: 3rem;
  }
  .meta {
    font-size: 0.95rem;
  }
  .links {
    flex-flow: row wrap;
    justify-content: center;
    a {
      font-size: 1rem;
      padding: 0.75rem 1rem;

      &:not(last-child) {
        margin-right: 0.5rem;
      }
    }
  }
}
</style>
