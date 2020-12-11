<template>
  <div class="section" id="work-section">
    <h1>Work</h1>
    <div class="projects-container">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
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
$col-gap: 4vw;
$row-gap: 6vw;

h1 {
  margin-bottom: 4vw;
}

p {
  margin-top: 4vw;
  text-align: center;
  font-size: 1.15vw;

  a {
    color: #000;
    font-weight: 500;
  }
}

#work-section {
  padding-top: 6vw;
  padding-bottom: 6vw;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(2, 40vw);
  grid-template-rows: repeat(2, 85vh);
  gap: $col-gap $row-gap;
}

@media screen and (max-width: 800px){
  .projects-container {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, min(40vh, 10rem));
  }
  p {
    font-size: 1rem;
    margin-top: 2rem;
  }
}
</style>