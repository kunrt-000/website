<template>
  <section id="work-section">
    <div class="section-container">
      <h1>Work</h1>
      <div class="projects-container">
        <!-- <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          type="work"
        /> -->
        <div
          class="project"
          v-for="project in projects"
          :key="project.id"
          :style="`background: ${project.color}`"
        >
          <NuxtLink :to="`/project/${project.id}`" class="project-link">
            <h2>{{ project.title }}</h2>
            <p>{{ project.shortDescription }}</p>
            <div class="overlay"></div>
          </NuxtLink>
        </div>
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
.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.15s;
}
.project-link {
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 2rem;
  width: 100%;
  height: 100%;
  position: relative;
  text-decoration: none;
  color: #fff;

  h2 {
    font-size: 2.65rem;
    transition: font-size 0.15s;
  }

  &:hover {
    .overlay {
      opacity: 1;
    }
  }
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
    flex-flow: row wrap;
    & > :first-child,
    & > :nth-child(3n + 1) {
      flex: 1 100%;

      h2 {
        font-size: 3rem;
      }

      p {
        max-width: 50%;
      }

      &:hover {
        h2 {
          font-size: 3.35rem;
        }
      }
    }
  }
  .project-link {
    padding: 5rem;
    text-align: center;
    align-items: center;

    &:hover {
      h2 {
        font-size: 3rem;
      }
    }
  }
  .project {
    flex: 1 50%;
    min-height: 75vh;
    margin: 0 !important;
    z-index: 0;
  }
  p {
    margin: 2rem 0;
  }
}
</style>
