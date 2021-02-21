<template>
  <section id="work-section">
    <div class="section-container">
      <h1>Work</h1>
      <div class="projects-container">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          type="work"
        />
        <!-- <div
          class="project"
          v-for="project in projects"
          :key="project.id"
        ></div> -->
      </div>
      <p class="open-source-work">
        My open-source projects can be found on
        <a
          href="https://github.com/amanharwara/"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub</a
        >
        and
        <a
          href="https://gitlab.com/amanharwara/"
          target="_blank"
          rel="noopener noreferrer"
          >GitLab</a
        >.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import projects from '@/data/projects'

export default Vue.extend({
  data: () => {
    return {
      projects,
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
.projects-container > :not(:last-child) {
  margin-bottom: 1.5rem;
}
@media screen and (min-width: 768px) {
  section {
    padding: 3rem 0;
  }
  h1 {
    font-size: 3rem;
    margin-top: 0;
    text-align: left;
  }
  .projects-container {
    display: flex;
    & > :not(:last-child) {
      margin-bottom: 0;
      margin-right: 2rem;
    }
  }
  p {
    margin: 2rem 0;
  }
}
</style>
