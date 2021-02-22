<template>
  <div id="project">
    <Header page="project" invertColors />
    <ProjectInfoSection :project="project" />
    <section class="screenshots">
      <div class="section-container">
        <h2>Screenshots:</h2>
        <picture :key="src" v-for="src in project.screenshots">
          <source
            :srcSet="
              require(`~/static/assets/projects/${project.id}/screenshots/${src}?webp`)
            "
            type="image/webp"
          />
          <source
            :srcSet="
              require(`~/static/assets/projects/${project.id}/screenshots/${src}`)
            "
            type="image/png"
          />
          <img
            :src="
              require(`~/static/assets/projects/${project.id}/screenshots/${src}`)
            "
            :alt="`${project.title} Screenshot`"
            loading="lazy"
          />
        </picture>
      </div>
    </section>
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
  padding: 0.15rem 1.5rem 0;
  background: #fafafa;
  img {
    width: 100%;
    margin-bottom: 4vw;
  }
}
@media screen and (min-width: 768px) {
  header {
    padding: 2rem 0 3.25rem;
  }
  .screenshots {
    padding: 1.35rem 0;
    margin-top: 1.35rem;
  }
}
</style>
