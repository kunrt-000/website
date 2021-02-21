<template>
  <main id="music">
    <Header page="music" invertColors />
    <section>
      <div class="section-container">
        <h1>Music</h1>
        <div class="releases">
          <ProjectCard
            v-for="release in releases"
            :key="release.id"
            :project="release"
            class="music-card"
            type="music"
          />
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
  data: () => {
    return {
      releases,
    }
  },
  head() {
    return {
      title: `Music - Aman Harwara`,
    }
  },
})
</script>

<style lang="scss" scoped>
header {
  padding: 1rem 1.5rem;
}
section {
  padding: 0 1.5rem;
}
.releases {
  margin-bottom: 4rem;

  & > :not(:last-child) {
    margin-bottom: 2rem;
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
  margin: 0.85rem 0;
}
@media screen and (min-width: 768px) {
  header {
    padding: 2rem 0 3.25rem;
  }
  section {
    padding: 0 0 3rem;
  }
  h1 {
    margin-top: 0;
    font-size: 2rem;
  }
  .releases {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;

    & > * {
      margin-right: 2rem;
    }
  }
}
</style>
