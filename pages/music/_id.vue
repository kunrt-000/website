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
          />
          <Button :href="release.links.apple" label="Apple Music" newTab />
          <Button :href="release.links.spotify" label="Spotify" newTab />
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

<style lang="scss" scoped></style>
