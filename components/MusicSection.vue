<template>
  <section id="music-section">
    <h1>Music</h1>
    <div class="music-container">
      <project-card
        v-for="project in music"
        :key="project.id"
        :project="project"
        type="music"
        class="music-card"
      />
    </div>
    <Button label="View All" href="/music" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import music from '@/data/music'
import ProjectCard from './ProjectCard.vue'

export default Vue.extend({
  data: () => {
    return {
      music: music.slice(0, 3),
    }
  },
})
</script>

<style lang="scss" scoped>
section {
  padding: 1.5rem;
}
h1 {
  font-size: 2rem;
  margin-top: 0;
}
.music-container > :not(:last-child) {
  margin-bottom: 1.5rem;
}
.button {
  margin: 1rem 0;
}
@media screen and (min-width: 768px) {
  section {
    padding: 0 5rem 3rem;
    padding: 0 max(5rem, 3vw) max(3rem, 3vw);
  }
  h1 {
    font-size: 3rem;
    font-size: max(3rem, 1.85vw);
    margin-top: 0;
    text-align: left;
  }
  .music-container {
    display: flex;
    & > :not(:last-child) {
      margin-bottom: 0;
      margin-right: 2rem;
      margin-right: max(2rem, 3vw);
    }
  }
  .button {
    margin: 2rem 0;
  }
}
</style>
