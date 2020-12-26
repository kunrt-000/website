<template>
  <main id="music">
    <Header page="music" invertColors />
    <section>
      <h1>Music</h1>
      <div class="releases">
        <a
          :href="`/music/${release.id}`"
          class="release"
          v-for="release in releases"
          :key="release.id"
        >
          <div class="cover">
            <img
              :src="require(`~/static/assets/music/${release.id}.png`)"
              :alt="`Cover art for ${release.title}`"
            />
            <div class="overlay"></div>
          </div>
          <div class="title">{{ release.title }}</div>
        </a>
      </div>
    </section>
    <Footer />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import releases from '@/data/music'
export default Vue.extend({
  data: () => {
    return {
      releases,
    }
  },
})
</script>

<style lang="scss" scoped>
section {
  padding: 0 1.5rem;
}
.release {
  display: flex;
  flex-flow: column nowrap;
  text-decoration: none;
  margin-bottom: 2rem;

  &:hover {
    text-decoration: underline;

    .overlay {
      opacity: 1;
    }
  }
}
.cover {
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.65);
  transition: opacity 0.15s;
  opacity: 0;
}
.title {
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0.5rem 0;
  color: #000;
}
@media screen and (min-width: 768px) {
  section {
    padding: 0 5rem 3rem;
  }
  h1 {
    margin-top: 0;
    font-size: 2rem;
  }
  .releases {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }
  .release {
    margin-bottom: 0;
  }
  .title {
    font-size: 1.25rem;
  }
}
</style>
