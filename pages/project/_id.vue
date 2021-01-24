<template>
  <div id="project">
    <Header page="project" invertColors />
    <ProjectInfoSection :project="project" />
    <div class="screenshots">
      <h2>Screenshots:</h2>
      <img
        :src="
          require(`~/static/assets/projects/${project.id}/screenshots/${src}`)
        "
        :alt="`${project.title} Screenshot`"
        :key="src"
        v-for="src in project.screenshots"
        loading="lazy"
      />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import projects from '@/data/projects'
export default Vue.extend({
  computed: {
    project() {
      let id = this.$route.params.id
      let project = projects.find((project) => project.id === id)
      return project
    },
  },
})
</script>

<style lang="scss" scoped>
header {
  padding: 1rem 1.5rem;
}
.screenshots {
  padding: 0 1.5rem;
  img {
    width: 100%;
    margin-bottom: 4vw;
  }
}
@media screen and (min-width: 768px) {
  header {
    padding: 2rem 5rem 3.25rem;
  }
  .screenshots {
    padding: 2rem 5rem;
  }
}
</style>
